const express = require("express");
const Yemek = require("../models/model");
const Masa = require("../models/masamodel");
const multer = require("multer");
const path = require("path");
const SharpMulter = require("sharp-multer");

const router = express.Router();

const storage = SharpMulter({
  destination: (req, file, cb) => {
    cb(null, path.resolve("public/images"));
  },
  imageOptions: {
    fileFormat: "webp",
    quality: 80,
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Post Method
router.post(
  "/post",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    const data = new Yemek({
      yemek_adi: req.body.yemek_adi,
      fiyat: req.body.fiyat,
      kategori: req.body.kategori,
      image: req.files.image[0].filename,
    });

    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

router.post("/post/masa", async (req, res) => {
  const masadata = new Masa({
    masa_numarasi: req.body.masa_numarasi,
  });

  const hamham = req.body.yemek;

  hamham.map((id) => {
    return masadata.yemek.push({
      yemek_adi: id.yemek_adi,
      quantity: id.number,
    });
  });

  try {
    const masadataToSave = await masadata.save();
    res.status(200).json(masadataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getYemek/:id", async (req, res) => {
  try {
    const data = await Masa.findOne({ masa_numarasi: req.params.id }).populate(
      "yemek"
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Yemek.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Yemek.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Category
router.get("/getCategory/:category", async (req, res) => {
  try {
    const data = await Yemek.find({ kategori: req.params.category });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
