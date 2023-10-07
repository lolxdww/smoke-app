"use client"
import React from 'react'
import { Client, Databases, ID, Query } from "appwrite";
import { useState, useEffect } from 'react';
import Link from 'next/link';
const client = new Client();

const page = ({params}) => {
    const slug = params.slug
    const [Api, setApi] = useState({})
    useEffect(() => {

        client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('652146b8366d7812eb4d');
        
        const databases = new Databases(client);
        
        const promise = databases.listDocuments(
            '652147e3045f3a22cf1f',
            '652147e99b9e8036318d',
            [
                Query.equal("API", slug)
            ]
        );
        
        promise.then(function (response) {
            console.log(response[0]);
            setApi(response.documents[0])
        }, function (error) {
            console.log(error);
        });
    
    }, [])
  return (
    <>
    {/* <Navbar/> */}
             <div className="container mx-auto p-8">

<div className="bg-white rounded-lg shadow-lg p-4">

    {/* <h1 className="text-3xl font-semibold mb-4">{Api?.API}</h1> */}
    {Api?.API ? (
        // Render this when condition is true
        <>
        <h1 className="text-3xl font-semibold mb-4">Your API is {Api?.API}</h1>
        <section class="py-16 bg-white">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-8">Features That You'll Love</h2>
            <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4">
                <div class="md:w-1/3 p-6 bg-gray-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Feature 1</h3>
                    <p>Benefit or description of Feature 1.</p>
                </div>
                <div class="md:w-1/3 p-6 bg-gray-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Feature 2</h3>
                    <p>Benefit or description of Feature 2.</p>
                </div>
                <div class="md:w-1/3 p-6 bg-gray-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Feature 3</h3>
                    <p>Benefit or description of Feature 3.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Download Section --> */}
    <section class="bg-blue-500 text-white py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-8">Download Now</h2>
            <a href="path-to-your-software.exe" download="software-name.exe" class="bg-button hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">Download Now</a>
        </div>
    </section>
        {/* <Link href={'/DiscordSetup.exe'}  download="/DiscordSetup.exe">  <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
    Download
  </button></Link> */}
        </>
        ) : (
          <p>GEt first API Key</p>
        // Render this when condition is false
      )}

    {/* <div className="text-gray-500 text-sm mb-4">
        <span>Published by <span className="text-black">Sammas Abbas</span></span>
        <span className="mx-2">|</span>
        <span>Published on <span className="text-black flex-wrap text-ellipsis">{formattedDateTime}</span></span>
    </div> */}


    {/* <img src={Api?.img} alt="Blog Post Image" className="mb-4 rounded-lg shadow-md mx-auto object-cover"/> */}
</div>
</div>
    </>
  )
}

export default page