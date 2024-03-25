// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="firstImage.png" alt="firstImage" className="w-full firstImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="secondImage.png" alt="secondImage" className="w-full secondImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="thirdImage.png" alt="thirdImage" className="w-full  thirdImage" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
