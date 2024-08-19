import React, { useState, useEffect } from "react";
import ResaurantCard from "./ResaurantCard";
import Shimmer from "./Shimmer";
// import {useState} from 'react'
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);

  console.log("body rendered"); 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.959380411907478&lng=77.63786192983387&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>You Are Offline !!!!</h1>;

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body  bg-gray-100 min-h-screen p-8">
  <div className="filter flex bg-white p-6 rounded-lg shadow-md mb-8 justify-between">
    <div className="m-4 p-4 flex flex-col sm:flex-row items-center ">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4"
        placeholder="Search restaurants..."
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <button
        className=" bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300"
        onClick={() => {
          console.log(searchData);
          const filteredResturant = ListOfRestaurant.filter((res) =>
            res.info.name.toLowerCase().includes(searchData.toLowerCase())
          );
          console.log(filteredResturant);
          setFilteredResturant(filteredResturant);
        }}
      >
        Search
      </button>
    </div>
    <div className="m-4 p-4 flex flex-col sm:flex-row items-center ">
    <button
      onClick={() => {
        const filterdData = ListOfRestaurant.filter(
          (res) => res.info.avgRating > 4.2
        );
        setFilteredResturant(filterdData);
      }}
      className="filter-btn bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
    >
      Filter Top Rated Restaurants
    </button>
    </div>
    
  </div>
  <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {filteredResturant.map((restaurant) => (
      <Link
        key={restaurant.info.id}
        to={"/restaurant/" + restaurant.info.id}
      >
        <ResaurantCard resData={restaurant} />
      </Link>
    ))}
  </div>
</div>

  );
};

export default Body;
