import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Container;
