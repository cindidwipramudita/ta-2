import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addDepartemen } from "../controllers/departemenController.js";

const router = express.Router();

router.post("/add", authMiddleware, addDepartemen);

export default router;
