import React from "react";
import Navbar from "../components/Navbar/navbar";
import Ride from "../components/Ride/ride";
import {user} from '../data/User';
import { rides } from "../data/Ride";

const UpcomingRides = (props) => {
  return (
    <main>
      <Navbar view="UpcomingRides" />
      {props.rides.map((i) => (
        <Ride ride={i} station_code={user.station_code} key={i["id"]} />
      ))}
    </main>
  );
};

export default UpcomingRides;