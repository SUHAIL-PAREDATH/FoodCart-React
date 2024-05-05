import React from "react";
import { LOGO_URL } from "../utils/constance";
import { useState } from "react";

const Header = () => {
    const[btnName,setbtnName] =useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <button className="login-btn" onClick={()=>{
               btnName==="Login" ? setbtnName("LogOut") :  setbtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header ;