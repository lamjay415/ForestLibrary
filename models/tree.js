const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreeSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    leaves: [{ type: Schema.Types.ObjectId, ref: 'Leaf' }],
    branches: {
        type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

module.exports = Tree = mongoose.model("Tree", TreeSchema);
