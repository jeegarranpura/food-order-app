import React from "react";
import Item from "../components/Item";

const Menu = ({ item }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Menu
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Discover our chef's signature creations
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <button className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-white">
              Popular
            </button>
            <button className="px-4 py-2 text-xs font-bold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Newest
            </button>
            <button className="px-4 py-2 text-xs font-bold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Price
            </button>
          </div>
        </div>
        {/* <!-- Menu Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {item}
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Menu;
