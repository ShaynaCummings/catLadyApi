const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CatSchema = new Schema({
  name: {
    type: String,
    required: 'Cat name is required',
    index: {
      unique: true,
    },
  },
  type: {
    type: String,
  },
  color: {
    type: String,
  },
  hairLength: {
    type: String,
    enum: ['short', 'medium', 'long'],
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'unknown'],
  },
  imageUrl: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Cats', CatSchema);
