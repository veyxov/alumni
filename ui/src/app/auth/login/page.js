"use client"

import Link from "next/link"

import React from "react"

import { useRouter } from 'next/navigation'

import {Toaster, toast} from "react-hot-toast"

export default function Page() {
    const [login, setLogin] = React.useState(null)
    const [password, setPassword] = React.useState(null)

    const router = useRouter()

    async function onLogin() {
        var payload = {
            login: login,
            password: password
        }

        console.log(payload)

        const response = await fetch('http://localhost:5284/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (response.ok) {
            const data = await response.json()
            console.log(data)

            saveToken(data.token)

            router.push('/profile')
        } else {
            toast.error(response.statusText)
            console.warn(response)
        }


        function saveToken(token) {
            // TODO: are there better metods? Redux?
            localStorage.setItem('token', token)
        }
    }

    return (
        <section className="bg-white">
            <Toaster />
            <div className="">
                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <h1
                        className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl mr-6"
                    >
                        Login 🗝️
                    </h1>

                    <div className="max-w-xl lg:max-w-3xl">
                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    onChange={e => setLogin(e.target.value)}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>


                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    onClick={onLogin}
                                >
                                    Login
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    No Account?
                                    <Link href="/auth/signin" className="text-gray-700 underline">Sign in</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>)
}
