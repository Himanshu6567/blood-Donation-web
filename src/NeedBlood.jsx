import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiHospitalFill } from "react-icons/ri";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NeedBlood() {
  const [name, setname] = useState("");
  const [course, setcouse] = useState("");
  const [branch, setbranch] = useState("");
  const [number, setnumber] = useState("");
  const [mail, setmail] = useState("");
  const [blood, setblood] = useState("");

  const navigate = useNavigate();

  const senddata = () => {
    if (
      name == "" ||
      course == "" ||
      branch == "" ||
      blood == "" ||
      number == "" ||
      mail == ""
    )
      alert("all field are required");
    else {
      navigate("/profile");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className=" flex flex-col bg-indigo-400 my-3  items-center px-8 py-4 space-y-5">
        <div className="text-2xl">Request for Blood</div>
        <div> fill your information here</div>
        {/* username */}
        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <BsFillPersonFill className="text-2xl" />
          </div>
          <input
            onChange={(event) => {
              setname(event.target.value);
            }}
            type="text"
            className="h-10 w-48 md:w-64 lg:w-80 text-sm  px-7"
            required
            placeholder="Enter your full name"
          ></input>
        </div>

        {/* course */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <SiBookstack className="text-2xl" />
          </div>
          <input
            required
            onChange={(event) => {
              setcouse(event.target.value);
            }}
            type="text"
            className="h-10  text-sm md:w-64 lg:w-80 w-48 px-7"
            placeholder="Enter your course"
          ></input>
        </div>

        {/* Branch */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <BsFillPersonFill className="text-2xl" />
          </div>
          <input
            required
            onChange={(event) => {
              setbranch(event.target.value);
            }}
            type="text"
            className="h-10 w-48 md:w-64 lg:w-80 text-sm px-7"
            placeholder="Enter your Branch"
          ></input>
        </div>

        {/* Mobile Number */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <IoIosCall className="text-2xl" />
          </div>
          <input
            required
            onChange={(event) => {
              setnumber(event.target.value);
            }}
            type="number"
            className="h-10 w-48 md:w-64 lg:w-80 text-sm px-7 "
            placeholder="Enter your Number"
          ></input>
        </div>

        {/* Emait */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <MdEmail className="text-2xl" />
          </div>
          <input
            required
            onChange={(event) => {
              setmail(event.target.value);
            }}
            type="text"
            className="h-10 w-48 md:w-64 lg:w-80 text-sm px-7"
            placeholder="Enter your email"
          ></input>
        </div>

        {/* Blood group */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <RiHospitalFill className="text-2xl" />
          </div>
          <input
            required
            onChange={(event) => {
              setblood(event.target.value);
            }}
            type="text"
            className="h-10 w-48 md:w-64 lg:w-80 text-sm px-7"
            placeholder="Required Blood groop"
          ></input>
        </div>
        <button
          onClick={senddata}
          className="h-8 bg-red-600 w-48 hover:bg-red-700 text-white"
        >
          submit
        </button>
        {/* <Link
          className="h-8 text-center bg-red-600 w-48 hover:bg-red-700 text-white"
          to={"/profile/"}
        >
          submit
        </Link> */}
      </form>
    </div>
  );
}

export default NeedBlood;
