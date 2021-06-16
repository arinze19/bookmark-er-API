const bcrypt = require('bcrypt');
const shortId = require('shortid');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  _id: {
    type: String,
    default: shortId.generate
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  bookmarks: [
    {
      type: String,
      ref: 'Bookmark',
      required: true
    }
  ]
});

userSchema.virtual('password').get(function () {
  return this.hashedPassword;
});

userSchema.virtual('password').set(function (plainText) {
  const salt = bcrypt.genSaltSync(10);
  this.hashedPassword = bcrypt.hashSync(plainText, salt);
});

module.exports = model('User', userSchema);
