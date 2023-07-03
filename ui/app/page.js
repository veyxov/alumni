import Image from 'next/image'

export default function Home() {
    const reviewsData = [
        { id: 1, name: 'John Doe', review: 'Great platform to connect with alumni!', rating: 5 },
        { id: 2, name: 'Jane Smith', review: 'I found my dream job through this platform. Highly recommended!', rating: 4 },
        // Add more review objects here
    ];

    return (
        <div className="">
            <div className="flex flex-col justify-between bg-gray-100 h-screen">
                <header className="bg-white py-4 shadow">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold">Alumni</h1>
                            </div>
                            <div>
                                {/* Navigation links or user authentication */}
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8">
                    <section >
                        <h2 className="text-2xl font-bold mb-4">Latest Reviews</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {reviewsData.map((review) => (
                                <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-6">
                                    <div class="shrink-0 w-14">
                                        {/* TODO: Use Next.js <Image /> */}
                                        <img
                                            src="https://api.minimalavatars.com/avatar/random/png"
                                            alt="Picture of reviewer"
                                        />
                                    </div>
                                    <div>
                                        <div class="text-xl font-medium text-black">ChitChat</div>
                                        <p class="text-slate-500">You have a new message!</p>
                                    </div>
                                </div>


                            ))}
                        </div>
                    </section>
                </main>


                <footer className="bg-gray-200 py-4">
                    <div className="container mx-auto px-4">
                        <p className="text-center text-gray-600">
                            &copy; 2023 Alumni Reviews. All rights reserved.
                        </p>
                    </div>
                </footer>

            </div>
        </div>
    );
}
