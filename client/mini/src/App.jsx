import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";

import Login from "./Auth/Login";
import Gandu from "./gandu";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Register from "./Auth/Register";
import "./App.css";
import PrivateRoute from "./Auth/PrivateRoute";
import ChatRoom from "./chat/ChatRoom";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          {/* <Route
            path="/gandu"
            element={<PrivateRoute Component={Gandu}></PrivateRoute>}
          ></Route> */}
          <Route path="/chatRoom" element={<ChatRoom></ChatRoom>}></Route>
        </Routes>
        {/* <Routes></Routes> */}
      </BrowserRouter>
    </>
  );
};

export default App;
