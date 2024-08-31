import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products, assets } from "../assets/frontend_assets/assets";
import { RelatedProduct } from "../Components/RelatedProduct";

export const ProductInfo = () => {
    const { id } = useParams();



    const [product, setProduct] = useState([]);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const getProductInfo = () => {
        let tempProductInfo = products.filter((product) => {
            return product._id === id;
        });
        setProduct(tempProductInfo);
    }

    useEffect(() => {
        getProductInfo();
    }, [])
    console.log(size);
    return (
        <>
            <div className="mt-12 flex flex-col lg:flex-row gap-5 items-start">
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-5">
                    <div className="flex flex-row sm:flex-col gap-2 items-start">
                        {
                            product[0]?.image.length > 0 ? product[0].image.map((image, index) => {
                                return <img onClick={() => setImage(image)} key={index} src={image} className="w-28 sm:w-24 md:w-32 cursor-pointer" alt="" />
                            }) : <img src={product[0]?.image[0]} alt={product[0]?.name} />
                        }
                    </div>
                    <div className="sm:w-[405px] md:w-[535px] lg:w-[450px] xl:w-[535px]">
                        <img src={image ? image : product[0]?.image[0]} alt={product[0]?.name} className="w-full" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 lg:ml-5">
                    <div>
                        <h1 className="text-lg md:text-xl lg:text-3xl font-medium">{product[0]?.name}</h1>
                        <div className="flex md:gap-3 gap-2 mt-2">
                            <div className="flex gap-1 items-center">
                                <img className="w-3" src={assets.star_icon} alt="star_icon" />
                                <img className="w-3" src={assets.star_icon} alt="star_icon" />
                                <img className="w-3" src={assets.star_icon} alt="star_icon" />
                                <img className="w-3" src={assets.star_icon} alt="star_icon" />
                                <img className="w-3" src={assets.star_dull_icon} alt="star_icon" />
                            </div>
                            <p>(122)</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">$ {product[0]?.price}</p>
                    </div>
                    <div className="text-wrap">
                        <p className="text-sm sm:text-[16px] text-gray-500 font-normal">{product[0]?.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                        <p className="text-[16px] text-gray-600 font-medium">Select Size</p>
                        <div className="flex gap-3">

                            {
                                product[0]?.sizes.map((item, index) => {
                                    return <button onClick={() => setSize(item)} className={`text-[14px] font-normal cursor-pointer border border-gray-400 py-2.5 px-5 transition-all ease-in-out duration-300 hover:bg-black hover:text-white ${size === item ? 'bg-black text-white' : 'bg-gray-200 text-black'}`} key={index}>{item}</button>
                                })
                            }

                        </div>
                        <button className="text-[14px] font-medium bg-black text-white py-3 px-3 border cursor-pointer w-full sm:w-fit mt-5 transition-all ease-in-out duration-500 hover:bg-transparent hover:border hover:border-black hover:text-black">ADD TO CART</button>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-500 font-medium">100% Original product.</p>
                        <p className="text-sm text-gray-500 font-medium">Cash on delivery is available on this product.</p>
                        <p className="text-sm text-gray-500 font-medium">Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            <div className="mt-[65px]">
                <div className="flex">
                    <button className="border border-gray-300 py-4 px-12 cursor-pointer text-sm font-bold">Description</button>
                    <button className="border border-gray-300 py-4 px-12 cursor-pointer text-sm font-normal">Reviews (122)</button>
                </div>
                <div className="flex flex-col gap-3 border border-gray-300 p-6">
                    <p className="text-sm font-medium">
                        An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
                    </p>
                    <p className="text-sm font-medium">E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                </div>
            </div>
            <RelatedProduct category={product[0]?.category} subCategory={product[0]?.subCategory} />

        </>
    )
}