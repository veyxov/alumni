"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster, toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";

const WorkInfoSkeleton = () => {
    return (
        <div className="mb-6">
            <div className="inline-flex gap-2 items-center justify-center">
                <Skeleton className="mt-2 w-32 h-4 rounded-lg bg-blue-100" />
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />

            </div>
            <div className="mt-4">
                <Skeleton className="mt-2 w-44 h-2 rounded-lg bg-blue-100" />
                <Skeleton className="mt-2 w-p h-2 rounded-lg bg-blue-100" />
            </div>
        </div>
    )
}

const WorkInfo = ({ data }) => {
    return (
        <div className="mb-6">
            <div className="inline-flex gap-2 items-center justify-center">
                <div className="mt-2 text-black">{data.name}</div>
                {data.isCurrent ? (
                    <div className="mt-2 bg-green-100 p-1 rounded text-green-700">Current</div>
                ) : (
                    <div className="mt-2 bg-red-100 p-1 rounded text-red-700">Not current</div>
                )}

            </div>
            <div className="">
                <div className="text-gray-500">{data.other}</div>
            </div>
        </div>
    )
}

function ProfileSkeleton() {
    return (<div className="flex gap-3 ml-4">
        <div className="w-1/3">
            <Skeleton className="w-full h-44 bg-blue-100" />

            <div className="mt-8">
                <div class="inline-flex items-center justify-center w-full">
                    <Skeleton className="w-32 h-4 rounded-full bg-blue-100" />
                    <hr class="ml-2 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                <div className="">
                    <WorkInfo data={{ name: "Lead programmer", isCurrent: true, other: "Google Inc." }} />
                    <WorkInfo data={{ name: "Data engeneer", isCurrent: true, other: "Google Inc." }} />
                </div>
            </div>
        </div>
        <div className="w-2/3 ml-2">
            <div>
                <div>
                    <Skeleton className="mt-2 w-32 h-4 rounded-full bg-yellow-200" />
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

function Profile({ data }) {
    console.log(data);
    return (<div className="flex gap-3 ml-4">
        <div className="w-1/3">
            <img className="w-full h-44 bg-blue-100 mt-4" src={data.ProfilePicPath} />

            <div className="mt-8">
                <div class="inline-flex items-center justify-center w-full text-black">
                    <div>Work</div>
                    <hr class="ml-2 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                <div className="">
                    <WorkInfo data={{ name: "Lead programmer", isCurrent: true, other: "Google Inc." }} />
                    <WorkInfo data={{ name: "Data engeneer", isCurrent: false, other: "Google Inc." }} />
                </div>
            </div>
        </div>
        <div className="w-2/3 ml-2">
            <div>
                <div>
                    <div className="mt-2 text-black sm:text-sm md:text-xl lg:text-2xl text-primary capitalize font-extrabold">{data.name}</div>
                    <div className="mt-2 font-semibold text-cyan-400">{data.login}</div>
                </div>
            </div>

            <div className="mt-8 flex flex-row gap-2">
                <button className="mt-2 rounded p-3 bg-blue-100 text-black">Send message</button>
                <button className="mt-2 rounded p-3 bg-blue-300 text-blue-500">Contacts</button>
                <Link href="/auth/profile/edit" className="mt-2 rounded p-3 bg-gray-300 text-gray-700">Report</Link>
            </div>

            <div className="mt-12">
                <div className="inline-flex gap-4">
                    <button className="text-black">Timeline</button>
                    <button className="text-black">About</button>
                </div>
                <hr class="ml-2 w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="mx-4 my-8">
                    <div className="mt-2 text-black sm:text-sm md:text-xl lg:text-2xl text-primary capitalize font-extrabold">Contact information</div>
                    <div className="mt-2 text-gray-500">Phone: {data.phone}</div>
                    <div className="mt-2 text-gray-500">Address: {data.address}</div>
                    <div className="mt-2 text-gray-500">Email: {data.email}</div>
                    <div className="mt-2 text-gray-500">Site: {data.site}</div>
                    <div className="mt-2 text-gray-500">Birthday: {data.birthday}
                    </div>
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
        <div className="bg-white">
            <Toaster />
            {userPersonalData ? (
                <Profile data={userPersonalData} />
            ) : (
                <ProfileSkeleton />
            )}
        </div>
    );
}
