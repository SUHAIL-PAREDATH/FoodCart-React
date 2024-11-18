import React from "react";
import { CDN_URL } from "../utils/constance";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>- ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="relative p-4 w-2/12 ">
            <div className="absolute bottom-6 left-0 w-full flex justify-center">
              <button
                className="p-1 rounded-md text-xs bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="w-full h-16"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
