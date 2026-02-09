import React from "react";

const TimeLine = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 mb-8 shadow-sm">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 dark:bg-slate-800 z-0"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] h-1 bg-primary z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="size-10 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-600/20">
            <span className="material-symbols-outlined text-xl">check</span>
          </div>
          <span className="text-sm font-bold text-green-600">Order Placed</span>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-primary/20">
            <span className="material-symbols-outlined text-2xl">cooking</span>
          </div>
          <span className="text-sm font-bold text-primary">Preparing Food</span>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="size-10 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">
              delivery_dining
            </span>
          </div>
          <span className="text-sm font-medium text-slate-500">
            Ready for Delivery
          </span>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="size-10 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">home</span>
          </div>
          <span className="text-sm font-medium text-slate-500">Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
