import About from "./About/About";
import Banner from "./Banner/Banner";
import CategorySlide from "./CategorySlide/CategorySlide";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <CategorySlide></CategorySlide>
           <About></About>
           <PopularMenu></PopularMenu>
           <FeaturedItem></FeaturedItem>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;