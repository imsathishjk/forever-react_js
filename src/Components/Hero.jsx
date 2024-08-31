import { assets } from "../assets/frontend_assets/assets"
export const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-gray-400 mt-5">
            <div className="w-full sm:w-1/2 flex flex-col gap-5 items-center justify-center my-12 sm:my-0">
                <div className="flex items-center gap-3">
                    <hr className="w-10 h-1 bg-gray-800" />
                    <p className="text-md font-medium">OUR BEST SELLERS</p>
                </div>
                <div>
                    <h1 className="text-3xl sm:text-5xl font-medium font-[Prata] text-center">Latest Arrivals</h1>
                </div>
                <div className="flex justify-start items-center gap-3">
                    <p className="text-md font-medium">SHOP NOW</p>
                    <hr className="w-10 h-0.5 bg-gray-600" />
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <img src={assets.hero_img} alt="hero_banner" />
            </div>
        </div>
    )
}