import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-[#F9FBFA] min-h-screen pb-10">
      <Navbar />

      {/* Banner Section */}
      <div className="text-center mt-16 mb-10 px-4">
        <h1 className="text-5xl font-bold text-[#1A1A1A] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-[#2D4A43] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 mx-auto hover:bg-[#233a34]">
          <span className="text-xl">+</span> Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800">10</h2>
          <p className="text-gray-500 mt-1">Total Friends</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800">3</h2>
          <p className="text-gray-500 mt-1">On Track</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800">6</h2>
          <p className="text-gray-500 mt-1">Need Attention</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800">12</h2>
          <p className="text-gray-500 mt-1">Interactions This Month</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Your Friends</h3>
        {/* Friend Cards are coming next... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Friend mapping will go here */}
        </div>
      </div>
    </div>
  );
};

export default Home;