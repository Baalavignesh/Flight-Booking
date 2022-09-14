import { Person } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  let token = localStorage.getItem("authToken");
  let handleSignout = () => {
    // SignOut User Here
    axios
      .get("https://intense-plateau-18976.herokuapp.com/signout")
      .then((res) => {
        console.log(res.data);

        localStorage.clear();
        navigate("/");
      });
    // Clear Token in Cache
  };

  let getMyBooking = () => {
    console.log(token);
    axios
      .get("https://intense-plateau-18976.herokuapp.com/mybooking", {
        headers: {
          authorization: `authorization ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data["my-bookings"]);
      });
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#001E3C",
      }}
    >
      <div>
        <h1
          style={{
            marginLeft: "1rem",
            padding: "1rem",
            color: "white",
            fontSize: "26px",
          }}
        >
          Go Flights
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "2rem" }}>
          <Button variant="contained" color="secondary" onClick={getMyBooking}>
            My Bookings
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "4rem",
            cursor: "pointer",
          }}
          onClick={handleSignout}
        >
          <h1
            style={{ paddingRight: "1rem", color: "white", fontSize: "16px" }}
          >
            Logout
          </h1>
          <Avatar sx={{ bgcolor: "red" }}>
            <Person />
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
