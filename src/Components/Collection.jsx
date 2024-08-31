import { Title } from "./Title";
import { products } from "../assets/frontend_assets/assets";
import { ProductItem } from "./ProductItem";

export const Collection = () => {
    return (
        <div className="my-5 mt-12">
            <Title text1={"Latest"} text2={'Collections'} />
            <p className="text-sm font-medium text-center mt-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sequi!</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 mt-5">
                {
                    products.slice(7, 17).map((item, index) => {
                        return (
                            <ProductItem key={index} name= {item.name} image={item.image[0]} price={item.price} id={item._id} />
                        )
                    })
                }
            </div>
        </div>
    )
}