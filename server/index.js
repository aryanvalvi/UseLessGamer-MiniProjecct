const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("user is connected", socket.id);
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user with Id :${socket.id} join room :${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});
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

server.listen(8000, () => {
  console.log("server is listeing on Port 8000");
});
