const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String
    },
    creation_date: {
      type: String
    }
})

module.exports = mongoose.model('User', userSchema);