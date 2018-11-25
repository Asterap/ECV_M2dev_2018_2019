/*
Import
*/
const MessageModel = require('../../models/message.model');
const UserModel = require('../../models/user.model');
//

/*
CRD Functions for an hypothetical chat
*/
const createMessage = body => {
    // Send a message to the database
    return new Promise((resolve, reject) => {
        const userId = new UserModel().getJwt(body.token);

        const messageDate = {
            message: body.message,
            date: new Date(),
            authorId: userId
        };
        // Save message
        MessageModel.create(messageDate, (error, newMessage) => {
            if (error) { // Mongo error
                return reject(error)
            } else { // Message sent
                return resolve(newMessage);
            }
        });
    });
};

const readMessage = () => {
    // Read all the messages
    return new Promise((resolve, reject) => {
        // Fetching messages
        MessageModel.find((error, newMessage) => {
            if (error) { // Mongo error
                return reject(error)
            } else { // Message retrieved
                return resolve(newMessage);
            }
        });
    });
};

const deleteMessage = body => {
    // Delete a specific message
    return new Promise((resolve, reject) => {
        // Delete a message with the id passed in the body
        MessageModel.deleteOne({_id: body.id}, (error, newMessage) => {
            if (error) { // Mongo error
                return reject(error)
            } else { // Message deleted
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