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
import Tournament from "./Components/Tournaments/Tournament";
import TournamentRegister from "./Components/Tournaments/TournamentRegister";
import LabelRegister from "./Components/Tournaments/LabelRegister";
import Bignews from "./Components/News/BigNews";
import TeamDetail from "./Components/MatchResult/TeamDetail";
import Teambada from "./Components/Teams/Teambada";
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
          <Route
            path="/tournaments"
            element={<Tournament></Tournament>}
          ></Route>
          <Route path="/bign" element={<Bignews></Bignews>}></Route>
          <Route
            path="/RegisterTeam"
            element={<TournamentRegister></TournamentRegister>}
          ></Route>
          <Route
            path="/teambada/:heading"
            element={<Teambada></Teambada>}
          ></Route>
          <Route
            path="/team/:teamName"
            element={<TeamDetail></TeamDetail>}
          ></Route>
          <Route
            path="/RegisterLabel"
            element={<LabelRegister></LabelRegister>}
          ></Route>
        </Routes>
        {/* <Routes></Routes> */}
      </BrowserRouter>
    </>
  );
};

export default App;
