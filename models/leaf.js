const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeafSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
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
      type: String,
      default: ""
    }
});

module.exports = Leaf = mongoose.model("Leaf", LeafSchema);
