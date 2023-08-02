"use client"

import Link from "next/link";

const Page = () => {
    return (
        <>
            <div className="flex justify-center gap-3">
                <div>
                    <Link href="/register/personal-info" className="bg-sky-300 border rounded p-8 text-black block">
                        <span className="btn btn-primary">Register personal info</span>
                    </Link>
                </div>

                <div>
                    <Link href="/register/education-info" className="bg-yellow-300 border rounded p-8 text-black block">
                        <span className="btn btn-primary">Register education info</span>
                    </Link>
                </div>
                <div>
                    <Link href="/register/employment-info" className="bg-green-300 border rounded p-8 text-black block">
                        <span className="btn btn-primary">Register personal info</span>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Page;
