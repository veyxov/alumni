"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"
import { ProfileSkeleton } from "./ProfileSkeleton"


export default function Page({ params }) {
    const [userInfo, setUserInfo] = useState(null)

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

