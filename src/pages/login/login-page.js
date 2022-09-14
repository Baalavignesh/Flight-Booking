import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  let [showError, setShowError] = useState("");
  let [userData, setUserData] = useState({
    password: "",
    email: "",
  });

  let handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // Call API Here and store JWT
    console.log(userData);
    axios
      .post("https://intense-plateau-18976.herokuapp.com/login", userData)
      .then((res) => {
        console.log(res.status);
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("user", res.data.email);
        navigate("/app");
      })
      .catch((e) => {
        console.log(e);
        setShowError("Wrong Email or Password");
      });
    console.log("User Logged In");

    // Redirect Here
  };

  return (
    <div className="signup-div">
      <h1 style={{ textAlign: "center" }}>Login User</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} className="form-div">
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
            Login
          </Button>
        </form>

      </div>
      <p style={{ color: "red", textAlign:"center" }}> {showError}</p>

    </div>
  );
}

export default LoginPage;
