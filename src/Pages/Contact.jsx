import { Title } from "../Components/Title";
import { assets } from '../assets/frontend_assets/assets';
import { NewsLetter } from '../Components/NewsLetter';

export const Contact = () => {
    return (
        <div className="mt-12">
            <Title text1={"Contact"} text2={"Us"} />
            <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-5 mt-12">
                <div className="w-full sm:max-w-[400px]">
                    <img src={assets.contact_img} alt="contact_img" />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[18px] font-semibold text-black">Our Store</h1>
                        <p className="text-sm font-medium text-gray-500" >54709 Willms Station <br />
                            Suite 350, Washington, USA</p>
                        <div>
                            <p className="text-sm font-medium text-gray-500" >Tel: (415) 555-0132</p>
                            <p className="text-sm font-medium text-gray-500">Email: admin@forever.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-[18px] font-semibold text-black">Careers at Forever</p>
                        <p className="text-sm font-medium text-gray-500">Learn more about our teams and job openings.</p>
                        <button className="w-fit border border-black py-4 px-6 text-sm font-medium hover:bg-black hover:text-white duration-500 transition-all">Explore Jobs</button>
                    </div>
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}