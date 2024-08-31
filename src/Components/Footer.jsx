import { assets } from "../assets/frontend_assets/assets"
export const Footer = () => {
    return (
        <div className="grid grid-cols-[1fr,1fr] sm:grid-cols-[2fr_1.5fr_1fr] gap-5 mt-[100px] my-5 place-content-center">
            <div className="flex flex-col gap-2">
                <img src={assets.logo} alt="footer_logo" className="w-28" />
                <p className="text-sm text-gray-500 font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa animi ad quod. Eligendi fugit minima quo non. Dignissimos iusto tenetur, earum porro voluptates ut consequatur blanditiis? Iste beatae aliquam laboriosam optio exercitationem quam facere consequuntur.</p>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-lg font-medium">COMPANY</h3>
                    <ul className="flex flex-col">
                        <li className="text-sm font-medium text-gray-500">Home</li>
                        <li className="text-sm font-medium text-gray-500">About Us</li>
                        <li className="text-sm font-medium text-gray-500">Delivery</li>
                        <li className="text-sm font-medium text-gray-500">Privacy Policy</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-lg font-medium">GET IN TOUCH</h3>
                    <div>
                        <p className="text-sm font-medium text-gray-500">+1 000-0000-000</p>
                        <p className="text-sm font-medium text-gray-500">sathishjk@merndev.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}