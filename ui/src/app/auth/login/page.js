import Link from "next/link"

export default function Page() {

    return (
        <section className="bg-white">
            <div className="">
                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <h1
                        className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl mr-6"
                    >
                        Login 🗝️
                    </h1>

                    <div className="max-w-xl lg:max-w-3xl">
                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    value="test@test.com" // TODO: Remove
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    value="testPassword6240" // TODO: Remove
                                />
                            </div>


                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Login
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    No Account?
                                    <Link href="/auth/signin" className="text-gray-700 underline">Sign in</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>)
}