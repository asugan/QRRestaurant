const mongoose = require("mongoose");

const MasaSchema = new mongoose.Schema({
  masa_numarasi: {
    required: true,
    type: Number,
  },
  yemek: [
    {
      yemek_adi: {
        type: String,
      },
      quantity: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("Masa", MasaSchema);
