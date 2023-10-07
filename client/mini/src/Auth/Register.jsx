import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          type="text"
          placeholder="Enter Name..."
        />
        <label>Email</label>
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="text"
          placeholder="Enter Email..."
        />
        <label>Password</label>
        <input
          value={data.Password}
          onChange={(e) => setData({ ...data, Password: e.target.value })}
          type="text"
          placeholder="Enter Password..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
