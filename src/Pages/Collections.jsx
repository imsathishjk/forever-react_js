import { useEffect, useState } from "react";
import { ProductItem } from "../Components/ProductItem";
import { Title } from "../Components/Title";
import { assets, products } from "../assets/frontend_assets/assets";

export const Collections = () => {
    const [subcategroy, setSubCategory] = useState('Relevant');
    const [categroy, setCategory] = useState('');
    const [type, setType] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [collections, setCollections] = useState([]);


    console.log(subcategroy);

    const loadProducts = () => {
        let cCopy = products.slice();
        setCollections(cCopy);
    };
    useEffect(() => {
        loadProducts();
    }, []);

    const fetchFilter = async () => {
        let csCopy = products.slice();
        if (categroy) {
            csCopy = csCopy.filter((item) => item.category.toLowerCase() == categroy.toLowerCase());
            setCollections(csCopy);
        }
        if (type) {
            csCopy = csCopy.filter((item) => item.subCategory.toLowerCase() == type.toLowerCase());
            setCollections(csCopy);
        }
        return csCopy;
    };
    useEffect(() => {
        fetchFilter()
    }, [categroy, type]);

    const priceFilter = () => {
        let fsCopy = products.slice();
        switch (subcategroy) {
            case 'low - high': {
                setCollections(fsCopy.sort((a, b) => a.price - b.price));
                break;
            }
            case 'high - low': {
                setCollections(fsCopy.sort((a, b) => b.price - a.price));
                break;
            }
            default: {
                loadProducts();
                break;
            }
        }
    };
    useEffect(() => {
        priceFilter()
    }, [subcategroy])


    return (
        <div className="relative flex justify-between items-center z-0 mt-5 sm:mt-12">
            <div className="flex flex-col cursor-pointer z-30 absolute top-10 left-0">
                <div className="flex gap-4 justify-between items-center group border border-gray-300 py-1 px-3" onClick={() => setShowFilter(!showFilter)}>
                    <p className="text-[14px] font-medium text-gray-500">Filters</p>
                    <img className={`w-2 transition-all ease-in-out duration-100 group-hover:transform group-hover:translate-x-1 z-30 ${showFilter ? 'rotate-90' : ""}`} src={assets.dropdown_icon} alt="Drop_down_icon" />
                </div>
                {
                    showFilter ? <>
                        <div className={`flex flex-col border border-gray-300  p-5 bg-white text-black`}>
                            <p className="text-sm font-medium">CATEGORIES</p>
                            <div className="flex gap-1 text-sm font-medium text-gray-400 mt-3">
                                <input type="checkbox" value={'Men'} onChange={(e) => setCategory(e.target.checked ? e.target.value : "")} />
                                <span>Men</span>
                            </div>
                            <div className="flex gap-1 text-sm font-medium text-gray-400 mt-3">
                                <input type="checkbox" value={'Women'} onChange={(e) => setCategory(e.target.checked ? e.target.value : "")} />
                                <span>Women</span>
                            </div>
                            <div className="flex gap-1 text-sm font-medium text-gray-400 mt-3">
                                <input type="checkbox" value={'Kids'} onChange={(e) => setCategory(e.target.checked ? e.target.value : "")} />
                                <span>Kids</span>
                            </div>
                        </div>
                        <div className={`flex flex-col gap-3 border border-gray-300  p-5 bg-white text-black`}>
                            <p className="text-sm font-medium">TYPE</p>
                            <div className="flex gap-1 text-sm font-medium text-gray-400 mt-3">
                                <input type="checkbox" value={'Topwear'} onChange={(e) => setType(e.target.checked ? e.target.value : "")} />
                                <span>Topwear</span>
                            </div>
                            <div className="flex gap-1 text-sm font-medium text-gray-400 mt-3">
                                <input type="checkbox" value={'Bottomwear'} onChange={(e) => setType(e.target.checked ? e.target.value : "")} />
                                <span>Bottomwear</span>
                            </div>
                            <div className="flex gap-1 text-sm font-medium text-gray-400 mt-3">
                                <input type="checkbox" value={'Winterwear'} onChange={(e) => setType(e.target.checked ? e.target.value : "")} />
                                <span>Winterwear</span>
                            </div>
                        </div>
                    </> : ""
                }
            </div>
            <div >
                <div className="flex flex-col items-end md:flex-row md:justify-between">
                    <div className="">
                        <Title text1={"All"} text2={"Collections"} />
                    </div>
                    <div className="flex items-center border border-gray-300 p-1 mt-2 sm:mt-0">
                        <p className="text-sm font-medium text-gray-400">Sorted By:</p>
                        <select className="border-none text-[12px] sm:text-sm font-medium cursor-pointer" onChange={(e) => setSubCategory(e.target.value.toLowerCase())} >
                            <option className="text-sm font-medium border-none" value="relevant">Relevant</option>
                            <option className="text-sm font-medium border-none" value="High - Low">High - Low</option>
                            <option className="text-sm font-medium border-none" value="Low - High">Low - High</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10 gap-y-5">
                    {
                        collections.slice(10, 50).map((item, index) => {
                            return (
                                <ProductItem key={index} image={item.image[0]} price={item.price} name={item.name} id={item._id} />
                            )
                        })
                    }
                </div>
            </div >
        </div >
    )
}