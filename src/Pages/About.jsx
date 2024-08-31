import { NewsLetter } from "../Components/NewsLetter"
import { Title } from "../Components/Title"
import { assets } from "../assets/frontend_assets/assets"
export const About = () => {
    return (
        <div className="mt-12">
            <Title text1={"About"} text2={"Us"} />
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-5 my-12">
                <div className="max-w-[450px]">
                    <img src={assets.about_img} alt="about_img" className="w-full" />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-sm font-medium text-gray-500">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                    <p className="text-sm font-medium text-gray-500">Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                    <h2 className="text-sm font-semibold">Our Mission</h2>
                    <p className="text-sm font-medium text-gray-500">Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>
            <Title text1={"WHY"} text2={"CHOOSE US"} />
            <div className="flex flex-wrap md:flex-nowrap mt-12">
                <div className="flex flex-col border border-gray-300 gap-5 p-12">
                    <h3 className="text-sm font-semibold text-black">Quality Assurance:</h3>
                    <p className="text-sm text-gray-500">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div  className="flex flex-col border border-gray-400 gap-5 p-12">
                    <h3 className="text-sm font-semibold text-black">Convenience:</h3>
                    <p className="text-sm text-gray-500">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div className="flex flex-col border border-gray-400 gap-5 p-12">
                    <h3 className="text-sm font-semibold text-black">Exceptional Customer Service:</h3>
                    <p className="text-sm text-gray-500">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}