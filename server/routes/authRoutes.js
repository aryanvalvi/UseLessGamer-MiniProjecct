const express = require("express");
const router = express.Router();
const { test, registerUser, login } = require("../controllers/authController");

const cors = require("cors");

//middelware
router.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
