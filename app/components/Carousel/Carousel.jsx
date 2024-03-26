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
          <img src="imageFour.png" alt="thirdImage" className="imageCarousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="firstImage.png" alt="firstImage" className="imageCarousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="secondImage.png" alt="secondImage" className="imageCarousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="thirdImage.png" alt="thirdImage" className="imageCarousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="imageFive.png" alt="thirdImage" className="imageCarousel" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
