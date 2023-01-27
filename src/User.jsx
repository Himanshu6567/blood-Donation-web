import React from "react";
import "./Home.css";
import girl from "./girl.jpg";
const user = "Sakshi Semwal";

function User() {
  return (
    <div className=" flex items-center">
      <img src={girl} className=" rounded-full w-12 h-12" />
      {/* <img src={girl} className="dp" /> */}
      <label className="text-2xl text-white">{user}</label>
    </div>
  );
}

export default User;
