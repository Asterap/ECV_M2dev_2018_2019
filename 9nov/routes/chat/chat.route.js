/*
Imports
*/
const express = require('express');
const chat = express.Router({mergeParams: true});
const {createMessage, readMessage, deleteMessage} = require('./chat.controller');
const {checkFields} = require('../../services/request.checker');
const {sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse} = require('../../services/server.response');
//

/*
Routes definition
*/
class ChatRouterClass {

    routes() {
        chat.get('/', (req, res) => {
            readMessage(req.body)
                .then(apiResponse => sendApiSuccessResponse(res, 'Message successfully fetched', apiResponse))
                .catch(apiResponse => sendApiSuccessResponse(res, 'Error during fetching', apiResponse))
        });

        // Register
        chat.post('/send', (req, res) => {
            // Use controller function
            createMessage(req.body)
                .then(apiResponse => sendApiSuccessResponse(res, 'Successfully sent', apiResponse))
                .catch(apiResponse => sendApiSuccessResponse(res, 'Error during sending', apiResponse))
        });

        chat.post('/delete', (req, res) => {
            // Use controller function
            deleteMessage(req.body)
                .then(apiResponse => sendApiSuccessResponse(res, 'Message successfully delete', apiResponse))
                .catch(apiResponse => sendApiSuccessResponse(res, 'Error during sending', apiResponse))
        });
    };

    init() {
        this.routes();
        return chat;
    }
}

//

/*
Export
*/
module.exports = ChatRouterClass;
//