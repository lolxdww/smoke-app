"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from "react";

export default function Home() {
  const [isNavMenuVisible, setNavMenuVisibility] = useState(false);

  // Function to toggle the mobile navigation menu
  const toggleNavMenu = () => {
    setNavMenuVisibility(!isNavMenuVisible);
  };
  return (
    <>
<div className="w-full pattern pattern-bg">
    {/* <!-- navigation logo --> */}
    <div className="max-w-7xl mx-auto px-4 md:px-2 lg:px-2 xl:px-2 flex items-center justify-between py-4">
        <div className="flex gap-6 items-center">
            <div className="">
                <Link href="/">
                <span className='text-xl font-extrabold text-white'><i>Smoke</i></span>
                </Link>
            </div>
            {/* <!-- navigation desktop --> */}
            <div className="hidden space-x-12 text-sm md:flex">
                <nav className="space-x-4">
                    <Link href="/" className="active font-bold text-white">Home</Link>
                </nav>
            </div>
        </div>
        {/* <!-- profile --> */}
        <div className="flex items-center mt-2 -mx-2 sm:mt-0">
                <a href="#" className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700">Sign In</a>
                <a href="#" className="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800">Sign Up</a>
            </div>
        {/* <!-- navigation mobile menu button --> */}
        <div className="flex items-center space-x-4 px-2 md:hidden md:px-0 lg:px-0">
        {/* <!-- profile --> */}
            <div class="flex items-center space-x-4 cursor-pointer">
            <div className="flex items-center mt-2 -mx-2 sm:mt-0">
                <a href="#" className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700">Sign In</a>
                <a href="#" className="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800">Sign Up</a>
            </div>
            </div>
            <div className="nav-menu-btn cursor-pointer" onClick={toggleNavMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
    </div>
    {/* <!-- javascript required -->
    <!-- navigation mobile menu --> */}
    <div className={`nav-menu ${isNavMenuVisible ? "" : "hidden"}`}>
        <nav className="space-y-4 flex justify-center items-center flex-col md:hidden">
        <Link href="/" className="active font-bold">Home</Link>
        <Link href="/Ary" className="hover:text-gray-600 font-semibold">ARY</Link>
        <Link href="/Geo" className="hover:text-gray-600 font-semibold">GEO</Link>
        <Link href="/Hum" className="hover:text-gray-600 font-semibold">HUM</Link>
        </nav>
    </div>
</div>

       
       </>
  )
}
