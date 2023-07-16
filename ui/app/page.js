"use client"

export default function Home() {
    const reviewsData = [
        { id: 1, name: 'John Doe', position: 'Chief programmer in Netflix', image: "https://api.minimalavatars.com/avatar/random/png", rating: 5 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'somethin else', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 1, name: 'John Doe', position: 'Chief programmer in Netflix', image: "https://api.minimalavatars.com/avatar/random/png", rating: 5 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'Elictrician-Engeneer', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        { id: 2, name: 'Jane Smith', position: 'somethin else', image: "https://api.minimalavatars.com/avatar/random/png", rating: 4 },
        // Add more review objects here
    ];

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Latest Reviews</h2>
            <div className="grid space-y-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {reviewsData.map((review) => (
                    <div className="p-6 max-w-sm mx-auto z-0 bg-white rounded-xl shadow-lg flex items-center space-x-6 transform transition hover:scale-110 duration-300 hover:bg-blue-200 hover:z-30">
                        <div className="shrink-0 w-14">
                            {/* TODO: Use Next.js <Image /> */}
                            <img
                                src={review.image}
                                alt="Picture of reviewer"
                            />
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">{review.name}</div>
                            <p className="text-slate-500">{review.position}</p>
                        </div>
                    </div>


                ))}
            </div>
        </>
    );
}
