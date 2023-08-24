import { Toaster, toast } from "react-hot-toast";

export default function Page() {
    return (
        <div className="bg-white">
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="flex flex-col break-words bg-white border-2 rounded shadow-md">
                        <img class="w-20 h-20 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Large avatar"></img>
                        <div className="font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0">
                            Edit profile
                        </div>
                        <div className="w-full p-6">
                            <form className="w-full max-w-lg">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-first-name"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-first-name"
                                            type="text"
                                            placeholder="Jane"
                                        />
                                        <p className="text-red-500 text-xs italic">
                                            Please fill out this field.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-last-name"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-password"
                                            type="email"
                                            placeholder="somhtin@rsnd.com"
                                        />
                                        <p className="text-gray-600 text-xs italic">
                                            Some tips - as long as needed
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-city"
                                        >
                                            City
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-city"
                                            type="text"
                                            placeholder="Albuquerque"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-state"
                                        >
                                            State
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Toaster />
        </div>
    );
}
