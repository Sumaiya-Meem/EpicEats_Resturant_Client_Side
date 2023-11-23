import FoodCard from "../FoodCard/FoodCard";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const OrderTab = ({item}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return (
        
        <div >
            <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {
                item.map(data=><FoodCard key={data._id} item={data}></FoodCard>)
      }
      </div>
        </SwiperSlide>
      </Swiper>
     
            
            
        </div>
    );
};

export default OrderTab;