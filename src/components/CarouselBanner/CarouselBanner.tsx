import './CarouselBanner.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions} from "swiper/types";
import {useRef} from "react";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";

const CarouselBanner = () => {

    const settingsSwiper: SwiperOptions = {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        autoplay: {delay: 6000}
    };

    const swiperRef = useRef<any>(null);

    const banners = ["banner-auto-tag-01.jpg", "banner-auto-tag-02.jpg"]

    return (
        <Swiper
            {...settingsSwiper}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            id="carouselExample" className="carousel-banner"
        >
            {banners.map(value =>
                <SwiperSlide className="div-banners-carousel">
                    <img
                        src={"/" + value}
                        alt=""/>
                </SwiperSlide>
            )}
            <div className="carousel-banner-button carousel-banner-button-prev">
                <button onClick={() => swiperRef.current.slidePrev()}>
                    <MdArrowBackIosNew/>
                </button>
            </div>
            <div className="carousel-banner-button carousel-banner-button-next">
                <button onClick={() => swiperRef.current.slideNext()}>
                    <MdArrowForwardIos/>
                </button>
            </div>
        </Swiper>
    )
}

export default CarouselBanner
