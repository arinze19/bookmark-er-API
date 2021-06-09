const shortId = require('shortid');
const { Schema, model } = require('mongoose');

const bookmarkSchema = new Schema({
  _id: {
    type: String,
    default: shortId.generate
  },
  link: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true,
    ref: 'User'
  },
  category: {
    type: String
  }
});

module.exports = model('Bookmark', bookmarkSchema);
