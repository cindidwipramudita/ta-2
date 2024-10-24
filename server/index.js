import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import departemenRouter from "./routes/departemen.js";
import mahasiswaRouter from "./routes/mahasiswa.js";
import connectToDatabase from "./db/db.js";

connectToDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/departemen", departemenRouter);
app.use("/api/mahasiswa", mahasiswaRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`);
});
