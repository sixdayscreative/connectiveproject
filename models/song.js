const mongoose = require('mongoose');

let songSchema = new mongoose.Schema({
  title: {
    type: [String],
    index: true
  },
  author: String,
  contributors: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      displayName: String
    }
  ],
  lyrics: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lyrics"
      },
    }
  ],
  source: String,
  simplicityRating: String,
  worshipRating: String,
  doctrineRating: String,
  mood: Array,
  theme: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Song", songSchema);
