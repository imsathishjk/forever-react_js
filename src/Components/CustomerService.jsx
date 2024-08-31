import { assets } from "../assets/frontend_assets/assets"
import { Title } from "./Title"
export const CustomerService = () => {
    return (
        <div className="mt-12">
            <Title text1={'Our'} text2={"Services"} />
            <p className="text-sm font-medium text-center text-gray-500 mt-3">We Provide 24/7 customer service and best in the industries</p>
            <div className="flex flex-col gap-5 sm:flex-row justify-between flex-wrap mt-[80px] my-5 text-center">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-center">
                        <img src={assets.exchange_icon} className="w-10" alt="exchange-icon" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Easy Exchange Policy</p>
                        <p className="text-sm text-gray-500 font-medium">We offer hassle free exchange policy</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-center">
                        <img src={assets.quality_icon} className="w-10" alt="quality-icon" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">7 days return policy</p>
                        <p className="text-sm text-gray-500 font-medium">We offer 7 days free return policy</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-center">
                        <img src={assets.support_img} className="w-10" alt="support-icon" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Best customer support</p>
                        <p className="text-sm text-gray-500 font-medium">We provide 24/7 customer support</p>
                    </div>
                </div>
            </div>
        </div>

    )
}