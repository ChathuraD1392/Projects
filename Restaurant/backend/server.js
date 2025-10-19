import cors from "cors";
import "dotenv/config.js";
import express from "express";
import { DBConnection } from "./config/db.js";
import cartRouter from "./routes/cartRoutes.js";
import foodRouter from "./routes/foodRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import userRouter from "./routes/userRoutes.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//API

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

DBConnection();

app.listen(port, () => {
  console.log(`Server is working via http://localhost:${port}`);
});
