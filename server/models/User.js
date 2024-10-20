import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "mahasiswa", "pembimbing"],
    required: true,
  }, //Jumlah dan nama role yang ada
  profileImage: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
