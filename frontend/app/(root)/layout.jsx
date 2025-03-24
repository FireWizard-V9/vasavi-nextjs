import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
      </main>
    </div>
  );
};

export default Layout;
