import React, { useState, useEffect } from "react";
import ResaurantCard from "./ResaurantCard";
import Shimmer from "./Shimmer";
// import {useState} from 'react'
import { Link } from "react-router-dom";

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

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          className="search-box"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
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
        <button
          onClick={() => {
            const filterdData = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(filterdData);
            setFilteredResturant(filterdData);
          }}
          className="filter-btn"
        >
          Filter Top Rated Restaurant{" "}
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <ResaurantCard resData={restaurant}></ResaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
