import './globals.css'

import { Providers } from "./GlobalRedux/provider"

import Header from './header'

export const metadata = {
    title: 'Alumni',
    description: 'Alumni review application',
}

export default function RootLayout({ children }) {
    return (

        <html lang="en">
            <div className="flex flex-col min-h-screen">
                <Providers>
                    <Header />
                    <main className="container mx-auto px-4 py-8 flex-grow">
                    {children}
                    </main>
                </Providers>

                <footer className="bg-gray-800 text-white py-4">
                    <div className="container mx-auto px-8">
                        <p className="text-center">© {new Date().getFullYear()} Alumni Reviews. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </html>

    )
}
