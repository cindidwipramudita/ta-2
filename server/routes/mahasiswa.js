import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addMahasiswa,
  upload,
  // getDepartemen,
  // editDepartemen,
  // updateDepartemen,
  // deleteDepartemen,
} from "../controllers/mahasiswaController.js";

const router = express.Router();

router.post("/add", authMiddleware, upload.single("image"), addMahasiswa);
// router.get("/", authMiddleware, getDepartemen);
// router.get("/:id", authMiddleware, editDepartemen);
// router.put("/:id", authMiddleware, updateDepartemen);
// router.delete("/:id", authMiddleware, deleteDepartemen);

export default router;
