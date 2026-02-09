import React from "react";

const OrderDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Order Summary
            </h3>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            <div className="p-6 flex items-center gap-4">
              <div
                className="size-20 rounded-xl bg-center bg-cover flex-shrink-0"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCutTJBC2N7JVCRAuNFAS2m6KgC7p7EFVbmWDk9auob2vNsoK_Zvx5emABAakyQMzCQQjp3nMTUkt_Nu_hD7ampdjkXIFM8MSpehoY6lPUrYTaI3gBovIuxXRpkCXjHQCke5X__3inKou346_KiKW4xA2CNB40Ir2-q6__SJuDDH32u88jpHLKsLlNNysNwpX7b9q_3wlM2r19TyqwFqYyESjIMOKOcVlK6va08Sbwsmo9nHsBkKwt1z1nbMpgq5dGGW81dKHNc4qY')`,
                }}
              ></div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Truffle Mushroom Risotto
                </h4>
                <p className="text-sm text-slate-500">
                  Extra parmesan, no garlic
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-500">1x</p>
                <p className="font-bold text-slate-900 dark:text-white">
                  $18.50
                </p>
              </div>
            </div>
            <div className="p-6 flex items-center gap-4">
              <div
                className="size-20 rounded-xl bg-center bg-cover flex-shrink-0"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdD53wPZV3wjqRJfw4fYhyEYXdkz-R_D6NVZOheAN_qZPStva-XAECWXj6LKfyUg_4T6P8iuRpbwoxNYd3J23KxlOnMyLNdkqFJkNufVnTn655vwOs9xUap5N_wnU-yTlQDiz6zs7U1E_xHBaoz9T2dQJuOKwxOEU2px-xbEQQUd1T9JTRVd9-esEwdfGoT068iQVuQ55w9mn0K0x370XjE7SREsyt-r9dYIYSFMWIdVuQuk4VPzgTRNOaUxanzo075USjUeSjxIs')`,
                }}
              ></div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Classic Wagyu Burger
                </h4>
                <p className="text-sm text-slate-500">
                  Medium rare, sweet potato fries
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-500">1x</p>
                <p className="font-bold text-slate-900 dark:text-white">
                  $22.00
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 space-y-3">
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
              <span>Subtotal</span>
              <span>$40.50</span>
            </div>
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
              <span>Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-700">
              <span>Service Fee</span>
              <span>$1.50</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white pt-2">
              <span>Total</span>
              <span>$44.99</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">
            Delivery Information
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Address
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  123 Artisan Ave, Loft 4B
                  <br />
                  Brooklyn, NY 11211
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">
                person
              </span>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Courier
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Michael S. <span className="text-slate-400">(Assigning)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">
            Need help?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            If you have any issues with your order, our support team is
            available 24/7.
          </p>
          <button className="w-full py-3 bg-white dark:bg-slate-900 text-primary border border-primary/30 font-bold rounded-xl hover:bg-primary/5 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
