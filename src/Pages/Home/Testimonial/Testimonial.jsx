import TitleSection from "../../../Shared/TitleSection/TitleSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        const reviewData = async () => {
            const res = await axios.get('reviews.json');
            setReview(res.data)

        }
        reviewData();
    }, [])
    return (
        <div className="my-20">
            <div>
                <TitleSection
                    heading={"TESTIMONIALS"}
                    subHeading={"---What Our Clients Say---"}
                >

                </TitleSection>
            </div>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

{
    review.map(data => <SwiperSlide key={data._id}>
        <div className="flex flex-col justify-center items-center space-y-2 m-16">
            <Rating
            className="mb-10"
                style={{ maxWidth: 180 }}
                value={data.rating}
                readOnly
            />
            <p className="text-[#444]"> {data.details}</p>
            <h2 className="text-4xl text-center text-[#CD9003]">{data.name}</h2>
        </div>
    </SwiperSlide>)
}
</Swiper>
            </div>
        </div>
    );
};

export default Testimonial;