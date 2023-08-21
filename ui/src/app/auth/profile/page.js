"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster, toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";

const WorkInfoSkeleton = () => {
    return (
        <div className="mb-6">
            <div className="inline-flex gap-2 items-center justify-center">
                <Skeleton className="mt-2 w-32 h-4 rounded-lg" />
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />

            </div>
            <div className="mt-4">
                <Skeleton className="mt-2 w-44 h-2 rounded-lg" />
                <Skeleton className="mt-2 w-p h-2 rounded-lg" />
            </div>
        </div>
    )
}

function ProfileSkeleton() {
    return (<div className="flex gap-3 ml-4">
        <div className="w-1/3">
            <Skeleton className="w-full h-44" />

            <div className="mt-8">
                <div class="inline-flex items-center justify-center w-full">
                    <Skeleton className="w-32 h-4 rounded-full" />
                    <hr class="ml-2 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                <div className="">
                    <WorkInfoSkeleton />
                    <WorkInfoSkeleton />
                </div>
            </div>
        </div>
        <div className="w-2/3 ml-2">
            <div>
                <div>
                    <Skeleton className="mt-2 w-32 h-4 rounded-full" />
                    <Skeleton className="mt-2 w-24 h-3 rounded-full bg-blue-100" />
                </div>
            </div>

            <div className="mt-8 flex flex-row gap-2">
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />
            </div>

            <div className="mt-24">
                <div className="inline-flex gap-4">
                    <Skeleton className="w-24 h-6 rounded-full mb-2 bg-red-50" />
                    <Skeleton className="w-24 h-6 rounded-full mb-2 bg-red-50" />
                </div>
                <hr class="ml-2 w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="mx-4 my-8">
                    <Skeleton className="mt-2 w-72 h-2 bg-gray-300 rounded-lg " />
                    <Skeleton className="mt-2 w-44 h-2 bg-gray-300 rounded-lg " />
                    <Skeleton className="mt-2 w-60 h-2 bg-gray-300 rounded-lg " />
                    <Skeleton className="mt-2 w-44 h-2 bg-gray-300 rounded-lg " />
                    <Skeleton className="mt-2 w-72 h-2 bg-gray-300 rounded-lg " />
                </div>
            </div>
        </div>
    </div>);
}

function Profile({ data }){
    return (
        <div className="flex gap-3 ml-4">
            <div className="w-1/3">
                <img
                    className="h-44 w-full object-cover rounded-lg shadow-md"
                    src="https://images.unsplash.com/photo-1601751996291-7b2bfaec6d52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbCUyMGNhcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt=""
                />
                <div className="mt-8">
                    <div class="inline-flex items-center justify-center w-full">
                        <h1 className="text-3xl font-bold">John Doe</h1>
                        <hr class="ml-2 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div className="mt-4">
                        <h1 className="text-lg font-bold">Web Developer</h1>
                        <p className="text-sm font-medium text-gray-400">at Google</p>
                    </div>
                </div>
            </div>
            <div className="w-2/3 ml-2">
                <div>
                    <div>
                        <h1 className="text-3xl font-bold">About</h1>
                        <p className="text-sm font-medium text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptate.</p>
                    </div>
                </div>
                <div className="mt-8 flex flex-row gap-2">
                    <h1 className="text-lg font-bold">Skills:</h1>
                    <span className="text-sm font-medium text-gray-400">HTML</span>
                    <span className="text-sm font-medium text-gray-400">CSS</span>
                    <span className="text-sm font-medium text-gray-400">JS</span>
                </div>
                <div className="mt-24">
                    <div className="inline-flex gap-4">
                        <h1 className="text-lg font-bold">Education:</h1>
                        <span className="text-sm font-medium text-gray-400">University of Oxford</span>
                        <span className="text-sm font-medium text-gray-400">2015-2019</span>
                    </div>
                    <hr class="ml-2 w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="mx-4 my-8">
                        <h1 className="text-lg font-bold">Experience:</h1>
                        <span className="text-sm font-medium text-gray-400">Google</span>
                        <span className="text-sm font-medium text-gray-400">2019-2021</span>
                        <p className="text-sm font-medium text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptate.</p>
                    </div>
                </div>
            </div>
        </div>)
} 

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

    return (
        <div>
            <Toaster />
        {userPersonalData ? (
            <Profile data={userPersonalData} />
        ) : (
            <ProfileSkeleton />
        )}
        </div>
    );
}
