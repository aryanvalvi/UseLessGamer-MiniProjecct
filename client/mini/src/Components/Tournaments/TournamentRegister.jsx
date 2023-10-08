import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../Auth/AuthContext";

const TournamentRegister = () => {
  const { Teamname } = useAuth();
  const [formData, setFormData] = useState({
    TName: Teamname,
    P1: "",
    P2: "",
    P3: "",
    P4: "",
    PlayerEmail: "",
    WhatsappNop: "",
    EntryFee: "",
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
      const response = await axios.post("/RegisterTeam", formData);
      if (response.data.err) {
        toast.error(response.data.err);
      } else {
        setFormData({
          TName: Teamname,
          P1: "",
          P2: "",
          P3: "",
          P4: "",
          PlayerEmail: "",
          WhatsappNop: "",
          EntryFee: "",
        });
        toast.success("Success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="TName">Tournament Name:</label>
          <input
            type="text"
            id="TName"
            name="TName"
            value={formData.TName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="P1">Player 1:</label>
          <input
            type="text"
            id="P1"
            name="P1"
            value={formData.P1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="P2">Player 2:</label>
          <input
            type="text"
            id="P2"
            name="P2"
            value={formData.P2}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="P3">Player 3:</label>
          <input
            type="text"
            id="P3"
            name="P3"
            value={formData.P3}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="P4">Player 4:</label>
          <input
            type="text"
            id="P4"
            name="P4"
            value={formData.P4}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Email">Player Email:</label>
          <input
            type="email"
            id="PlayerEmail"
            name="PlayerEmail"
            value={formData.PlayerEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="WhatsappNo">Whatsapp Number:</label>
          <input
            type="number"
            id="WhatsappNop"
            name="WhatsappNop"
            value={formData.WhatsappNop}
            onChange={handleChange}
            required
          />
          <label htmlFor="EntryFee">EntryFee</label>
          <input
            type="text"
            name="EntryFee"
            value={formData.EntryFee}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Tournament</button>
      </form>
    </div>
  );
};

export default TournamentRegister;
