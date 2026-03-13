'use client'

import { useEffect, useState } from "react";
import MasonryLayout from "./components/MasonryLayout"
import Navbar from "./components/navbar"
// import Sidenav from "./components/sidenav"

const Page = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        if (loggedInStatus === "true") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    },[])
    return (
        <>
            {/* <Sidenav /> */}
            {isLoggedIn ? (
                <main className="w-full bg-gray-200 min-h-screen transition-all">

                    {/* navbar */}
                    <Navbar setIsLoggedIn={setIsLoggedIn} />
                    {/* end navbar */}

                    <MasonryLayout />
                </main>
            ) : (
                // simple login page with username and password fields and a login button
                <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formdata = new FormData(e.currentTarget);

                                const username = formdata.get("username");
                                const password = formdata.get("password");
                                // Replace with actual authentication logic
                                if (username === "mahesh" && password === "mahesh@123") {
                                    localStorage.setItem("isLoggedIn", "true");
                                    setIsLoggedIn(true);
                                } else {
                                    alert("Invalid credentials");
                                }
                            }}
                            className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <input type="text" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>
                        </form>
                    </div>
                </div>
            )

            }



        </>
    )
}

export default Page