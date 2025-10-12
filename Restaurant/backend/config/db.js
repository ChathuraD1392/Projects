import mongoose from "mongoose";

export const DBConnection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://user_tomato:1392@cluster0.frevrjm.mongodb.net/db_tomato"
    )
    .then(() => console.log("DB Connected"));
};
