const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pw: {
    type: String,
    required: true
  },
  lvlprogress: Array,
  ingredients: Array,
  recipes: Array,
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;