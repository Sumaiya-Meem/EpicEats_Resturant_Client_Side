import { Button } from "flowbite-react";
import TitleSection from "../../../Shared/TitleSection/TitleSection";
import img from '../../../assets/home/featured.jpg'


const FeaturedItem = () => {
    return (
        <div className="my-10 text-white bg-fixed" style={{backgroundImage:`url(${img})`,backgroundSize:'cover'}}>
            <div className="">
                <TitleSection
                    heading={"FROM OUR MENU"}
                    subHeading={"---Check it out---"}
                >

                </TitleSection>
            </div>
            <div className="bg-slate-500 bg-opacity-40 md:flex justify-center items-center gap-2 py-16 px-32">
                <div>
                    <img src={img} alt="" srcset="" />
                </div>
                <div className="md:ml-16 space-y-3  ">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    
                    <button className=" text-xl" style={{borderBottom:"3px solid #fff",borderRadius:"5px"}}>Read More</button>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturedItem;