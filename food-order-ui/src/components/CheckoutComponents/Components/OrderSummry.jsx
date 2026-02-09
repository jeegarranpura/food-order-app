import React from "react";
import { useNavigate } from "react-router-dom";
import { ORDERS } from "../../../constants/pathconsts";

const OrderSummry = () => {
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate(ORDERS);
  };
  return (
    <>
      <aside className="w-full lg:w-96 flex-shrink-0">
        <div className="sticky top-24 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Order Summary
              </h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex gap-4">
                <div
                  className="size-16 rounded-lg bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCutTJBC2N7JVCRAuNFAS2m6KgC7p7EFVbmWDk9auob2vNsoK_Zvx5emABAakyQMzCQQjp3nMTUkt_Nu_hD7ampdjkXIFM8MSpehoY6lPUrYTaI3gBovIuxXRpkCXjHQCke5X__3inKou346_KiKW4xA2CNB40Ir2-q6__SJuDDH32u88jpHLKsLlNNysNwpX7b9q_3wlM2r19TyqwFqYyESjIMOKOcVlK6va08Sbwsmo9nHsBkKwt1z1nbMpgq5dGGW81dKHNc4qY')`,
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Truffle Mushroom Risotto
                  </p>
                  <p className="text-xs text-slate-500">Qty: 1</p>
                  <p className="text-sm font-bold text-primary mt-1">$18.50</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="size-16 rounded-lg bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdD53wPZV3wjqRJfw4fYhyEYXdkz-R_D6NVZOheAN_qZPStva-XAECWXj6LKfyUg_4T6P8iuRpbwoxNYd3J23KxlOnMyLNdkqFJkNufVnTn655vwOs9xUap5N_wnU-yTlQDiz6zs7U1E_xHBaoz9T2dQJuOKwxOEU2px-xbEQQUd1T9JTRVd9-esEwdfGoT068iQVuQ55w9mn0K0x370XjE7SREsyt-r9dYIYSFMWIdVuQuk4VPzgTRNOaUxanzo075USjUeSjxIs')`,
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Classic Wagyu Burger
                  </p>
                  <p className="text-xs text-slate-500">Qty: 2</p>
                  <p className="text-sm font-bold text-primary mt-1">$44.00</p>
                </div>
              </div>
              <hr className="border-slate-100 dark:border-slate-800" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>Subtotal</span>
                  <span>$62.50</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>Delivery Fee</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>Estimated Tax</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between text-lg font-extrabold text-slate-900 dark:text-white pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span>Total</span>
                  <span>$67.50</span>
                </div>
              </div>
              <button
                className="w-full py-4 bg-primary hover:bg-[#d84a1d] text-white font-extrabold rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                onClick={() => handlePlaceOrder()}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                Place Order
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-4">
                By placing an order, you agree to our{" "}
                <a className="underline" href="#">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 text-slate-400">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl">
                verified_user
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Secure
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl">
                schedule
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                30-45 Min
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl">
                support_agent
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Support
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default OrderSummry;
