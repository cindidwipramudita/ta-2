import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addDepartemen,
  getDepartemen,
  editDepartemen,
  updateDepartemen,
  deleteDepartemen,
} from "../controllers/departemenController.js";

const router = express.Router();

router.post("/add", authMiddleware, addDepartemen);
router.get("/", authMiddleware, getDepartemen);
router.get("/:id", authMiddleware, editDepartemen);
router.put("/:id", authMiddleware, updateDepartemen);
router.delete("/:id", authMiddleware, deleteDepartemen);

export default router;
