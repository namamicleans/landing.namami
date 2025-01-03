import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const Offer = () => {
  const data = [
    {
      title: "Car Cleaning",
      color: "head-bg-1",
      img: "cross.png",
      description:
        "Thorough cleaning of your car's interior and exterior for a showroom-like finish. Our services remove dirt, stains, and odors, ensuring your car looks brand new.",
    },
    {
      title: "Water Tank Cleaning",
      color: "head-bg-2",
      img: "cross2.png",
      description:
        "We clean and sanitize your water tanks to ensure safe and clean water for you and your family. Our specialized equipment guarantees a thorough job.",
    },
    {
      title: "Sofa Cleaning",
      color: "head-bg-3",
      img: "business.svg",
      description:
        "We remove dirt, stains, and odors from your sofas, making them look fresh and clean again. Trust our professionals to restore the comfort of your furniture.",
    },
    {
      title: "Carpet Cleaning",
      color: "head-bg-4",
      img: "cross4.png",
      description:
        "Our carpet cleaning service brings back the softness and appearance of your carpets. We ensure deep cleaning to remove dirt and allergens.",
    },
    {
      title: "Solar Panel Cleaning",
      color: "head-bg-5",
      img: "cross2.png",
      description:
        "We clean your solar panels to maintain their efficiency. Our service ensures optimal performance by removing dust and debris from the panels.",
    },
    {
      title: "Kitchen Chimney Cleaning",
      color: "head-bg-6",
      img: "cross.png",
      description:
        "Keep your kitchen clean and odor-free with our chimney cleaning service. We remove grease and soot buildup, improving the performance and safety of your kitchen.",
    },
    {
      title: "Newly Built House Cleaning",
      color: "head-bg-7",
      img: "business.svg",
      description:
        "After construction, our team provides post-construction cleaning services to make your new house move-in ready. We ensure every corner is spotless.",
    },
    {
      title: "B2B Cleaning Services",
      color: "head-bg-8",
      img: "cross4.png",
      description:
        "We provide tailored cleaning solutions for businesses, helping maintain a professional and welcoming environment for employees and clients.",
    },
  ];

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
        {data.map((item, i) => (
          <SwiperSlide className={`swiper-slide ${item.color}`} key={i}>
            <div className="card-offer-style-3">
              <div className="card-head">
                <div className="card-image">
                  <img
                    src={`assets/imgs/page/homepage1/${item.img}`}
                    alt={item.title}
                  />
                </div>
                <div className="card-title">
                  <h4 className="color-brand-1">{item.title}</h4>
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
