import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import { Sidebar } from "./Sidebar";
export const Navbar = ({ location, sidebar, setSidebar }) => {
    return (
        <div className="py-5 flex justify-between items-center sticky top-0 bg-white z-50 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]">
            <div>
                <NavLink to={'/'}><img className="w-28 sm:w-32" src={assets.logo} alt="forever_logo" /></NavLink>
            </div>
            <div className="hidden sm:flex justify-between gap-7">
                <NavLink to={'/'} className={`text-sm font-medium cursor-pointer ${location.pathname === '/' ? 'underline' : ""}`}>HOME</NavLink>
                <NavLink to={'/collections'} className={`text-sm font-medium cursor-pointer ${location.pathname === '/collections' ? 'underline' : ""}`}>COLLECTION</NavLink>
                <NavLink to={'/about'} className={`text-sm font-medium cursor-pointer ${location.pathname === '/about' ? 'underline' : ""}`}>ABOUT</NavLink>
                <NavLink to={'/contact'} className={`text-sm font-medium cursor-pointer ${location.pathname === '/contact' ? 'underline' : ""}`}>CONTACT</NavLink>
            </div>
            <div className="flex gap-5 items-center">
                <img className="w-4 cursor-pointer" src={assets.search_icon} alt="search_icon" />
                <NavLink to={'/login'}><img className="w-4 cursor-pointer" src={assets.profile_icon} alt="profile_icon" /></NavLink>
                <div className="relative cursor-pointer">
                    <img className="w-4" src={assets.cart_icon} alt="cart_icon" />
                    <p className="bg-black text-white text-[8px] font-medium absolute -bottom-1 -right-1.5 rounded-full w-3
                     h-3 flex items-center justify-center px-2 py-2">0</p>
                </div>
                <img onClick={() => setSidebar(!sidebar)} src={assets.menu_icon} alt="menu_icon" className="w-4 sm:hidden cursor-pointer" />
            </div>
            <div className={`sm:hidden absolute top-2 bg-white h-screen z-50 px-2 transition-all ease-in-out duration-500 w-1/2 ${sidebar ? 'left-0' : "-left-[60%]"} `}>
                <Sidebar location={location} sidebar={sidebar} setSidebar={setSidebar} />
            </div>
        </div>
    )
}