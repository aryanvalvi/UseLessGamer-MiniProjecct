const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  login,
  Chat,
  RegisterBgmi,
  RegisterTeams,
} = require("../controllers/authController");

const cors = require("cors");

//middelware
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", login);
router.get("/chatRoom", Chat);
//Register a Org
router.post("/RegisterLabel", RegisterBgmi);

//Register for an Team
router.post("/RegisterTeam", RegisterTeams);

module.exports = router;
