import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import TravelImage1 from '../../../public/assets/images/SlideImage.jpg';

export default function App() {
  return (
    <div className="container mx-auto mt-24">
      <div className="grid grid-cols-2 mb-8">
        <h3 className="text-[48px] font-bold">Best Tours </h3>
        <p className="w-[400px] text-[16px] text-slate-500">
          Features are special services that can diversify the journey. Add an
          individual menu, a test drive of a sports car, or a masterclass on
          helicopter control. Features make the rest individual.
        </p>
      </div>
      
      {/* Custom Navigation Buttons */}
      <div className="flex gap-5  mb-4">
        <button className="swiper-button-prev-custom bg-gray-300 py-[10px] px-[20px]  rounded-full shadow-md hover:bg-[#AA8262]">&lt;</button>
        <button className="swiper-button-next-custom bg-gray-300 py-[10px] px-[20px] rounded-full shadow-md hover:bg-[#AA8262]">&gt;</button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={25}
        loop={false}
      >
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[20px] text-center">Baikal Ice. The Best</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 1"
            width={400}
            height={400}
            className="w-[300px] h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[20px] text-center">Mountain View</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 2"
            width={400}
            height={400}
            className="w-[300px] h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[20px] text-center">Beautiful Beach</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 3"
            width={400}
            height={400}
            className="w-[300px] h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[20px] text-center">City Lights</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 4"
            width={400}
            height={400}
            className="w-[300px] h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[20px] text-center">Peaceful Forest</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 5"
            width={400}
            height={400}
            className="w-[300px] h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[20px] text-center">Peaceful Forest</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 5"
            width={400}
            height={400}
            className="w-[300px] h-[300px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-[24px] font-medium mb-[20px] text-center">Peaceful Forest</h3>
          <Image
            src={TravelImage1}
            alt="Travel Slide 5"
            width={400}
            height={400}
            className="w-[300px] h-[300px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
