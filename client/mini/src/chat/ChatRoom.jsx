import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import Chat from "./Chat";
const socket = io.connect("http://localhost:8000");
const ChatRoom = () => {
  const [room, setRoom] = useState("");
  const [name, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const leaveRoom = () => {
    if (room && name) {
      socket.emit("leave_room", room, name);
    }
  };

  const Kohli = () => {
    leaveRoom();
    console.log(name);
    if (name !== "" && room !== "") {
      socket.emit("join_room", room);
    }
    setShowChat(true);
  };
  useEffect(() => {
    const name = localStorage.getItem("Username");

    setUsername(name);
    return () => {
      leaveRoom();
    };
  });
  return (
    <div>
      <select className="" onChange={(e) => setRoom(e.target.value)}>
        <option>-- Select Room --</option>
        <option value="BGMI">BGMI</option>
        <option value="VALORENT">VALORENT</option>
        <option value="FIFA">FIFA</option>
      </select>

      <button onClick={Kohli} className="btn btn-secondary">
        Join Room
      </button>
      <Chat socket={socket} name={name} room={room}></Chat>
    </div>
  );
};

export default ChatRoom;
