const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeafSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: { 
    type: String,
    required: true 
  },
  author: {
    type: String, 
  },

  date: { 
    type: Date, 
    default: Date.now 
    },
  review: {
      type: String 
    }
});

module.exports = Leaf = mongoose.model("Leaf", LeafSchema);
