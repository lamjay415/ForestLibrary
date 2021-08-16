const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeafSchema = new Schema({
 
  title: { 
    type: String,
    required: true 
    },
  authors: [{type: String, required: true}],
  description: String,
  image: {
    type: String, 
    trim: true
    },
  link: {
    type: String, 
    trim: true
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
