import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", fontFamily: "Nunito" }}>
        Welcome to Go Flights
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "2rem", padding: "2rem" }}>
          <Button
            color="primary"
            variant="contained"
            style={{ padding: "20px 50px 20px 50px" }}
            onClick={() => navigate("signup")}
          >
            Sign-up
          </Button>
        </div>

        <div style={{ margin: "2rem", padding: "2rem" }}>
          <Button
            color="success"
            variant="contained"
            style={{ padding: "20px 50px 20px 50px" }}
            name
            onClick={() => navigate("login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
