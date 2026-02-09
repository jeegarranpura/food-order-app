import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MENU,
  CART,
  ORDERS
} from '../constants/pathconsts';

const Header = () => {
    const navigate = useNavigate();
  return (
    <div>
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <!-- Logo --> */}
            <div className="flex items-center gap-2">
              <div className="size-10 bg-primary flex items-center justify-center rounded-lg shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white">
                  restaurant
                </span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Bistro<span className="text-primary">Dash</span>
              </h1>
            </div>
            {/* <!-- Search Bar --> */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
                    search
                  </span>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm placeholder:text-slate-400"
                  placeholder="Search for your favorite dish..."
                  type="text"
                />
              </div>
            </div>
            {/* <!-- Actions --> */}
            <div className="flex items-center gap-4">
              <nav className="hidden lg:flex items-center gap-6 mr-4">
                <span className={window.location.pathname === MENU ? "text-sm font-semibold text-primary cursor-pointer" : "text-sm font-semibold text-slate-600 cursor-pointer"} onClick={() => navigate(MENU)}>
                  Menu
                </span>
                <span
                  className={window.location.pathname === ORDERS ? "text-sm font-semibold text-primary cursor-pointer" : "text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer"}
                  onClick={() => navigate(ORDERS)}
                >
                  Orders
                </span>
              </nav>
              <button className={window.location.pathname === CART ? "relative p-2 text-primary bg-primary/10 rounded-full transition-colors" : "relative p-2 text-primary text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"} onClick={() => navigate(CART)}>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
