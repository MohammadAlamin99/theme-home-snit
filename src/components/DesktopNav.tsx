import { Link } from "react-router-dom";

export default function DesktopNav() {
    return (
        <nav className="hidden lg:block bg-white sticky top-0 z-40 border-b border-[#F1F5FF] overflow-x-hidden">
            <div className="max-w-[1720px] mx-auto w-full flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src="/images/logo.png" alt="" />
                </Link>

                {/* Middle Section */}
                <div className="flex items-center justify-center flex-1 mx-10 min-w-0">
                    <div className="bg-[#F1F5FF] p-2 rounded-lg flex-shrink-0">
                        <img className="cursor-pointer" src="/images/cameraIcon.svg" alt="" />
                    </div>
                    {/* Search Box */}
                    <div className="flex items-center gap-2 bg-[#F1F5FF] rounded-xl pl-3 py-2 relative ml-6 w-full max-w-[671px] min-w-0">
                        <img className="cursor-pointer" src="/images/mic-02.svg" alt="" />
                        <input
                            className="flex-1 font-inter bg-transparent outline-none text-[16px] font-normal placeholder-[#6A717F] min-w-0"
                            placeholder="Search in Cart and Get"
                        />
                        <button className="
                            font-inter cursor-pointer absolute right-0 top-0 bottom-0
                            px-6 rounded-r-xl
                            bg-gradient-to-r from-[#38BDF8] to-[#1E90FF]
                            bg-[length:200%_200%] bg-left
                            hover:bg-right
                            transition-all duration-500 ease-in-out
                            text-white font-semibold text-[16px]
                        ">
                            Search
                        </button>
                    </div>
                </div>

                {/* Right Section */}
               <div className="flex items-center gap-8 flex-shrink-0">
                    <img src="/images/translate.svg" alt="Translate" width={32} height={32} className="cursor-pointer" />
                    <img src="/images/shopping-cart-02.svg" alt="Cart" width={32} height={32} className="cursor-pointer" />

                    <button className="flex items-center gap-2 cursor-pointer">
                        <img src="/images/user-circle.svg" alt="User" width={32} height={32} />
                        <span className="text-[16px] font-medium text-black">
                            Sign in
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}