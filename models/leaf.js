<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeafSchema = new Schema({
  userId: {
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
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeafSchema = new Schema({
  tree: {
    type: Schema.Types.ObjectId,
    ref: 'Tree'
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
>>>>>>> 18023da50a5d19ade5862c7fc9a4ca98140e5573
