import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const Offer = ({ services }) => {
  console.log(services, 'data pffer ')

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        {services.map((item, i) => (
          <SwiperSlide className={`swiper-slide head-bg-${i+1}`} key={i}>
            <div className="card-offer-style-3">
              <div className="card-head">
                <div className="card-image">
                  <img
                    src={item.icon}
                    alt={item.name}
                  />
                </div>
                <div className="card-title">
                  <h4 className="color-brand-1">{item.name}</h4>
                </div>
              </div>
              <div className="card-info">
                <p className="font-sm color-grey-500 mb-15">
                  {item.description}
                </p>
                <div className="box-button-offer">
                  <a
                    className="btn btn-default font-sm-bold pl-0 color-brand-1 hover-up"
                    href="#"
                  >
                    Learn More
                    <svg
                      className="w-6 h-6 icon-16 ml-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="box-button-slider-bottom">
        <div className="swiper-button-prev swiper-button-prev-group-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        <div className="swiper-button-next swiper-button-next-group-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Offer;
