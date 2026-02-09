import React from "react";
import TimeLine from "../components/OrderComponent/TimeLine";
import OrderDetails from "../components/OrderComponent/OrderDetails";

const Order = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <a className="hover:text-primary transition-colors" href="#">
              My Orders
            </a>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-slate-900 dark:text-white font-medium">
              Tracking
            </span>
          </nav>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            Order #BD-8932
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
              Preparing
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Placed on October 24, 2024 at 12:45 PM
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">
              schedule
            </span>
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
              Estimated Delivery
            </p>
            <p className="text-xl font-extrabold text-slate-900 dark:text-white">
              1:15 PM - 1:25 PM
            </p>
          </div>
        </div>
      </div>
      <TimeLine />
      <OrderDetails />
    </>
  );
};

export default Order;
