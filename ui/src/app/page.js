'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
    const [topUsers, setTopUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getTopUsers() {
        const result = await fetch('http://localhost:5284/api/User/top', {
            method: 'GET',
        })

        if (result.status == 200) {
            const data = await result.json();
            console.log(data);
            setTopUsers(data);
        } else {
            toast.error(result.status);
        }

        setLoading(false);
    }

    useEffect(() => {
        getTopUsers()
    }, [])

    return (
        loading ? (<div></div>) : (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Toaster />
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Our <span className="text-blue-500">Executive Team</span>
                        </h1>
                        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                            some text here
                        </p>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                            {topUsers.map(function(person) {
                                return (
                                    <>
                                        <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img
                                                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                                                    src={person.image}
                                                    alt=""
                                                />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                                                        {person.name}
                                                    </h1>

                                                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                                        {person.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Illum nesciunt officia aliquam neque optio? Cumque facere
                                                numquam est.
                                            </p>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        )
    )
}
