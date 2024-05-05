
import React from "react";
import { CDN_URL } from "../utils/constance";

const ResaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, deliveryTime, avgRating, cloudinaryImageId } =
      resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL
             +
            cloudinaryImageId
          }
          alt=""
        />
        <h3>{name}</h3>
        <h4>{avgRating}Stars</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default ResaurantCard