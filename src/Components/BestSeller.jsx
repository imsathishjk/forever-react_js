import { Title } from "./Title";
import { products } from "../assets/frontend_assets/assets";
import { ProductItem } from "./ProductItem";
import { useEffect, useState } from "react";

export const BestSeller = () => {
    const [bestSellerProducts, setBestSellerProducts] = useState([]);

    const fetchBestSellerProducts = () => {
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((item) => item.bestseller)
        setBestSellerProducts(productsCopy)
    }
    useEffect(() => {
        fetchBestSellerProducts()
    }, [])
    return (
        <div className="my-12">
            <Title text1={'Best'} text2={'Sellers'} />
            <p className="text-sm font-medium text-center mt-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sequi!</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-5">
                {bestSellerProducts.slice(0,5).map((item, index) => {
                    return (
                        <ProductItem key={index} name={item.name} price={item.price} image={item.image[0]} id={item._id} />
                    )
                })}
            </div>
        </div>
    )
}