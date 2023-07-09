'use client'
import { useSelector } from "react-redux";
import Link from 'next/link'

export default function Header() {
    const loggin = useSelector((state) => state.login);
    console.log(loggin);

    return (<header className="bg-white-800">
        <div className="container mx-auto py-4 px-8 flex items-center justify-between">
            <Link href="/" className="text-black text-lg font-semibold">
                Alumni Reviews
            </Link>
            {/* Add your logo here if needed */}
            {!loggin.loggedIn ? (
                <div>
                    <span className="mr-2">|</span>
                    <Link href="/login" className="text-black font-bold m-4">
                        Login
                    </Link>
                    <Link href="/register" className="text-black font-bold border-2 p-2 border-black rounded">
                        Register
                    </Link>
                </div>
            ) : (
                <div>
                    <span className="mr-2">|</span>
                    <Link href="/logout" className="text-black font-bold m-4">
                        Logout
                    </Link>
                </div>
            )}
        </div>
    </header>)
}
