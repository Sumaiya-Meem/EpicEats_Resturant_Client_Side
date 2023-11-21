import img from "../../../assets/home/chef-service.jpg"
const About = () => {
    return (
        <div className="mt-16">
            <div className="" style={{
                backgroundImage: `url(${img})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                height: '400px',
            } }>
             

             <div className="absolute mt-28 ml-16 bg-white w-[70%] mx-auto  p-4">
              <h1 className="text-3xl text-center mb-3 p-2">EpicEats</h1>
              <p className="px-16">
              At EpicEats, we believe that dining is not just about food; it's an experience that transcends the ordinary. Established with a passion for exceptional culinary journeys, EpicEats Restaurants is your gateway to a world where flavors, ambiance, and hospitality converge to create unforgettable moments.
              Quality is at the heart of everything we do.
              </p>
             </div>
            

            </div>
        </div>
    );
};

export default About;