import React from "react"
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#A6B37D] h-screen w-full">
     <h1 className="text-center text-6xl py-44 font-bold text-white">My Website</h1>
     <div className="flex justify-center">
     <button className="bg-[#B99470] text-white py-6 px-3 rounded-xl hover:bg-[#C5705D]">Click for more</button>
     </div>
    </div>
  );
};