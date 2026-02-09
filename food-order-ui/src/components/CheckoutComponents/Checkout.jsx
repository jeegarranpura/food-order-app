import React from "react";
import UserDetails from "./Components/UserDetails";
import OrderSummry from "./Components/OrderSummry";
// import { useNavigate } from "react-router-dom";
import { CART } from "../../constants/pathconsts";



const Checkout = ({
  setIsPlaceOrder
}) => {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full">
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
          <span className="hover:text-primary cursor-pointer" onClick={()=> setIsPlaceOrder(false)}>
            Cart
          </span>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-primary font-bold">Checkout</span>
        </nav>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Checkout and Delivery Details
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Please provide your details for the delivery.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
      <UserDetails />
      <OrderSummry />
      </div>
    </div>
  );
};

export default Checkout;
