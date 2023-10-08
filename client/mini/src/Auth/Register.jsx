import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.scss";
const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    Password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, Password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        Password,
      });
      if (data.err) {
        toast.error(data.err);
      } else {
        setData({});
        toast.success("login Succefull ,Welcome");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Register-container">
      <form onSubmit={registerUser}>
        <label className="label">Name</label>
        <input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          type="text"
          placeholder="Enter Name..."
        />
        <label className="label">Email</label>
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          placeholder="Enter Email..."
        />
        <label className="label">Password</label>
        <input
          value={data.Password}
          onChange={(e) => setData({ ...data, Password: e.target.value })}
          type="password"
          placeholder="Enter Password..."
        />
        <button className="T-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
