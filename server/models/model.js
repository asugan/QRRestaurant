const mongoose = require("mongoose");

const YemekSchema = new mongoose.Schema({
  yemek_adi: {
    required: true,
    type: String,
  },
  fiyat: {
    required: true,
    type: Number,
  },
  kategori: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Yemek", YemekSchema);
