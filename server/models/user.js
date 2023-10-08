const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  Password: String,
});
const RegisterOrg = new Schema({
  OrgName: String,
  Price: Number,
  Game: String,
  Email: {
    type: String,
    unique: true,
  },
  passWord: String,
  WhatsappNo: String,
});
//Schema for Player Registration
const RegisterTeamModal = new Schema({
  OrgName: String,
  TName: String,
  P1: String,
  P2: String,
  P3: String,
  P4: String,
  PlayerEmail: {
    type: String,
    unique: true,
  },
  WhatsappNop: Number,
  EntryFee: String,
});

const UserModel = mongoose.model("User", userSchema);
const RegisterModal = mongoose.model("OrgRegister", RegisterOrg);

const RegisterTeam = mongoose.model("Team", RegisterTeamModal);

module.exports = { UserModel, RegisterModal, RegisterTeam };
