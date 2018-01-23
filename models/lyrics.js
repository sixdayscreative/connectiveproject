const mongoose = require('mongoose');

const lyricSchema = mongoose.Schema({
  text: String,
  sectionType: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  }
});

module.exports = mongoose.model("Lyric", commentSchema);
