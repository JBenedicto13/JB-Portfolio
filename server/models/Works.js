const mongoose = require("mongoose");
mongoose.pluralize(null);

const worksSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: String }
});


module.exports = mongoose.model("works_collection", worksSchema);