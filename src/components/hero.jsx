import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/sliding2.png";
// import slide3 from "../assets/slider3.png";

function Hero() {
    return (
        <div className="!max-h-[100vh]"
        >
            <Swiper className="w-[100%]"
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slide 1" className="w-[100%] h-[100vh] object-cover"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide 2" className="w-[100%] h-[100vh] object-cover"/>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src={slide3} alt="Slide 3" className="w-[100%] h-["/>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
}

export default Hero;
