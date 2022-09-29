const mongoose = require("mongoose");

const MasaSchema = new mongoose.Schema({
  masa_numarasi: {
    required: true,
    type: Number,
  },
  yemek: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Yemek",
    },
  ],
});

module.exports = mongoose.model("Masa", MasaSchema);
