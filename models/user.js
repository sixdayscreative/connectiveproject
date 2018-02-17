const mongoose = require('mongoose'),
      passportLocalMongoose = require("passport-local-mongoose"),
      UserSchema = new mongoose.Schema({
        name: {
          familyName: String,
          givenName: String,
          middleName: String
        },
        emails: [
          {
            value: String,
            type: String
          }
        ],
        photos: [
          {
            value: String
          }
        ],
        bio: String,
        username: String,
        password: String,
        sets: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Songset"
        }
      ]
      });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
