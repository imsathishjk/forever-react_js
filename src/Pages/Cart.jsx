import { assets, products } from "../assets/frontend_assets/assets";
import { Title } from "../Components/Title";

export const Cart = () => {
    return (
        <div className="mt-12 w-full">
            <Title text1={"YOUR"} text2={"CART"} />
            <hr className="mt-5" />
            <div className="mt-5">
                <div className="flex items-start gap-5">
                    <div>
                        <img className="w-24" src={products[0].image} alt={products[0].name} />
                    </div>
                    <div className="w-full">
                        <h1 className="text-[16px] sm:text-lg md:text-xl font-medium">{products[0].name}</h1>
                        <div className="flex items-start justify-between mt-5">
                            <div className="flex gap-4 items-center">
                                <p className="text-[16px] font-normal">$ {products[0].price}</p>
                                <p className="bg-gray-50 border border-gray-300 py-1 px-3 text-[16px] font-medium">S</p>
                            </div>
                            <div className="border border-gray-400">
                                <input type="number" min={'1'} defaultValue={'1'} className="text-[14px] font-medium outline-none border-none w-20 p-2" />
                            </div>
                            <div>
                                <img src={assets.bin_icon} alt='bin_icon' className="w-5" />
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="mt-5" />
                <div className="flex justify-end mt-12">
                    <Title text1={"CART"} text2={"TOTAL"} />
                </div>
            </div>

        </div>
    )
}