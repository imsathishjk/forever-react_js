import { BestSeller } from "../Components/BestSeller";
import { Collection } from "../Components/Collection";
import { CustomerService } from "../Components/CustomerService";
import { Hero } from "../Components/Hero";
import { NewsLetter } from "../Components/NewsLetter";

export const Home = () => {
    return (
        <div>
            <Hero />
            <Collection />
            <BestSeller />
            <CustomerService />
            <NewsLetter />
        </div>
    )
}