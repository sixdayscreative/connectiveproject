const mongoose = require('mongoose');

const lyricsSchema = mongoose.Schema({
  verseType: String,
  text: String,
  order: Number,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  }
});

module.exports = mongoose.model("Lyrics", lyricsSchema);
