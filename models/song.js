const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const songSchema = new mongoose.Schema({
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
  source: String,
  simplicityRating: Number,
  worshipRating: Number,
  doctrineRating: Number,
  mood: Array,
  theme: Array,
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

songSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Song", songSchema);
