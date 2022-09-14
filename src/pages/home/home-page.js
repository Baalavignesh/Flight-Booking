import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import NavBar from "../../components/navbar/navbar";

function HomePage() {
  let getAllFlight = (token) => {
    axios
      .get("https://intense-plateau-18976.herokuapp.com/getflight", {
        headers: {
          authorization: `authorization ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setAllFlights(res.data);
      });
  };

  let [allFlights, setAllFlights] = useState({});
  useEffect(() => {
    console.log("home page");
    let token = reactLocalStorage.get("authToken");
    getAllFlight(token);
  }, []);

  let bookTicket = (flightKey) => {
    console.log(flightKey);
    let token = reactLocalStorage.get("authToken");

    axios
      .post(
        "https://intense-plateau-18976.herokuapp.com/bookflight",
        {
          "flight-number": flightKey,
          tickets: 1,
        },
        {
          headers: {
            authorization: `authorization ${token}`,
          },
        }
      )
      .then(() => {
        let token = reactLocalStorage.get("authToken");
        getAllFlight(token);
      });
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: "2rem",
        }}
      >
        <TextField
          placeholder="from"
          style={{ marginLeft: "1rem" }}
        ></TextField>
        <TextField placeholder="to" style={{ marginLeft: "1rem" }}></TextField>
        <TextField
          placeholder="date"
          style={{ marginLeft: "1rem" }}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "1rem" }}
        >
          Search Flights
        </Button>
      </div>

      <hr></hr>

      {/* Iterate the Flights here from the fetched Data */}

      {Object.entries(allFlights).map((arr) => {
        const [key, value] = arr;

        return (
          <div
            id={key}
            style={{
              border: "1px solid",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            <p>{value["flight-name"]}</p>
            <div>
              <p>From : {value["from"]}</p>
              <p>To : {value["to"]}</p>
            </div>

            <div>
              <p>Date : {value["date"]}</p>
              <p>Price : {value["price"]}</p>
              <p>Seat Available : {value["seat-available"]}</p>
            </div>
            <Button
              id={key}
              variant="contained"
              color="success"
              disabled={value["seat-available"] <= 0}
              onClick={() => bookTicket(value["flight-number"])}
            >
              Book Tickets
            </Button>
          </div>
        );
      })}
    </div>
  );
}
export default HomePage;
