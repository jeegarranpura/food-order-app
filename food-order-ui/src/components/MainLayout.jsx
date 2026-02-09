import React from "react";

const MainLayout = ({ children }) => {
  return (
    // <div>
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      {/* // <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen"> */}
      <div className="relative flex min-h-screen flex-col">{children}</div>
    </div>
    // </div>
  );
};

export default MainLayout;
