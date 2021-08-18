const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    tree: {
        type: Schema.Types.ObjectId,
        ref: 'Tree'
    },
    date: {
      type: Date,
      default: Date.now
    }
  })

module.exports = User = mongoose.model("User", UserSchema);
