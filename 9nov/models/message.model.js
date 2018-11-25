/*
Imports & configs
*/
const mongoose = require('mongoose');
const {Schema} = mongoose;
//


/*
Model definition
*/
const messageFormat = new Schema({
    date: Date,
    authorId: String,
    message: String
});
//


/*
Export
*/
const UserModel = mongoose.model('message', messageFormat);
module.exports = UserModel;
//