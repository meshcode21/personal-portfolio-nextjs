export default function Navbar({ setIsLoggedIn }: { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>> }) {
    return (
        <div className="py-2 px-6 bg-[#f8f4f3] flex items-center justify-between shadow-md shadow-black/5 sticky top-0 left-0 z-30 h-10">
            <h1 className="font-semibold text-lg text-black">Admin Panel – Contact Messages</h1>
            <div className="flex items-center gap-4">
                <button
                    className="flex items-center gap-1 text-sm rounded-sm p-1 shadow-sm bg-[#2c64e3] text-white hover:underline"
                    onClick={() => window.location.reload()}
                >
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                </button>
                <button
                    className="flex items-center gap-1 text-sm rounded-sm p-1 shadow-sm bg-[#dc2626] text-white"
                    onClick={() => {
                        setIsLoggedIn(false);
                        localStorage.removeItem("isLoggedIn");
                    }}
                >
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                    <span className="font-semibold mr-1">Logout</span>
                </button>
            </div>
        </div>
    );
}