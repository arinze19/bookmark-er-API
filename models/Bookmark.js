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
  category: {
    type: String
  }
});

module.exports = model('Bookmark', bookmarkSchema);
