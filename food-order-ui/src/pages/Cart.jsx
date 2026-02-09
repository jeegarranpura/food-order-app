import React, { useState } from "react";
import CartItems from "../components/CartItems";
import Checkout from "../components/CheckoutComponents/Checkout";
import { useNavigate } from "react-router-dom";
import { MENU } from "../constants/pathconsts";


const Cart = () => {
  const [isPlaceOrder, setIsPlaceOrder] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {isPlaceOrder ? (
        <Checkout setIsPlaceOrder={setIsPlaceOrder}/>
      ) : (
        <>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Your Cart
              </h2>
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                3 items
              </span>
            </div>
            <div className="space-y-6">
              <CartItems />
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 group hover:border-primary/30 transition-all">
                <div className="size-24 rounded-xl overflow-hidden flex-shrink-0">
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCutTJBC2N7JVCRAuNFAS2m6KgC7p7EFVbmWDk9auob2vNsoK_Zvx5emABAakyQMzCQQjp3nMTUkt_Nu_hD7ampdjkXIFM8MSpehoY6lPUrYTaI3gBovIuxXRpkCXjHQCke5X__3inKou346_KiKW4xA2CNB40Ir2-q6__SJuDDH32u88jpHLKsLlNNysNwpX7b9q_3wlM2r19TyqwFqYyESjIMOKOcVlK6va08Sbwsmo9nHsBkKwt1z1nbMpgq5dGGW81dKHNc4qY')`,
                    }}
                  ></div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Truffle Mushroom Risotto
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Gluten-Free Option
                  </p>
                </div>
                <div className="flex flex-col items-center sm:items-end gap-3">
                  <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700">
                    <button className="size-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="w-8 text-center font-bold text-sm">1</span>
                    <button className="size-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                  <span className="font-bold text-primary">$18.50</span>
                </div>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 group hover:border-primary/30 transition-all">
                <div className="size-24 rounded-xl overflow-hidden flex-shrink-0">
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpGtAlFHCekhLy9ZupMsXVc5PGue6vPTD6WXLD_h2PdKL25ghKp0wHKIbO8iFkBkaZXpdDS2YC7MRjtZtkzJRe0SRFNulksUJGAVQqArbI3TL91UVawSikjUZA19TRRmBSG7fIRx1H3seHGYMpy8LKTci7I7LliW3OXIJCYXmBM104rZzgrnKeSfjZ8KraTuIIjVwlXe8_Fak6cG-7PsQbEe_R0IbhSjOHCJKO7fkQ8GsdEfC6yOqdz0kmd-M2sfGs5Y86CHjaVkc')`,
                    }}
                  ></div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Avocado Sourdough
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Extra Chili Flakes
                  </p>
                </div>
                <div className="flex flex-col items-center sm:items-end gap-3">
                  <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700">
                    <button className="size-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="w-8 text-center font-bold text-sm">1</span>
                    <button className="size-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                  <span className="font-bold text-primary">$12.00</span>
                </div>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
            <div className="mt-8">
              <span
                className="inline-flex items-center gap-2 text-primary font-bold hover:translate-x-[-4px] transition-transform cursor-pointer"
                onClick={()=> navigate(MENU)}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Menu
              </span>
            </div>
          </div>
          <aside className="w-full lg:w-[400px]">
            <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">
                      Subtotal
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      $52.50
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">
                      Estimated Tax
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      $4.20
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">
                      Delivery Fee
                    </span>
                    <span className="font-semibold text-green-500">Free</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      Total
                    </span>
                    <span className="text-2xl font-extrabold text-primary">
                      $56.70
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      className="w-full pl-4 pr-16 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-primary focus:border-primary outline-none"
                      placeholder="Promo code"
                      type="text"
                    />
                    <button className="absolute right-2 top-2 bottom-2 px-3 bg-slate-900 dark:bg-slate-700 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors">
                      Apply
                    </button>
                  </div>
                  <button
                    className="w-full py-4 bg-primary hover:bg-[#d84a1d] text-white font-extrabold rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                    onClick={() => setIsPlaceOrder(true)}
                  >
                    Proceed to Checkout
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <div className="mt-6 flex items-center justify-center gap-6">
                  <span className="material-symbols-outlined text-slate-400">
                    payments
                  </span>
                  <span className="material-symbols-outlined text-slate-400">
                    credit_card
                  </span>
                  <span className="material-symbols-outlined text-slate-400">
                    account_balance_wallet
                  </span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    local_shipping
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Free Delivery
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      On your first 3 orders above $40
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};

export default Cart;
