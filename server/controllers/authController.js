const User = require("../models/user");
const bcrypt = require("bcrypt");
const { route } = require("../routes/authRoutes");

const test = (req, res) => {
  res.json("test is Working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, Password } = req.body;

    const hash = await bcrypt.hash(Password, 13);

    //check if name was entered
    if (!name) {
      return res.json({
        err: "name is Required",
      });
    }

    //chech is password is good
    if (!Password || Password.length < 6) {
      return res.json({
        err: "password is required it should be atleast 6 Character long",
      });
    }

    //gandu email

    const exists = await User.findOne({ email });

    if (exists) {
      return res.json({
        err: "email is taken Already",
      });
    }

    const user = await User.create({
      name,
      email,
      Password: hash,
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

//LOGIN

const login = async (req, res) => {
  const { email, Password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      err: "Invalid Username",
    });
  }
  const hash = user.Password;
  const isValid = await bcrypt.compare(Password, hash);
  if (!isValid) {
    return res.json({
      err: "Not a correct Password",
    });
  }

  const userId = user._id;

  console.log("Provided Password:", Password);
  console.log("Stored Password:", user.Password);
  console.log("isValid:", isValid);
  return res.json({
    message: "Login Successfull",
    userId: userId,
  });
};

module.exports = {
  test,
  registerUser,
  login,
};
