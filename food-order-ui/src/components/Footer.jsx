import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-8 bg-primary/20 flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-primary text-xl">
                restaurant
              </span>
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              BistroDash
            </h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm">
            Bringing the finest gourmet experiences straight to your doorstep.
            Fresh ingredients, expertly prepared.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
            Company
          </h5>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
            Support
          </h5>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400">
          © 2024 BistroDash Food Delivery. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">public</span>
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">share</span>
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">thumb_up</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
