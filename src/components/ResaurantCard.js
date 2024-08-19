import React from "react";
import { CDN_URL } from "../utils/constance";

const ResaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, 
    sla, avgRating, cloudinaryImageId } =
    resData?.info;
    // console.log(resData.info);
    
  return (
    <div className="res-card m-4 p-4 w-[250px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="relative w-full h-[160px] overflow-hidden rounded-lg">
    <img
      className="inset-0 w-full h-36 object-cover"
      src={CDN_URL + cloudinaryImageId}
      alt={name}
    />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
    <div className="flex items-center justify-between mt-2">
      <span className="text-sm text-gray-600 flex items-center">
        <svg
          className="w-4 h-4 text-yellow-500 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.54L.366 6.91l6.57-.955L10 0l3.064 5.955 6.57.955-4.878 4.64 1.122 6.54L10 15z" />
        </svg>
        {avgRating} Stars
      </span>
      <span className="text-sm text-green-500 font-semibold">
        {sla.deliveryTime} mins
      </span>
    </div>
    <h4 className="text-sm text-gray-500 mt-2 truncate">
      {cuisines.join(", ")}
    </h4>
  </div>
</div>

  );
};

export default ResaurantCard;
