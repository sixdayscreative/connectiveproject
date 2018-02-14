const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Each song must have a title.",
    index: true
  },
  author: {
    type: String,
    default: "Unknown"
  },
  contributors: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      displayName: String
    }
  ],
  source: String,
  simplicity: {
    type: Number,
    default: 0
  },
  worship: {
    type: Number,
    default: 0
  },
  teaching: {
    type: Number,
    default: 0
  },
  mood: Array,
  theme: Array,
  worshipScores: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Score"
    }
  ],
  teachingScores: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Score"
    }
  ],
  simplicityScores: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Score"
    }
  ],
  lyrics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lyrics"
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Song", songSchema);
