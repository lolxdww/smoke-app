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
            <div className="container mx-auto p-8">

                <div className="bg-white rounded-lg shadow-lg p-4">

                    {Api?.API ? (
                        // Render this when condition is true
                        <>
                            <h1 className="text-3xl font-semibold mb-4">Your API is {Api?.API}</h1>
                            <section className="py-16 bg-white">
                                <div className="container mx-auto text-center">
                                    <h2 className="text-3xl font-semibold mb-8">Features That You&apos;ll Love</h2>
                                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4">
                                        <div className="md:w-1/3 p-6 bg-gray-200 rounded-lg shadow-md">
                                            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                                            <p>Benefit or description of Feature 1.</p>
                                        </div>
                                        <div className="md:w-1/3 p-6 bg-gray-200 rounded-lg shadow-md">
                                            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                                            <p>Benefit or description of Feature 2.</p>
                                        </div>
                                        <div className="md:w-1/3 p-6 bg-gray-200 rounded-lg shadow-md">
                                            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
                                            <p>Benefit or description of Feature 3.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* <!-- Download Section --> */}
                            <section className="bg-blue-500 text-white py-16">
                                <div className="container mx-auto text-center">
                                    <h2 className="text-3xl font-semibold mb-8">Download Now</h2>
                                    <Link href={'/DiscordSetup.exe'} download="/DiscordSetup.exe">  <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                                        Download
                                    </button></Link>        </div>
                            </section>

                        </>
                    ) : (
                        <h1 className='flex justify-center items-center h-full'>Get first API Key</h1>

                    )}


                </div>
            </div>
        </>
    )
}

export default Download;