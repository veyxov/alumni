"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"

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
                    <div className="flex gap-3 ml-4">
                        <div className="w-1/3">
                            <Skeleton className="w-full h-44" />
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
                        </div>
                    </div>
            }
        </>
    )
}
