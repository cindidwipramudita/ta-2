import mongoose from "mongoose";
import { Schema } from "mongoose";

const mahasiswaSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  gender: { type: String },
  universitas: { type: String },
  tanggalMasuk: { type: Date },
  departemen: {
    type: Schema.Types.ObjectId,
    ref: "Departemen",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);
export default Mahasiswa;
