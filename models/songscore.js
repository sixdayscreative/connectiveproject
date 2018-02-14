const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  score: Number,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  }
});

module.exports = mongoose.model("Score", scoreSchema);
