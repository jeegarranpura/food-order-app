import React from "react";

const Item = ({ label }) => {
  return (
    <div>
      <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
            data-alt="Close-up of truffle mushroom risotto with herbs"
            style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCutTJBC2N7JVCRAuNFAS2m6KgC7p7EFVbmWDk9auob2vNsoK_Zvx5emABAakyQMzCQQjp3nMTUkt_Nu_hD7ampdjkXIFM8MSpehoY6lPUrYTaI3gBovIuxXRpkCXjHQCke5X__3inKou346_KiKW4xA2CNB40Ir2-q6__SJuDDH32u88jpHLKsLlNNysNwpX7b9q_3wlM2r19TyqwFqYyESjIMOKOcVlK6va08Sbwsmo9nHsBkKwt1z1nbMpgq5dGGW81dKHNc4qY')`
            }}
          ></div>
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-[10px] font-bold bg-green-500 text-white rounded-full uppercase tracking-wider">
              Vegetarian {label}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col h-[calc(100%-aspect-ratio)]">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
              Truffle Mushroom Risotto
            </h4>
            <span className="font-bold text-primary text-lg">$18.50</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6">
            Creamy arborio rice with wild mushrooms, truffle oil, and shaved
            parmesan flakes.
          </p>
          <button className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-primary hover:bg-[#d84a1d] text-white font-bold rounded-xl transition-all shadow-md shadow-primary/20 active:scale-[0.98]">
            <span className="material-symbols-outlined text-xl">
              add_shopping_cart
            </span>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
