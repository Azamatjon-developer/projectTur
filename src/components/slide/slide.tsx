import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import TravelImage1 from '../../../public/assets/images/SlideImage.jpg'
export default function App() {
  return (
    <div className="container mx-auto mt-[50px]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={25}
        loop={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[50px]">
            Baikal Ice. The Best
          </h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 1"
            width={400}
            height={400}
          />
          <h3>Season </h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[50px]">Mountain View</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 2"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[50px]">Beautiful Beach</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 3"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[50px]">City Lights</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 4"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[50px]">Peaceful Forest</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 5"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[50px]">Peaceful Forest</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 5"
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[50px]">Peaceful Forest</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 5"
            width={400}
            height={400}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
