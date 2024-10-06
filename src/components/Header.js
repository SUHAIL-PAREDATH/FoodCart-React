import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constance";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus=useOnlineStatus()

  const {loggedUser}=useContext(userContext)
 console.log(loggedUser);
 
 
  
  return (
    <div className="flex justify-between items-center bg-pink-200 shadow-lg p-4">
    <div>
      <img className="w-36 h-auto" src={LOGO_URL} alt="Logo" />
    </div>
    <div>
      <ul className="flex items-center space-x-8 text-gray-700">
        <li className="flex items-center px-4">
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </li>
        <li>
          <Link className="hover:text-pink-500 transition-colors" to="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-pink-500 transition-colors" to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link className="hover:text-pink-500 transition-colors" to="/about">About Us</Link>
        </li>
        <li>
          <Link className="hover:text-pink-500 transition-colors" to="/contact">Contact Us</Link>
        </li>
        <li>
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
            onClick={() => {
              btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
        <li>
          <Link className="hover:text-pink-500 transition-colors font-bold" to="/contact">{loggedUser}</Link>
        </li>
      </ul>
    </div>
  </div>
  
  );
};

export default Header;
