import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
export const ProductItem = ({ image, name, price, id }) => {
    return (
        <>
            <Link to={`/product/${id}`} className="cursor-pointer">

                <div>
                    <img src={image} alt="product_image" className="hover:transform hover:scale-105 transition-all ease-in-out bg-cover" />
                </div>

                <div className="mt-3">
                    <p className="text-sm font-medium">{name}</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[12px] md:text-sm font-medium bg-black text-white py-0.5 sm:py-1 px-2 w-fit mt-1">$ {price}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={assets.star_icon} alt="star_icon" className="w-3 sm:w-3 md:w-4" />
                            <img src={assets.star_icon} alt="star_icon"  className="w-3 sm:w-3 md:w-4"/>
                            <img src={assets.star_icon} alt="star_icon"  className="w-3 sm:w-3 md:w-4"/>
                            <img src={assets.star_icon} alt="star_icon"  className="w-3 sm:w-3 md:w-4"/>
                            <img src={assets.star_dull_icon} alt="star_icon"  className="w-3 sm:w-3 md:w-4"/>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}