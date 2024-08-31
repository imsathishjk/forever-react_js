export const NewsLetter = () => {
    return (
        <div className="text-center max-w-[800px] my-5 mt-[80px] mx-auto ">
            <p className="text-[20px] font-semibold">Subscribe now & get 20% OFF</p>
            <p className="text-sm text-gray-500 text-[14px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laudantium quisquam impedit!.</p>
            <div className="border border-gray-300 flex items-center justify-between mt-5">
                <input type="text" placeholder="Enter your email" className="border-none outline-none flex-1 p-0.5 sm:p-2" />
                <button className="border bg-black text-white p-2 px sm:py-3 sm:px-5 text-[10px] sm:text-[12px] font-medium">SUBSCRIBE</button>
            </div>
        </div>
    )
}