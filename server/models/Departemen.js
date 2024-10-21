import mongoose from "mongoose";

const departemenSchema = new mongoose.Schema({
  dep_nama: { type: String, required: true },
  deskripsi: { type: String },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const Departemen = mongoose.model("Departemen", departemenSchema);
export default Departemen;
