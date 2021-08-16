const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreeSchema = new Schema({
    leaves: [{ type: Schema.Types.ObjectId, ref: 'Leaf' }],
    branches: {
        type: String
    }
  })

module.exports = Tree = mongoose.model("Tree", TreeSchema);
