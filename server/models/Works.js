const mongoose = require("mongoose");
mongoose.pluralize(null);

const worksSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String },
    images: { type: String },
    tools: { type: Array, required: true },
});


module.exports = mongoose.model("works_collection", worksSchema);