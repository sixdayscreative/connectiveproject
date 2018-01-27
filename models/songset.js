const mongoose = require('mongoose');

const setSchema = mongoose.Schema({
  title: String,
  description: String,
  songs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song"
    }
  ],
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    displayName: String
  }
});

module.exports = mongoose.model("Songset", setSchema);
