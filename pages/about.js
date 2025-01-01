import Link from "next/link";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";

const pageAbout = () => {
  return (
    <>
      <Head>
        <title>iori - About Us</title>
      </Head>
      <Layout>
        <section className="section pt-90 banner-about">
          <div className="container text-center">
            <h6 className="color-grey-400 mb-15">Who we are</h6>
            <h2 className="color-brand-1 mb-15">
              We are a professional cleaning service
              <br className="d-none d-lg-block" /> dedicated to making your life
              easier.
            </h2>
            <p className="font-md color-grey-400 mb-30">
              Namami Cleans takes pride in offering reliable, efficient, and
              affordable cleaning solutions
              <br className="d-none d-lg-block" /> for your home, office, car,
              and beyond. Whether it’s a one-time{" "}
              <br className="d-none d-lg-block" /> deep clean or a regular
              subscription, our experienced servicemen ensure{" "}
              <br className="d-none d-lg-block" />
              your spaces shine like new. With a focus on delivering top-notch
              service,
              <br className="d-none d-lg-block" /> we’re expanding to new cities
              across India to meet growing demand.
            </p>
            <div className="box-radius-border mt-50">
              <div className="box-list-numbers">
                <div className="item-list-number">
                  <div className="box-image-bg">
                    {" "}
                    <img
                      src="assets/imgs/page/homepage3/dispersal.png"
                      alt="iori"
                    />
                  </div>
                  <h2 className="color-brand-1">5K+</h2>
                  <p className="color-brand-1 font-lg">
                    Hours Saved for Customers
                  </p>
                </div>
                <div className="item-list-number">
                  <div className="box-image-bg">
                    {" "}
                    <img
                      src="assets/imgs/page/homepage3/certification.png"
                      alt="iori"
                    />
                  </div>
                  <h2 className="color-brand-1">2+</h2>
                  <p className="color-brand-1 font-lg">Cities Served</p>
                </div>
                <div className="item-list-number">
                  <div className="box-image-bg">
                    {" "}
                    <img
                      src="assets/imgs/page/homepage1/cross2.png"
                      alt="iori"
                    />
                  </div>
                  <h2 className="color-brand-1">300+</h2>
                  <p className="color-brand-1 font-lg">Services Completed</p>
                </div>
                <div className="item-list-number">
                  <div className="box-image-bg">
                    {" "}
                    <img
                      src="assets/imgs/page/homepage3/research.png"
                      alt="iori"
                    />
                  </div>
                  <h2 className="color-brand-1">10+</h2>
                  <p className="color-brand-1 font-lg">
                    Cleaning Professionals
                  </p>
                </div>
                <div className="item-list-number">
                  <div className="box-image-bg">
                    {" "}
                    <img
                      src="assets/imgs/page/homepage3/conference.png"
                      alt="iori"
                    />
                  </div>
                  <h2 className="color-brand-1">2+</h2>
                  <p className="color-brand-1 font-lg">Years of expertise</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section mt-90 pb-50 bg-core-value">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="item-core mb-30">
                  <div className="item-image">
                    <img src="assets/imgs/page/about/img1.png" alt="iori" />
                  </div>
                  <div className="item-desc">
                    <p className="font-md color-grey-400 mb-15">
                      “Whether you are working from home, at the office or at
                      the job site, we provide flexible tools so you can connect
                      and collaborate on waterfall projects, agile projects and
                      everything in between.”
                    </p>
                    <h6 className="color-brand-1">Ralph Edwards</h6>
                    <span className="color-grey-500 font-xs">
                      Chairman of the board
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item-core mb-30">
                  <div className="item-image">
                    <img src="assets/imgs/page/about/img2.png" alt="iori" />
                  </div>
                  <div className="item-desc">
                    <p className="font-md color-grey-400 mb-15">
                      “We created a revolutionary online knowledge and
                      competencies assessment solution. It empowers thousands of
                      organizations worldwide to grow by allowing them to get a
                      broader picture and draw better conclusions”
                    </p>
                    <h6 className="color-brand-1">Ralph Edwards</h6>
                    <span className="color-grey-500 font-xs">
                      Chairman of the board
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row box-list-core-value">
              {/* Core Values Introduction */}
              <div className="col-lg-4 mb-70">
                <div className="box-core-value">
                  <div className="shape-left shape-1" />
                  <h3 className="color-brand-1 mb-15">Core Values</h3>
                  <p className="font-md color-grey-400">
                    We break down barriers so teams can focus on what matters –
                    working together to create products their customers love.
                  </p>
                </div>
              </div>

              {/* Core Values - Column 1 */}
              <div className="col-lg-4">
                <ul className="list-core-value">
                  <li>
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Customers First</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Our company exists to help merchants sell more. We make
                        every decision and measure every outcome based on how
                        well it serves our customers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Act With Integrity</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        We’re honest, transparent, and committed to doing what’s
                        best for our customers and our company. We openly
                        collaborate in pursuit of the truth. We have no
                        tolerance for politics, hidden agendas, or
                        passive-aggressive behavior.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">
                      Make a Difference Every Day
                    </h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Our company exists to help merchants sell more. We make
                        every decision and measure every outcome based on how
                        well it serves our customers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Core Values - Column 2 */}
              <div className="col-lg-4">
                <ul className="list-core-value">
                  <li>
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Think Big</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Being the world's leading commerce platform requires
                        unrivaled vision, innovation, and execution. We never
                        settle. We challenge our ideas of what’s possible to
                        better meet the needs of our customers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Do the Right Thing</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Integrity is the foundation for everything we do. We are
                        admired and respected for our commitment to honesty,
                        trust, and transparency.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Stronger United</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        We’ve created a positive and inclusive culture that
                        fosters open, honest, and meaningful relationships.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section pt-100 pb-100 bg-2">
          <div className="container">
            <div className="box-story box-story-1">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="box-info-video">
                    <img
                      className="bd-rd8 d-block"
                      src="assets/imgs/page/about/img3.png"
                      alt="Namami Cleans"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="box-info-video mt-30 mb-30">
                    <span className="btn btn-tag">OUR STORY</span>
                    <h3 className="color-brand-1 mt-10 mb-15">
                      Behind every cleaning service is an{" "}
                      <br className="d-none d-lg-block" />
                      inspiring journey
                    </h3>
                    <p className="font-md color-grey-400">
                      Namami Cleans was founded with a vision to revolutionize
                      the cleaning industry. Our journey began with the goal to
                      provide high-quality, eco-friendly, and reliable cleaning
                      services right at your doorstep. With the leadership of
                      Bhuvnesh Singh Sikarwar and Devansh Sengar, we have
                      steadily expanded to meet the growing needs of our
                      customers.
                    </p>
                    <ul className="list-dots mt-20">
                      <li>
                        We are committed to redefining cleanliness standards.
                      </li>
                      <li>
                        We use eco-friendly products for a cleaner environment.
                      </li>
                      <li>
                        Our team ensures top-notch service delivery with
                        professionalism.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-story box-story-2">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="box-info-video mt-30 mb-30">
                    <span className="btn btn-tag">OUR MISSION</span>
                    <h3 className="color-brand-1 mt-10 mb-15">
                      Our mission is to deliver the best cleaning services with
                      unmatched convenience and quality
                    </h3>
                    <p className="font-md color-grey-400">
                      At Namami Cleans, we are dedicated to providing reliable
                      and hassle-free cleaning services. We ensure that every
                      task is executed with precision and care, all while using
                      environmentally friendly products to keep your space clean
                      and healthy. Our mission is to make cleaning accessible to
                      everyone, in a way that saves time and effort.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="box-info-video">
                    <img
                      className="bd-rd8 d-block"
                      src="assets/imgs/page/about/img4.png"
                      alt="Namami Cleans"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-90">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6">
                <h6 className="color-brand-1 mb-20">Our leadership team</h6>
                <h2 className="color-brand-1 mb-50">
                  Meet the amazing team behind Iori
                </h2>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card-team mb-30">
                  <div className="card-image">
                    <img src="assets/imgs/page/about/team1.png" alt="iori" />
                  </div>
                  <div className="card-info">
                    <Link className="font-lg" href="#">
                      Devon Lane
                    </Link>
                    <p className="font-xs color-grey-200 mb-10">CEO</p>
                    <p className="font-xs color-grey-400">
                      Sharing content online allows you to craft an online
                      persona that reflects your personal values and
                      professional skills. Even if you only use social media
                      occasionally
                    </p>
                    <div className="list-socials">
                      <Link className="icon-socials icon-facebook" href="#" />
                      <Link className="icon-socials icon-instagram" href="#" />
                      <Link className="icon-socials icon-twitter" href="#" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card-team mb-30">
                  <div className="card-image">
                    <img src="assets/imgs/page/about/team2.png" alt="iori" />
                  </div>
                  <div className="card-info">
                    <Link className="font-lg" href="#">
                      Jennie Tho
                    </Link>
                    <p className="font-xs color-grey-200 mb-10">
                      Finance Manager
                    </p>
                    <p className="font-xs color-grey-400">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus.
                    </p>
                    <div className="list-socials">
                      <Link className="icon-socials icon-facebook" href="#" />
                      <Link className="icon-socials icon-instagram" href="#" />
                      <Link className="icon-socials icon-twitter" href="#" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card-team mb-30">
                  <div className="card-image">
                    <img src="assets/imgs/page/about/team3.png" alt="iori" />
                  </div>
                  <div className="card-info">
                    <Link className="font-lg" href="#">
                      Symon Lesin
                    </Link>
                    <p className="font-xs color-grey-200 mb-10">
                      Technology Manager
                    </p>
                    <p className="font-xs color-grey-400">
                      In a professional context it often happens that private or
                      corporate clientsorder a publication to publish news.
                      Excepteur sint occaecat cupidatat non proident,
                    </p>
                    <div className="list-socials">
                      <Link className="icon-socials icon-facebook" href="#" />
                      <Link className="icon-socials icon-instagram" href="#" />
                      <Link className="icon-socials icon-twitter" href="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-100 box-testimonial-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 text-start pt-50">
                <span className="title-line line-48">Testimonials</span>
                <h2 className="color-brand-1 mb-20 mt-15">
                  What our clients
                  <br className="d-none d-lg-block" />
                  say about us
                </h2>
                <div className="row">
                  <div className="col-lg-10">
                    <p className="font-md color-gray-500 mb-30">
                      Namami Cleans has transformed the way we think about
                      cleaning. With their reliable services and eco-friendly
                      approach, we are assured of a sparkling clean space every
                      time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 bg-testimonials position-relative">
                <div className="ml-20">
                  <div className="card-testimonial-list">
                    <div className="d-flex align-items-center">
                      <div className="box-author mb-10">
                        <Link href="#">
                          <img
                            src="assets/imgs/page/homepage1/author.png"
                            alt="testimonial"
                          />
                        </Link>
                        <div className="author-info">
                          <Link href="#">
                            <span className="font-md-bold color-brand-1 author-name">
                              Rajesh Gupta
                            </span>
                          </Link>
                          <span className="font-xs color-grey-500 department">
                            Business Owner, Delhi
                          </span>
                        </div>
                      </div>
                      <div className="rating text-end">
                        <img
                          src="assets/imgs/template/icons/star.svg"
                          alt="star"
                        />
                        <img
                          src="assets/imgs/template/icons/star.svg"
                          alt="star"
                        />
                        <img
                          src="assets/imgs/template/icons/star.svg"
                          alt="star"
                        />
                        <img
                          src="assets/imgs/template/icons/star.svg"
                          alt="star"
                        />
                        <img
                          src="assets/imgs/template/icons/star.svg"
                          alt="star"
                        />
                      </div>
                    </div>
                    <p className="font-md color-grey-500">
                      "Namami Cleans’ car cleaning service is exceptional. My
                      car looks as good as new! Highly recommend them for all
                      types of cleaning."
                    </p>
                  </div>
                </div>
                <div className="ml-100">
                  <div className="card-testimonial-list">
                    <div className="d-flex align-items-center">
                      <div className="box-author mb-10">
                        <Link href="#">
                          <img
                            src="assets/imgs/page/homepage2/author2.png"
                            alt="testimonial"
                          />
                        </Link>
                        <div className="author-info">
                          <Link href="#">
                            <span className="font-md-bold color-brand-1 author-name">
                              Priya Verma
                            </span>
                          </Link>
                          <span className="font-xs color-grey-500 department">
                            Housewife, Mumbai
                          </span>
                        </div>
                      </div>
                      <div className="rating text-end">
                        <img
                          src="assets/imgs/template/icons/star.svg"
                          alt="star"
                        />
                        <img
                          src="assets/imgs/template/icons/star.svg"
                          alt="star"
                        />
                        <img
                          src="assets/imgs/template/icons/star.svg"
                          alt="star"
                        />
                        <img
                          src="assets/imgs/template/icons/star-gray.svg"
                          alt="star"
                        />
                        <img
                          src="assets/imgs/template/icons/star-gray.svg"
                          alt="star"
                        />
                      </div>
                    </div>
                    <p className="font-md color-grey-500">
                      "Booked Namami Cleans for my home cleaning after a
                      renovation. They did an excellent job, and the house was
                      spotless. I highly recommend them!"
                    </p>
                  </div>
                </div>
                <div className="card-testimonial-list">
                  <div className="d-flex align-items-center">
                    <div className="box-author mb-10">
                      <Link href="#">
                        <img
                          src="assets/imgs/page/homepage2/author3.png"
                          alt="testimonial"
                        />
                      </Link>
                      <div className="author-info">
                        <Link href="#">
                          <span className="font-md-bold color-brand-1 author-name">
                            Arjun Mehta
                          </span>
                        </Link>
                        <span className="font-xs color-grey-500 department">
                          Entrepreneur, Bengaluru
                        </span>
                      </div>
                    </div>
                    <div className="rating text-end">
                      <img
                        src="assets/imgs/template/icons/star.svg"
                        alt="star"
                      />
                      <img
                        src="assets/imgs/template/icons/star.svg"
                        alt="star"
                      />
                      <img
                        src="assets/imgs/template/icons/star.svg"
                        alt="star"
                      />
                      <img
                        src="assets/imgs/template/icons/star.svg"
                        alt="star"
                      />
                      <img
                        src="assets/imgs/template/icons/star.svg"
                        alt="star"
                      />
                    </div>
                  </div>
                  <p className="font-md color-grey-500">
                    "Namami Cleans’ sofa cleaning service is amazing! The team
                    was professional, and my sofa looks brand new. Fantastic
                    service!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-50">
          <div className="container">
            <div className="box-newsletter box-newsletter-2">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 m-auto text-center">
                  <span className="font-lg color-brand-1">Newsletter</span>
                  <h2 className="color-brand-1 mb-15 mt-5">
                    Subcribe our newsletter
                  </h2>
                  <p className="font-md color-grey-500">
                    Do not miss the latest information from us about the
                    trending in the market. By clicking the button, you are
                    agreeing with our Term &amp; Conditions
                  </p>
                  <div className="form-newsletter mt-30">
                    <form action="#">
                      <input type="text" placeholder="Enter you mail .." />
                      <button
                        className="btn btn-submit-newsletter"
                        type="submit"
                      >
                        <svg
                          className="w-6 h-6 icon-16"
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
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default pageAbout;
