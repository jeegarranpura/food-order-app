import React from "react";

const UserDetails = () => {
  return (
    // <div>
      <div className="flex-1">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    person
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    id="fullname"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    smartphone
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    id="mobile"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  mail
                </span>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="address"
              >
                Delivery Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-4 text-slate-400">
                  location_on
                </span>
                <textarea
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  id="address"
                  placeholder="Enter your full street address, apartment number, and city..."
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                htmlFor="notes"
              >
                Special Instructions (Optional)
              </label>
              <input
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                id="notes"
                placeholder="Gate code, drop at door, etc."
                type="text"
              />
            </div>
          </form>
        </div>
        <div className="mt-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">
            Payment Method
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center gap-3 p-4 border-2 border-primary bg-primary/5 rounded-xl text-left">
              <span className="material-symbols-outlined text-primary">
                credit_card
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Credit / Debit Card
                </p>
                <p className="text-xs text-slate-500">Pay securely online</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-xl text-left hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-slate-400">
                payments
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Cash on Delivery
                </p>
                <p className="text-xs text-slate-500">Pay when you receive</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default UserDetails;
