import React from "react";
import { NavLink } from "react-router-dom";

function Mainpage() {
  return (
    <div>
      <NavLink to="/bank">Bank Page</NavLink>
      <br />
      <NavLink to="/railway">Railway Page</NavLink>
      <br />
      <NavLink to="/ssc">SSC Page</NavLink>
    </div>
  );
}

export default Mainpage;
