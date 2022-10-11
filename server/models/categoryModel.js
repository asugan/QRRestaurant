const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  kategori: {
    required: true,
    type: String,
  },
  yemekler: [{ type: mongoose.Schema.Types.ObjectId, ref: "Yemek" }],
});

module.exports = mongoose.model("Category", CategorySchema);
