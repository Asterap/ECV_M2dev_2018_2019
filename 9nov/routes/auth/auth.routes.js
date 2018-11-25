/*
Imports
*/
const express = require('express');
const authRouter = express.Router({mergeParams: true});
const {register, login} = require('./auth.controller');
const {checkFields} = require('../../services/request.checker');
const {sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse} = require('../../services/server.response');
//

/*
Routes definition
*/
class AuthRouterClass {
    routes() {
        // HATEOAS
        authRouter.get('/', (req, res) => {
            res.json('HATEOAS for auth');
        });

        // Register
        authRouter.post('/register', (req, res) => {
            // Use controller function
            register(req.body)
                .then(apiResponse => sendApiSuccessResponse(res, 'Successfully registered', apiResponse))
                .catch(apiResponse => sendApiSuccessResponse(res, 'Error during registration', apiResponse))
        });

        // Login
        authRouter.post('/login', (req, res) => {
            // Use controller function
            login(req.body)
                .then(apiResponse => sendApiSuccessResponse(res, 'Successfully logged', apiResponse))
                .catch(apiResponse => sendApiSuccessResponse(res, 'Failed to login', apiResponse))
        });
    };

    init() {
        this.routes();
        return authRouter;
    }
}

//

/*
Export
*/
module.exports = AuthRouterClass;
//