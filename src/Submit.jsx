import React from "react";
import "./Profile.css";
import User from "./User";
import { BiArrowBack } from "react-icons/bi";
import girl from "./girl.jpg";
import male from "./male.png";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

import "./Home.css";

const user = "Sakshi Semwal";

function Submit() {
  return (
    <>
      <div className="flex justify-between px-7 bg-red-700 w-full h-24 rounded-3xl absolute">
        <h1 className=" flex items-center text-3xl text-white">
          <BiArrowBack className="text-white cursor:pointer " /> Profile
        </h1>

        <User />
      </div>
      <div className="bam">
        <img src={girl} className="pp"></img>
        <div className="bloody">A+</div>
        <div className="tags">
          <div className="nametag">Sakshi Semwal</div>
          <div className="tag">Beginner Donor</div>
        </div>
        <div className="inform">
          <div className="h2">Info</div>
          <div className="h4">Address: Rishikesh</div>
          <div className="h4">Age: 24</div>

          <div className="bar">
            <div className="done"></div>
            <div className="choto">15 days until you can donate again</div>
          </div>
        </div>
      </div>
      <div>
        <div className="upre">
          <div>
            <span className="non">Donation</span>
            <span className="non active">Requests</span>
          </div>
          <br />
          <div class="flex-container">
            <div className="kobe">22-01-2023</div>
            <div className="from">Sunanda Hospital</div>
            <div className="day">4 day ago</div>
          </div>
          <div class="flex-container">
            <div className="kobe">02-09-2022</div>
            <div className="from">kansh Hospital</div>
            <div className="day">60 day ago</div>
          </div>
        </div>
        <div className="niche">
          <div className="non">Reviews</div>
          <div>
            <img src={male} className="other"></img>
            <span className="span">Karim Chowdhury</span>
          </div>
          <div className="comment">
            <FaQuoteLeft /> Blood Donation Is A Small Act Of Kindness That Does
            Great And Big Wonders.
            <FaQuoteRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Submit;
