import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup-page.css";


function SignUpPage() {

const navigate = useNavigate()

  let [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });

  let handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });

    console.log(userData)
  };

  let handleSubmit = (e) => {
    // Call API Here and store JWT

    e.preventDefault();
    axios
      .post("https://intense-plateau-18976.herokuapp.com/signup", userData)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("authToken", res.data.token)
        localStorage.setItem("user", res.data.email);
        navigate('/app')
      });
    console.log("User Registered");

    // Redirect to Main Page
  };

  return (
    <div className="signup-div">
      <h1 style={{ textAlign: "center" }}>Register User</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} className="form-div">
          <TextField
            placeholder="Name"
            name="name"
            onChange={handleChange}
          ></TextField>
          <TextField
            placeholder="Email"
            name="email"
            onChange={handleChange}
          ></TextField>

          <TextField
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          ></TextField>

          <Button
            className="primary"
            variant="contained"
            type="submit"
            value="Register Now"
          >
            Register Now
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
