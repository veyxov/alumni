'use client'

import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Toaster, toast } from "react-hot-toast";

export default function Page() {
    const [userPersonalData, setUserPersonalData] = useState(null);

    function getUserIdFromJwt() {
        const token = localStorage.getItem('token');

        const jwt = jwt_decode(token);

        toast.success(`Welcome ${jwt.sub}!`);

        return jwt.Id;
    }
    const asyncFetch = async () => {
        const id = getUserIdFromJwt();
        const response = await fetch(`http://localhost:5284/api/User/${id}`);

        if (response.ok) {
            const data = await response.json();

            setUserPersonalData(data);
        } else {
            toast.error(`Error ${response.status} ${response.statusText}`);
        }
    }
    useEffect(() => {
        asyncFetch();
    }, []);
    function handleSave(e) {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const jwt = jwt_decode(token);
        const id = jwt.Id;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userPersonalData)
        };
        console.log(userPersonalData);
        const toastId = toast.loading(`Updating user ${userPersonalData.name}...`);
        fetch(`http://localhost:5284/api/User/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setUserPersonalData(data);
                // update the loading toast
                toast.success(`User ${userPersonalData.name} updated!`, { id: toastId });
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <div>
            <Toaster />
            {userPersonalData ? (
                <div className="bg-white">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full max-w-md">
                            <div className="flex flex-col break-words bg-white border-2 rounded shadow-md">
                                <img class="w-20 h-20 rounded" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Large avatar"></img>
                                <div className="font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0">
                                    Edit profile
                                </div>
                                <div className="w-full p-6">
                                    <form className="w-full max-w-lg">
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label
                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-first-name"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                    id="grid-first-name"
                                                    type="text"
                                                    placeholder="Jane"
                                                    value={userPersonalData.name}
                                                    onChange={(e) => setUserPersonalData({ ...userPersonalData, name: e.target.value })}
                                                />
                                                <p className="text-red-500 text-xs italic">
                                                    Please fill out this field.
                                                </p>
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label
                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-last-name"
                                                >
                                                    Phone Number
                                                </label>
                                                <input
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-last-name"
                                                    type="text"
                                                    placeholder="513023"
                                                    value={userPersonalData.phone}
                                                    onChange={(e) => setUserPersonalData({ ...userPersonalData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label
                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    E-mail
                                                </label>
                                                <input
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                    id="grid-password"
                                                    type="email"
                                                    placeholder="somhtin@rsnd.com"
                                                    value={userPersonalData.email}
                                                    onChange={(e) => setUserPersonalData({ ...userPersonalData, email: e.target.value })}
                                                />
                                                <p className="text-gray-600 text-xs italic">
                                                    Some tips - as long as needed
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-2">
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-2">
                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                <button
                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 bg-blue-300 p-2 rounded"
                                                    htmlFor="grid-state"
                                                    onClick={handleSave}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Toaster />
                </div >
            ) : (
                <p>loading...</p>
            )}
        </div>
    );
}
