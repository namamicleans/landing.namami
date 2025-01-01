import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const Testimonial2 = () => {
  const testimonials = [
    {
      img: "/assets/imgs/page/homepage7/author1.png",
      text: "Namami Cleans has transformed my workspace! The attention to detail and eco-friendly approach is truly impressive. Highly recommended for anyone who values cleanliness and sustainability.",
      name: "Rohit Mehta",
      designation: "Vidiha, Madhya Pradesh",
    },
    {
      img: "/assets/imgs/page/homepage7/author2.png",
      text: "As a homemaker, I was struggling with hard water stains. Namami Cleans provided a hassle-free solution that worked wonders! I’m a customer for life.",
      name: "Sunita Reddy",
      designation: "Vidisha, Madhya Pradesh",
    },
    {
      img: "/assets/imgs/page/homepage7/author3.png",
      text: "Their team is professional, punctual, and extremely effective. Our office carpets have never looked better. Namami Cleans exceeded our expectations!",
      name: "Karthik Sharma",
      designation: "Sagar, Madhya Pradesh",
    },
    {
      img: "/assets/imgs/page/homepage7/author4.png",
      text: "Thanks to Namami Cleans, our restaurant maintains top-notch hygiene standards. Their services have been a game-changer for our business.",
      name: "Priyam Singh",
      designation: "Vidisha, Madhya Pradesh",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-style-3",
          nextEl: ".swiper-button-next-style-3",
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          575: { slidesPerView: 1, spaceBetween: 30 },
          767: { slidesPerView: 1, spaceBetween: 30 },
          991: { slidesPerView: 2, spaceBetween: 30 },
          1199: { slidesPerView: 2, spaceBetween: 30 },
          1350: { slidesPerView: 2, spaceBetween: 30 },
        }}
        className="swiper-wrapper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="card-review">
              <div className="card-info">
                <div className="rating-review">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/assets/imgs/page/homepage7/star.png"
                      alt="star"
                    />
                  ))}
                </div>
                <h5 className="color-grey-800 mb-20">{testimonial.text}</h5>
                <div className="box-author">
                  <a href="#">
                    <img src={testimonial.img} alt={testimonial.name} />
                  </a>
                  <div className="author-info">
                    <a href="#">
                      <span className="font-md-bold color-brand-1 author-name">
                        {testimonial.name}
                      </span>
                    </a>
                    <span className="font-xs color-grey-500 department">
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial2;
