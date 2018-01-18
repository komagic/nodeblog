const mongoose = require('mongoose');

let usersSchema =require('../schema/users');

module.exports = mongoose.model('User',usersSchema);

let 