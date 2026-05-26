import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    /* 1. Outer full-screen canvas background */
    <div className="min-h-screen w-full bg-[#FFDDC0] p-4 md:p-8 flex justify-center items-start">
      
      {/* 2. Inner Container Card */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-[90vh]">
        
        {/* Navbar sits securely at the top */}
        <Navbar />
        
        {/* Main content area: 
          flex-1 ensures it pushes the footer to the very bottom 
          if the page content is short, without stretching it!
        */}
        <main className="flex-1 w-full flex flex-col">
        
          <Outlet />
        </main>

        {/* Footer sits safely at the bottom with its own natural height */}
        <Footer />
        
      </div>
    </div>
  );
}