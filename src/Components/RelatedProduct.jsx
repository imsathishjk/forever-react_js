import { useEffect, useState } from 'react';
import { Title } from '../Components/Title';
import { products } from '../assets/frontend_assets/assets';
import { ProductItem } from './ProductItem';
export const RelatedProduct = ({ category, subCategory }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    console.log(category, subCategory);

    const fetchRelated = async () => {
        let rpCopy = products.slice();
        if (category && subCategory) {
            rpCopy = rpCopy.filter((item) => item.category === category);
            rpCopy = rpCopy.filter((item) => item.subCategory === subCategory);
            return setRelatedProducts(rpCopy)
        } else {
            return null;
        }
    }

    useEffect(() => {
        fetchRelated();
    }, [category,subCategory])
    return (
        <div className='mt-12'>
            <Title text1={'RELATED'} text2={"PRODUCTS"} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 mt-5">
                {
                    relatedProducts.slice(0, 5).map((item, index) => {
                        return <ProductItem key={index} image={item.image[0]} name={item.name} price={item.price} />
                    })
                }
            </div>

        </div>
    )
}