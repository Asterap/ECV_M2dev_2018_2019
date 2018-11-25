/*
Import
*/
const MessageModel = require('../../models/message.model');
//

/*
CRU Functions for an hypothetical chat
*/
const createMessage = body => {
    // Send a message to the database
    return new Promise((resolve, reject) => {
        // Save message
        MessageModel.create(body, (error, newMessage) => {
            if (error) { // Mongo error
                return reject(error)
            }
            else { // Message sent
                return resolve(newMessage);
            }
        });
    });
};

const readMessage = () => {
    // Read all the messages
    return new Promise((resolve, reject) => {
        // Fetching messages
        MessageModel.find({}, (error, newMessage) => {
            if (error) { // Mongo error
                return reject(error)
            }
            else { // Message retrieved
                return resolve(newMessage);
            }
        });
    });
};

const deleteMessage = body => {
    // Delete a specific message
    return new Promise((resolve, reject) => {
        // Delete a message with the id passed in the body
        MessageModel.deleteOne({_id : body.id}, (error, newMessage) => {
            if (error) { // Mongo error
                return reject(error)
            }
            else { // Message deleted
                return resolve(newMessage);
            }
        });
    });
};

//

/*
Export
*/
module.exports = {
    createMessage,
    readMessage,
    deleteMessage
};
//