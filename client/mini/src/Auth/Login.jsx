import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    Password: "",
  });
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, Password } = data;
    try {
      const response = await axios.post("/login", {
        email,
        Password,
      });
      const { data: responseData } = response;

      if (responseData.err) {
        toast.error(responseData.err);
      } else {
        setData({
          email: "",
          Password: "",
        });
        toast.success("Login Successful");

        const userId = responseData.userId;

        localStorage.setItem("login", userId);
        localStorage.setItem("Username", email);

        // navigate("/gandu");

        // Store userId in localStorage
        localStorage.setItem("userId", userId);
        console.log("User ID stored in localStorage:", email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      // navigate("./gandu");
    }
  });

  return (
    <div>
      <form action="" onSubmit={loginUser}>
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
          type="password"
          placeholder="Enter a Password..."
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
