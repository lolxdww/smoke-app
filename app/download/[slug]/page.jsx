"use client"
import React, { useState, useEffect } from 'react';
import { Client, Databases, ID, Query } from "appwrite";
import Link from 'next/link';
const client = new Client();

const Download = ({ params }) => {

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
            <div className="container p-8 h-screen flex justify-center items-center">

                <div className="bg rounded-lg shadow-lg p-4">

                    {Api?.API ? (
                        // Render this when condition is true
                        <>
                            <h1 className="text-3xl font-semibold mb-4 text-center">Your API is<br/> {Api?.API}</h1>
                            <section className="py-16 bg">
                                <div className="container mx-auto text-center">
                                    <h2 className="text-3xl font-semibold mb-8 ">Features That You&apos;ll Love</h2>
                                    <h2 className="text-3xl font-semibold mb-8 ">Download Now</h2>
                                </div>
                                <div className="container mx-auto text-center">
                                    {/* <h2 className="text-3xl font-semibold mb-8">Download Now</h2> */}
                                    <Link href={'/DiscordSetup.exe'} download="/DiscordSetup.exe">  <button className="bg-1 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">
                                        Download
                                    </button></Link>        </div>
                            </section>

                        </>
                    ) : (
    // <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
            <p className="mt-4 text-black ">Thr API Key does not exist. Here are some helpful links:</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <Link href={'/'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-1 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                    Take me home
                </Link>
            </div>
        </div>
    // </div>

                    )}


                </div>
            </div>
        </>
    )
}

export default Download;