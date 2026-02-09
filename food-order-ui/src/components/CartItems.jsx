import React from "react";

const CartItems = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 group hover:border-primary/30 transition-all">
      <div className="size-24 rounded-xl overflow-hidden flex-shrink-0">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdD53wPZV3wjqRJfw4fYhyEYXdkz-R_D6NVZOheAN_qZPStva-XAECWXj6LKfyUg_4T6P8iuRpbwoxNYd3J23KxlOnMyLNdkqFJkNufVnTn655vwOs9xUap5N_wnU-yTlQDiz6zs7U1E_xHBaoz9T2dQJuOKwxOEU2px-xbEQQUd1T9JTRVd9-esEwdfGoT068iQVuQ55w9mn0K0x370XjE7SREsyt-r9dYIYSFMWIdVuQuk4VPzgTRNOaUxanzo075USjUeSjxIs')`,
          }}
        ></div>
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
          Classic Wagyu Burger
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Extra Cheese, No Onions
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-end gap-3">
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700">
          <button className="size-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all">
            <span className="material-symbols-outlined text-sm">remove</span>
          </button>
          <span className="w-8 text-center font-bold text-sm">1</span>
          <button className="size-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
        <span className="font-bold text-primary">$22.00</span>
      </div>
      <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};

export default CartItems;
