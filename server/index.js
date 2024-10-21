import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import departemenRouter from "./routes/departemen.js";
import connectToDatabase from "./db/db.js";

connectToDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/departemen", departemenRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`);
});
