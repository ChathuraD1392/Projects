import express from "express";
import cors from "cors";
import { DBConnection } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//API

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API is working");
});

DBConnection();

app.listen(port, () => {
  console.log(`Server is working via http://localhost:${port}`);
});
