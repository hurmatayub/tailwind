import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black py-9">
      <div className="container mx-auto px-4 flex justify-between items-center text-2xl">
        <h1 className="text-[#FF8C9E] text-3xl font-bold hover:text-[#C75B7A]">Website.</h1>
       <ul className="flex items-center space-x-8">
          <li className="text-gray-300 hover:text-white transition duration-300"><Link href="/">Home</Link></li>
          <li className="text-gray-300 hover:text-white transition duration-300"><Link href="/about">About</Link></li>
          <li className="text-gray-300 hover:text-white transition duration-300"><Link href="/service">Services</Link></li>
          <li className="text-gray-300 hover:text-white transition duration-300"><Link href="/work">Work</Link></li>
          <li className="text-gray-300 hover:text-white transition duration-300"><Link href="/contact">Contact</Link></li>
          
        </ul>
        <li className=" text-white border border-white list-none hover:bg-[#CA8787] rounded-xl py-3 px-6"><Link href="/Login">login</Link></li>
       
      </div>
    </nav>
  );
};