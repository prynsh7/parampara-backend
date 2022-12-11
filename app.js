import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import bodyParser from "body-parser";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
