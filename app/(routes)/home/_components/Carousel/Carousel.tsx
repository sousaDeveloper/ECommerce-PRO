// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
          <Image src="/imageFour.png" alt="imageOne" fill className="imageCarousel" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/firstImage.png" alt="imageOne" fill className="imageCarousel" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/imageFive.png" alt="imageOne" fill className="imageCarousel" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/secondImage.png" alt="imageOne" fill className="imageCarousel" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/thirdImage.png" alt="imageOne" fill className="imageCarousel" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
