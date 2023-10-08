"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
      // Define a state variable to store the user input
  const [inputValue, setInputValue] = useState('');

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  const linkUrl = `/download/${inputValue}`;
  return (
    <>

<header className="bg-gray-900 pattern pattern-bg">
    <div className="container px-6 mx-auto">


        <div className="flex flex-col items-center py-6 lg:h-[40rem] lg:flex-row">


        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-100 dark:text-white lg:text-4xl">
                    SMOKE
                </h1>

                <div className="mt-8 ">
                    <p className='text-white'>
                    Are you ready to take your Discord raider community to the next level? Look no further than the Discord Raider Promo Hub &ndash; your all&ndash;in&ndash;one solution for promoting and growing your raider community.
                    </p>
                </div>
            </div>

            <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                <form className="flex flex-col lg:flex-row">
                    <input type="text" placeholder="Enter your API Key" value={inputValue} onChange={handleInputChange} className="flex-1 h-10 px-4 py-2 m-1 text-gray-300 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                    <Link href={linkUrl} className="h-10 px-4 py-2 m-1 text-center transition-colors duration-300 transform bg text-black rounded-md  focus:outline-none ">
                        Download
                    </Link>
                    
                </form>
            </div>
        </div>
        </div>





            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800 pattern">
                    {/* <div className="text-center"> */}
                        {/* <h2 className="text-2xl font-semibold text-gray-300 dark:text-white fo">Sign In</h2> */}

                        <Image
                        className='object-cover img-hero w-auto h-48 mx-auto rounded-md lg:max-w-2xl rotate-6 '
                        src={'/image-hero-1.jpg'}
                        width={1000}
                        height={1000}
                        />
                    {/* </div> */}
                </div>
            </div>

        </div>
    </div>
</header>
<section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl text-center mb- font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br/> awesome <span className="text-blue-500">Discord Raider</span></h1>

        <video id='video' muted autoPlay className='rounded-md w-full h-[450px]'>
            <source className='rounded-md' src='https://cdn.discordapp.com/attachments/1146863439692713984/1154497266380455986/lol.mp4?ex=65191d9d&is=6517cc1d&hm=2b111f61d9bd8cf588c72d2cce282092247f6156c8f3c42782c67c1af88124fe&' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
  

        <div class="mt-8 flex justify-center items-center xl:mt-12 lg:flex lg:items-center">
            <div class="flex w-full flex-col gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                <div class="space-y-3">
                    <span class="inline-block p-3 bg bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                    <svg
                    class="w-6 h-6" 
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <path
          d="M50,5 C72.1,5 90,22.9 90,45 C90,75 50,95 50,95 C50,95 10,75 10,45 C10,22.9 27.9,5 50,5 Z"
          fill="#52090d"
        />
      </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">New Components</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                    Not like other tools, the Smoke Tool does not have a grabber or anything else. Your data such as tokens etc. are securely protected. But be sure that you only buy our tool on our official Discord server!                    </p>
                </div>

                <div class="space-y-3">
                    <span class="inline-block p-3 bg bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                    <svg
                    class="w-6 h-6" 
  xmlns="http://www.w3.org/2000/svg"
  width="100"
  height="100"
  viewBox="0 0 100 100"
>
  <circle cx="50" cy="50" r="45" fill="#52090d" />
  <line
    x1="50"
    y1="50"
    x2="50"
    y2="20"
    stroke="#fff"
    stroke-width="5"
    stroke-linecap="round"
  />
  <line
    x1="50"
    y1="50"
    x2="80"
    y2="50"
    stroke="#fff"
    stroke-width="5"
    stroke-linecap="round"
  />
</svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                    Once you bought the Smoke Tool and you have it forever. The tool will be delivered to you directly after purchase.                    </p>
                </div>


                <div class="space-y-3">
                    <span class="inline-block p-3 bg bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
<h3 className='fg'>PAYMENTS</h3>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">PAYMENTS & clean designs</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                    PayPal, Crypto, Paysafecards (only Germany) + more                     </p>
                </div>
            </div>

        
        </div>
        <div className="flex justify-center items-center flex-col gap-2 w-max mt-2 mx-auto">
        <button class="text-white bg border-0 py-2 px-8 focus:outline-none rounded text-lg">Buy now</button>
        <a  href='#video' class="text-white bg border-0 py-2 px-8 focus:outline-none  rounded text-lg">Preview </a>

        </div>
    </div>
</section>
    </div>
</section>
    
    </>
  )
}
