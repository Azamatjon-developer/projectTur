import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import TravelImage1 from '../../../public/assets/images/SlideImage.jpg';

const Features = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="grid grid-cols-2">
        <h3 className="text-[48px] font-bold">Features</h3>
        <p className="w-[400px] text-[16px] text-slate-500">
          Features are special services that can diversify the journey. Add an
          individual menu, a test drive of a sports car, or a masterclass on
          helicopter control. Features make the rest individual.
        </p>
      </div>

      <div className="flex gap-5  mb-4">
        <button className="swiper-button-prev-custom bg-gray-300 py-[10px] px-[20px]  rounded-full shadow-md hover:bg-[#AA8262]">&lt;</button>
        <button className="swiper-button-next-custom bg-gray-300 py-[10px] px-[20px] rounded-full shadow-md hover:bg-[#AA8262]">&gt;</button>
      </div>

      <div className="container mx-auto mt-[30px] mb-[200px] relative">
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
            <Image
              src={TravelImage1}
              alt="Travel Slide 1"
              width={400}
              height={400}
              className="rounded-full w-[300px] h-[300px]"
            />
            <h3 className="text-[24px] font-medium mb-[50px] text-center">Baikal Ice. The Best</h3>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={TravelImage1}
              alt="Travel Slide 2"
              width={400}
              height={400}
              className="rounded-full w-[300px] h-[300px]"
            />
            <h3 className="text-[24px] font-medium mb-[50px] text-center">Mountain View</h3>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={TravelImage1}
              alt="Travel Slide 3"
              width={400}
              height={400}
              className="rounded-full w-[300px] h-[300px]"
            />
            <h3 className="text-[24px] font-medium mb-[50px] text-center">Beautiful Beach</h3>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={TravelImage1}
              alt="Travel Slide 4"
              width={400}
              height={400}
              className="rounded-full w-[300px] h-[300px]"
            />
            <h3 className="text-[24px] font-medium mb-[50px] text-center">City Lights</h3>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={TravelImage1}
              alt="Travel Slide 5"
              width={400}
              height={400}
              className="rounded-full w-[300px] h-[300px]"
            />
            <h3 className="text-[24px] font-medium mb-[50px] text-center">Peaceful Forest</h3>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={TravelImage1}
              alt="Travel Slide 6"
              width={400}
              height={400}
              className="rounded-full w-[300px] h-[300px]"
            />
            <h3 className="text-[24px] font-medium mb-[50px] text-center">Calm Sunset</h3>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={TravelImage1}
              alt="Travel Slide 7"
              width={400}
              height={400}
              className="rounded-full w-[300px] h-[300px]"
            />
            <h3 className="text-[24px] font-medium mb-[50px] text-center">Tranquil Lake</h3>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <button className='pt-[12px] pb-[12px] pl-[26px] pr-[26px] bg-[#AA8262] mb-[50px] cursor-pointer text-white outline-none rounded-xl text-[24px]'>
         All features <strong className='bg-white text-black rounded-full w-[60px] h-[60px]'> 30 </strong> 
        </button>
      </div>
    </div>
  );
};

export default Features;
