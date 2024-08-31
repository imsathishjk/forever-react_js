import { NavLink } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"

export const Sidebar = ({ location, setSidebar }) => {
    return (
        <div className="mt-5 relative w-full h-full">
            <div className="flex flex-col gap-3 items-center">
                <img src={assets.logo} alt="logo" className="w-24" />
                <hr className="w-full h-1 bg-gray-400" />
            </div>
            <div className="flex flex-col gap-5 mt-8">
                <NavLink onClick={() => setSidebar(false)} to={'/'} className={`text-sm font-medium cursor-pointer ${location.pathname === '/' ? 'bg-black text-white py-3 px-3' : ""}`}>HOME</NavLink>
                <NavLink onClick={() => setSidebar(false)} to={'/collections'} className={`text-sm font-medium cursor-pointer ${location.pathname === '/collections' ? 'bg-black text-white py-3 px-3' : ""}`}>COLLECTIONS</NavLink>
                <NavLink onClick={() => setSidebar(false)} to={'/about'} className={`text-sm font-medium cursor-pointer ${location.pathname === '/about' ? 'bg-black text-white py-3 px-3' : ""}`}>ABOUT US</NavLink>
                <NavLink onClick={() => setSidebar(false)} to={'/contact'} className={`text-sm font-medium cursor-pointer ${location.pathname === '/contact' ? 'bg-black text-white py-3 px-3' : ""}`}>CONTACT</NavLink>
            </div>
            <div className="absolute bottom-12">
                <hr className="w-full h-0.5 bg-gray-400"  />
                <p className="text-sm text-gray-400 font-medium mt-2">Created By Sathish JK</p>
            </div>
        </div>
    )
}