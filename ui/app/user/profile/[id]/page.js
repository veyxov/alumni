"use client"

import { useEffect, useState } from "react"
import { ProfileSkeleton } from "./ProfileSkeleton"


export default function Page({ params }) {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        console.log("user profile:" + params.id)
        const res = async () => {
            await fetch('http://localhost:5284/api/users/' + params.id)

            console.log(res.data);
        }
    })

    return (
        <>
            {
                userInfo ?
                    <div>
                        something
                    </div>
                    :
                    <ProfileSkeleton />
            }
        </>
    )
}

