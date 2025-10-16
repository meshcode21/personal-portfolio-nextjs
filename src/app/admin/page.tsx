// 'use client'

import MasonryLayout from "./components/MasonryLayout"
import Navbar from "./components/navbar"
// import Sidenav from "./components/sidenav"

const page = () => {
    return (
        <>
            {/* <Sidenav /> */}
            <main className="w-full bg-gray-200 min-h-screen transition-all">

                {/* navbar */}
                <Navbar />
                {/* end navbar */}

                <MasonryLayout />
            </main>



        </>
    )
}

export default page