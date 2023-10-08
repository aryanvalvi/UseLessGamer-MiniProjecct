const { UserModel, RegisterTeam, RegisterModal } = require("../models/user");
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

    const exists = await UserModel.findOne({ email });

    if (exists) {
      return res.json({
        err: "email is taken Already",
      });
    }

    const user = await UserModel.create({
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
  const user = await UserModel.findOne({ email });
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

const Chat = (req, res) => {};

const RegisterBgmi = async (req, res) => {
  const { OrgName, Price, Image, Game, Email, passWord, WhatsappNo } = req.body;
  try {
    if (!OrgName) {
      return res.json({
        error: "Please Enter the Org Name",
      });
    }
    if (!Price || Price < 5000) {
      return res.json({
        error: "Please Fill the Entery Amount And it Should Be minimum 5000₹",
      });
    }

    if (!Game) {
      return res.json({
        error: "Please a game Name",
      });
    }
    const CheckEmail = await RegisterModal.findOne({ Email });
    if (!Email) {
      return res.json({
        error: "Please Enter the Email",
      });
    }
    if (CheckEmail) {
      return res.json({
        error: "Email is Already Taken",
      });
    }
    //PassWord Hashing
    const hash = await bcrypt.hash(passWord, 10);
    if (!passWord || passWord.length < 6) {
      return res.json({
        err: "password is required it should be atleast 6 Character long",
      });
    }

    //Whatsapp
    if (!WhatsappNo) {
      return res.json({
        error: "Please enter WhatApp No",
      });
    }

    const RegisterUser = await RegisterModal.create({
      OrgName,
      Price,
      Game,
      Email,
      passWord: hash,
      WhatsappNo,
    });
    //If everything is Ok then
    console.log(RegisterUser);
    return res.json(RegisterUser);
  } catch (error) {
    console.log(error);
  }
};

//RegisterTeam
const RegisterTeams = async (req, res) => {
  const { TName, P1, P2, P3, P4, PlayerEmail, WhatsappNop, EntryFee } =
    req.body;
  try {
    if (!TName) {
      return res.json({
        error: "Please Enter The Team Name",
      });
    }
    if (!P1 || !P2 || !P3 || !P4) {
      return res.json({
        error: "please Enter All the Player Name",
      });
    }

    const CheckPlayerEmail = await RegisterTeam.findOne({ PlayerEmail });
    if (!PlayerEmail) {
      return res.json({ error: "Please enter the Email" });
    }
    if (CheckPlayerEmail) {
      return res.json({
        error: "Email is already Taken",
      });
    }

    if (!WhatsappNop) {
      return res.json({
        error: "Plase the Whatsapp No",
      });
    }
    if (!EntryFee) {
      return res.json({
        error: "Please check the Money option",
      });
    }

    const TeamData = await RegisterTeam.create({
      TName,
      P1,
      P2,
      P3,
      P4,
      PlayerEmail,
      WhatsappNop,
      EntryFee,
    });
    console.log(TeamData);
    return res.json(TeamData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
  login,
  Chat,
  RegisterBgmi,
  RegisterTeams,
};
