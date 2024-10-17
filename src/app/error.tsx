"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className=" bg-[#A6B37D] h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-black mb-4">
        Something went wrong!
      </h1>
      <p className="text-lg text-black mb-8">
        We encountered an unexpected error. Please try again later.
      </p>
      <button className="bg-[#B99470] hover:bg-[#C5705D] text-white font-bold py-2 px-4 rounded">
        <Link href="/">Try Again</Link>
      </button>
    </div>
  );
}
