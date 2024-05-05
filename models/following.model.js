const mongoose = require('mongoose');
const userSchema = require('../models/user.model').schema;
const storeSchema = require('../models/store.model').schema;

const followingSchema = new mongoose.Schema({
    users: [userSchema], //many to many
    stores: [storeSchema], //many to many
});


module.exports = mongoose.model("Following", followingSchema);