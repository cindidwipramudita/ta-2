import multer from "multer";
import Mahasiswa from "../models/Mahasiswa.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const addMahasiswa = async (req, res) => {
  try {
    const {
      name,
      email,
      gender,
      universitas,
      tanggalMasuk,
      departemen,
      password,
      role,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        error: "user already registered in mahasiswa",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role,
      profileImage: req.file ? req.file.filename : "",
    });

    const savedUser = await newUser.save();
    const newMahasiswa = new Mahasiswa({
      userId: savedUser._id,
      gender,
      universitas,
      tanggalMasuk,
      departemen,
    });

    await newMahasiswa.save();
    return res
      .status(200)
      .json({ success: true, message: "mahasiswa created" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "server error in adding mahasiswa" });
  }
};

export { addMahasiswa, upload };
