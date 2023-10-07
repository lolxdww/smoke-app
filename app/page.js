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
                    Are you ready to take your Discord raider community to the next level? Look no further than the Discord Raider Promo Hub – your all-in-one solution for promoting and growing your raider community.
                    </p>
                </div>
            </div>

            <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                <form className="flex flex-col lg:flex-row">
                    <input type="text" placeholder="Enter your API Key" value={inputValue} onChange={handleInputChange} className="flex-1 h-10 px-4 py-2 m-1 text-gray-300 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                    <Link href={linkUrl} className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
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
                        className='object-cover img-hero w-auto h-56 mx-auto rounded-md lg:max-w-2xl rotate-6 '
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
<section class="bg-white ">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl text-center mb- font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br/> awesome <span class="text-blue-500">Discord Raider</span></h1>

        <video muted className='rounded-md w-full h-[450px]'>
            <source className='rounded-md' src='https://cdn.discordapp.com/attachments/1146863439692713984/1154497266380455986/lol.mp4?ex=65191d9d&is=6517cc1d&hm=2b111f61d9bd8cf588c72d2cce282092247f6156c8f3c42782c67c1af88124fe&' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
       
    </div>
</section>
    </>
  )
}
