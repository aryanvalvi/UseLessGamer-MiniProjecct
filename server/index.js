const express = require("express");
const app = express();
const cors = require("cors");
const { mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

// app.use(cors());

//database Connections
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database Connected");
  })
  .catch((err) => {
    console.log("database not connected", err);
  });

//middleware
app.use(express.json());

app.use("/", require("./routes/authRoutes"));

app.listen(8000, () => {
  console.log("server is listeing on Port 8000");
});
