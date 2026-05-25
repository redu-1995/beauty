import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
export default function MainLayout() {
  return (
    /* 1. The Outer Page: This creates your full-screen soft peach canvas background */
    <div className="min-h-screen w-full bg-[#FFDDC0] p-4 md:p-8 flex justify-center items-start">
      
      {/* 2. The Inner Container: The clean white card with rounded corners */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-[90vh]">
        
        {/* Navbar lives inside the white container now */}
        <Navbar />
        
        {/* The main page content from your router renders here */}
        <main className="flex-1 w-full">
          <Hero/>
          <Outlet />
        </main>

      </div>
    </div>
  );
}