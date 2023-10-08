import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../Auth/AuthContext";
import Navbar from "../navbar/Navbar";
import "./Label.scss";
const LabelRegister = () => {
  const [formData, setFormData] = useState({
    OrgName: "",
    Price: "",
    Game: "",
    Email: "",
    passWord: "",
    WhatsappNo: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/RegisterLabel", formData);
      if (response.data.err) {
        toast.error(response.data.err);
      } else {
        setFormData({
          OrgName: "",
          Price: "",
          Game: "",
          Email: "",
          passWord: "",
          WhatsappNo: "",
        });
        toast.success("Success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="virat">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="TName">ORG Name:</label>
            <input
              type="text"
              id="OrgName"
              name="OrgName"
              value={formData.OrgName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="P1">Email </label>
            <input
              type="text"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="P2">passWord </label>
            <input
              type="text"
              id="passWord"
              name="passWord"
              value={formData.passWord}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Game">Game:</label>
            <select
              className="label"
              id="Game"
              name="Game"
              value={formData.Game}
              onChange={handleChange}
              required
            >
              <option value="">Select a Game</option>
              <option value="BGMI">BGMI</option>
              <option value="Valorant">Valorant</option>
              <option value="FIFA">FIFA</option>
            </select>
          </div>
          <div>
            <label htmlFor="P4">Price </label>
            <input
              placeholder="MORE THAN 5000:)"
              type="text"
              id="Price"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Email">WhatsappNo</label>
            <input
              type="text"
              id="WhatsappNo"
              name="WhatsappNo"
              value={formData.WhatsappNo}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Create Tournament</button>
        </form>
      </div>
    </>
  );
};

export default LabelRegister;
