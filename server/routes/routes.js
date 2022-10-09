const express = require("express");
const Yemek = require("../models/model");
const Masa = require("../models/masamodel");
const Admin = require("../models/adminModel");
const Category = require("../models/categoryModel");
const multer = require("multer");
const path = require("path");
const SharpMulter = require("sharp-multer");
const { requireUser, optionalUser } = require("../propelauth");

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

router.get("/whoami", requireUser, (req, res) => {
  res.json({ userId: req.user.userId });
});

router.get("/whoami_optional", optionalUser, (req, res) => {
  if (req.user) {
    res.json({ userId: req.user.userId });
  } else {
    res.json({ userId: null });
  }
});

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

router.post("/post/category", async (req, res) => {
  const categorydata = new Category({
    kategori: req.body.kategori,
  });

  try {
    const categorydataToSave = await categorydata.save();
    res.status(200).json(categorydataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Admin Register

router.post("/post/newAdmin", async (req, res) => {
  const admin = new Admin({
    username: req.body.username,
    password: req.body.password,
    isAdmin: req.body.userisadmin,
  });

  try {
    const dataadmin = await admin.save();
    res.status(200).json(dataadmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getYemek/:id", async (req, res) => {
  try {
    const data = await Masa.findOne({
      masa_numarasi: req.params.id,
      finished: false,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllYemek", async (req, res) => {
  try {
    const PAGE_SIZE = 10;
    const page = parseInt(req.query.page || "0");
    const total = await Masa.countDocuments({});
    const posts = await Masa.find({ finished: false })
      .sort({ _id: -1 })
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page);

    res.json({
      totalPages: Math.ceil(total / PAGE_SIZE),
      posts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllFinishedYemek", async (req, res) => {
  try {
    const data = await Masa.find({ finished: true }).sort({ _id: -1 });
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

//Get all Trans
router.get("/getMasa", async (req, res) => {
  try {
    const data = await Masa.find().sort({ _id: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get Categories
router.get("/getCategories", async (req, res) => {
  try {
    const data = await Category.find();
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
router.patch("/masa/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = { finished: req.body.finished };
    const options = { new: true };

    const result = await Masa.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Yemek.findByIdAndDelete(id);
    res.send(`Document with ${data.yemek_adi} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
