const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const itemRoute = require("./routes/item");
const orderRoute = require("./routes/order");


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/items", itemRoute);
app.use("/api/orders", orderRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });