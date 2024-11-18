import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearItem = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center ">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="w-6/12 mx-auto my-4 p-4">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
          onClick={handleClearItem}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h4 className="m-4 p-4">Cart is empty. Add Item to the Cart</h4>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
