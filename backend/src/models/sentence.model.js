const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sentenceSchema = new Schema({
  sentence: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200,
  },

  mean: {
    type: String,
    required: true,
    trim: true,
    maxLength: 300,
  },

  note: {
    type: String,
    trim: true,
    maxLength: 100,
  },
});

const sentenceModel = mongoose.model('sentence', sentenceSchema, 'sentences');

module.exports = sentenceModel;
