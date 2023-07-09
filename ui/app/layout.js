import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { Providers } from "./GlobalContext/provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Alumni',
    description: 'Alumni review application',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <div className="flex flex-col min-h-screen">
                <header className="bg-white-800">
                    <div className="container mx-auto py-4 px-8 flex items-center justify-between">
                        <Link href="/" className="text-black text-lg font-semibold">
                            Alumni Reviews
                        </Link>
                        {/* Add your logo here if needed */}
                        <div>
                            <span className="mr-2">|</span>
                            <Link href="/login" className="text-black font-bold m-4">
                                Login
                            </Link>
                            <Link href="/register" className="text-black font-bold border-2 p-2 border-black rounded">
                                Register
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8 flex-grow">
                    <Providers>
                        {children}
                    </Providers>
                </main>

                <footer className="bg-gray-800 text-white py-4">
                    <div className="container mx-auto px-8">
                        <p className="text-center">© {new Date().getFullYear()} Alumni Reviews. All rights reserved.</p>
                    </div>
                </footer>
            </div></html>
    )
}
