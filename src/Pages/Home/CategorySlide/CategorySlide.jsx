import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import TitleSection from '../../../Shared/TitleSection/TitleSection';

const CategorySlide = () => {
    return (
        <div>

            <div>
               <TitleSection
                heading={"ORDER ONLINE"}
                subHeading={"---From 11:00am to 10:00pm---"}
               >

               </TitleSection>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" srcset="" />
                        <h3 className='uppercase text-3xl -mt-12 text-center text-white'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" srcset="" />
                        <h3 className='uppercase text-3xl -mt-12 text-center text-white'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" srcset="" />

                        <h3 className='uppercase text-3xl -mt-12 text-center text-white'>Soup</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide4} alt="" srcset="" />
                        <h3 className='uppercase text-3xl -mt-12 text-center text-white'>desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" srcset="" />
                        <h3 className='uppercase text-3xl -mt-12 text-center text-white'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default CategorySlide;