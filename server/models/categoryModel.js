const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  kategori: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
