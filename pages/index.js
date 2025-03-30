import Link from 'next/link';
import React from 'react';
import Layout from "../components/layout/Layout";
import Testimonial2 from '../components/slider/Testimonial2';
import Image from 'next/image';

const HomePage7 = () => {
    return (
        <Layout>
            <section className="section banner-7">
                <div className="container">
                    <div className="box-radius-32 ml-minus-85 mr-minus-85">
                        <div className="row align-items-center h-100">
                            <div className="col-xl-6">
                                <div className="box-banner-left-home7"><span className="title-line line-48">Convenient, Reliable and Efficient</span>
                                    <h1 className="color-brand-1 mb-20 mt-5">Cleaning Services at Your Doorstep</h1>
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <p className="font-md color-grey-500 mb-25">
                                                We provide top-quality cleaning services tailored to your needs. Whether it's your car, home, or business, our team is ready to help with a wide range of cleaning services.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="box-join-now">
                                            <div className="box-form-join">
                                                <form action="#">
                                                    <input className="form-control" type="text" placeholder="Enter you mail..." />
                                                    <button className="btn btn-join">Join Now
                                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </button>
                                                </form>
                                            </div>
                                        </div> */}
                                    <div className="box-joined">
                                        <span className="font-sm color-grey-400 d-inline-block">
                                            Book your service
                                            <Link className="font-sm-bold color-brand-1" href="/register"> Now</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 d-none d-xl-block h-100">
                                <div className="box-banner-7">
                                    <div className="banner-7-img-1 scroll-1 mt-3"> <img src="https://media.istockphoto.com/id/1417833187/photo/professional-cleaner-vacuuming-a-carpet.jpg?s=612x612&w=0&k=20&c=5h8NBR190d46Ni4MclqJ7Zf9ZOtf3TM3gPRJaHUdMjk=" alt="iori" /><img src="https://daganghalal.blob.core.windows.net/41557/Product/1000x1000__wash-1668584555286.jpg" alt="iori" /></div>
                                    <div className="banner-7-img-2 scroll-2"> <img src="https://solarpower.guide/solar-energy-insights/images/solar-panel-cleaning.jpg" alt="iori" /><img src="https://sublimecleaners.co.za/wp-content/uploads/2019/06/Upholstery-and-carpet-cleaning-Sandy-Springs-GA.jpg" alt="iori" /><img src="https://i2-prod.belfastlive.co.uk/incoming/article18393239.ece/ALTERNATES/s615/0_GettyImages-961012948.jpg" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-brand-1 box-why-trusted-11 mt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 mb-30">
                            <div className="grid grid-cols-5 gap-x-5">
                                <Image src="assets/imgs/template/icons/star.svg" alt="star" height={20} width={20} />
                                <Image src="assets/imgs/template/icons/star.svg" alt="star" height={20} width={20} />
                                <Image src="assets/imgs/template/icons/star.svg" alt="star" height={20} width={20} />
                                <Image src="assets/imgs/template/icons/star.svg" alt="star" height={20} width={20} />
                                <Image src="assets/imgs/template/icons/star.svg" alt="star" height={20} width={20} />
                            </div>
                            <h2 className="color-white mb-5">See why we are <br className="d-none d-lg-block" />trusted by <br className="d-none d-lg-block" />thousands</h2>
                        </div>
                        <div className="col-xl-7 col-lg-7 mb-30">
                            <p className="font-sm color-white mb-20">At Namami Cleans, we pride ourselves on delivering top-notch cleaning services to meet our customers' needs. With a focus on quality, convenience, and customer satisfaction, we have established ourselves as a reliable name in the cleaning industry.</p>
                            <div className="row">

                                <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                    <h2 className="color-white">9k+</h2>
                                    <p className="font-lg color-white">Satisfied Clients</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                    <h2 className="color-white">63+</h2>
                                    <p className="font-lg color-white">Projects Completed</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                    <h2 className="color-white">5+</h2>
                                    <p className="font-lg color-white">Service Locations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mt-50">
                <div className="container">
                    <div className="row align-items-start">
                        {/* Financial Management Section */}
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="card-radius-32">
                                <div className="card-info">
                                    <h3 className="color-brand-1 mb-20">Manage your Bookings</h3>
                                    <p className="font-md color-grey-500 mb-20">
                                        Track, manage, and control your bookings. The only booking tool you’ll ever need.
                                    </p>
                                    <div className="text-center">
                                        <Link href="#">
                                            <Image className="mr-10" src="/assets/imgs/template/appstore.png" alt="Download on App Store" height={50} width={150} />
                                        </Link>
                                        <Link href="#">
                                            <Image src="/assets/imgs/template/google-play.png" alt="Get it on Google Play" height={50} width={150} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-image">
                                    <img src="/assets/imgs/page/homepage7/box1.png" alt="Financial Management Illustration" />
                                </div>
                            </div>
                        </div>

                        {/* Automated Platform Section */}
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="card-radius-32 bg-4">
                                <div className="card-info">
                                    <h3 className="color-brand-1 mb-20">Automated Platform</h3>
                                    <p className="font-md color-grey-500 mb-20">
                                        Synchronize and automate all your bookings. Save time and effort.
                                    </p>
                                    <div className="mt-0">
                                        <Link className="btn btn-brand-1-small" href="/register">
                                            Get Started Now
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-image">
                                    <Image src="/assets/imgs/page/homepage7/box2.png" alt="Automated Platform Illustration" height={335} width={650} />
                                </div>
                            </div>
                        </div>

                        {/* Booking Steps Section */}
                        <div className="col-xl-12 mb-30">
                            <div className="card-radius-32 bg-grey-60">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="box-cover-pd">
                                            <div className="box-image-rd-30">
                                                <img className="w-100" src="/assets/imgs/page/homepage7/cute.png" alt="NC Booking Illustration" />
                                                <h4 className="color-brand-1 lbl-on-top">
                                                    Namami Cleans
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="box-cover-pd-2">
                                            <h2 className="color-brand-1 mb-30">How to book your <br className="d-none d-lg-block" />cleaning service</h2>
                                            {/* Step 1 */}
                                            <div className="item-number hover-up">
                                                <div className="num-ele">1</div>
                                                <div className="info-num">
                                                    <h5 className="color-brand-1 mb-15">Select Your Service</h5>
                                                    <p className="font-md color-grey-500">
                                                        Choose from our wide range of cleaning services, including car cleaning, sofa cleaning, water tank cleaning, and more, tailored to your needs.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Step 2 */}
                                            <div className="item-number hover-up">
                                                <div className="num-ele">2</div>
                                                <div className="info-num">
                                                    <h5 className="color-brand-1 mb-15">Book an Appointment</h5>
                                                    <p className="font-md color-grey-500">
                                                        Pick a convenient time and date for our team to visit and provide professional cleaning at your doorstep.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Step 3 */}
                                            <div className="item-number hover-up">
                                                <div className="num-ele">3</div>
                                                <div className="info-num">
                                                    <h5 className="color-brand-1 mb-15">Enjoy a Spotless Space</h5>
                                                    <p className="font-md color-grey-500">
                                                        Sit back and relax while we take care of your cleaning needs, leaving your space sparkling clean and refreshed.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="section mt-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-30">
                            <span className="title-line line-48">Effortless Cleaning</span>
                            <h2 className="color-brand-1 mt-10 mb-15">Cleaning made simple and convenient</h2>
                            <p className="font-md color-grey-400">With Namami Cleans, you can enjoy a wide range of professional cleaning services at your doorstep. From scheduling to service delivery, our process is designed to save you time and effort while ensuring exceptional results.</p>
                            <div className="mt-40">
                                <ul className="list-ticks">
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Easy online booking
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Customized cleaning solutions
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Eco-friendly products
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Professional and trained staff
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Timely and reliable service
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Transparent pricing
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-40 text-start">
                                <Link className="btn btn-brand-1 hover-up" href="/register">Book Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-7 text-center position-relative mb-30">
                            <img src="/assets/imgs/page/homepage7/cta.png" alt="Namami Cleans" />
                            <div className="box-number-business shape-3">
                                <div className="cardNumber bg-white">
                                    <h3>9K+</h3>
                                    <p className="font-xs color-brand-1">Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-30">
                            <div className="card-guide bg-4">
                                <div className="card-image">
                                    <img src="/assets/imgs/page/homepage7/payment.png" alt="Secure Payment" />
                                </div>
                                <div className="card-info">
                                    <h5 className="color-brand-1 mb-15">Hassle-Free Payments</h5>
                                    <p className="font-md color-grey-500">Experience secure and convenient payment options tailored to your needs. We prioritize your safety and ease.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-30">
                            <div className="card-guide bg-5">
                                <div className="card-image">
                                    <img src="/assets/imgs/page/homepage7/money.png" alt="Save Money" />
                                </div>
                                <div className="card-info">
                                    <h5 className="color-brand-1 mb-15">Affordable Services</h5>
                                    <p className="font-md color-grey-500">Get professional cleaning services at competitive prices without compromising on quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-30">
                            <div className="card-guide bg-7">
                                <div className="card-image">
                                    <img src="/assets/imgs/page/homepage7/support.png" alt="Quick Support" />
                                </div>
                                <div className="card-info">
                                    <h5 className="color-brand-1 mb-15">Dedicated Support</h5>
                                    <p className="font-md color-grey-500">Our team is ready to assist you promptly and ensure your satisfaction at every step.</p>
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
                            <h6 className="color-brand-1 mb-20">Our Leadership Team</h6>
                            <h2 className="color-brand-1 mb-50">Meet the visionaries behind Namami Cleans</h2>
                        </div>
                    </div>
                    <div className="row align-items-start">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-team mb-30">
                                <div className="card-image">
                                    <Image src="/bhuvneshCEO.jpg" alt="Bhuvnesh - CEO" height={200} width={240} />
                                </div>
                                <div className="card-info">
                                    <Link className="font-lg" href="#">Bhuvnesh</Link>
                                    <p className="font-xs color-grey-200 mb-10">CEO</p>
                                    <p className="font-xs color-grey-400">Leading Namami Cleans with a passion for sustainability and innovation, transforming how cleanliness is achieved.</p>
                                    <div className="list-socials">
                                        <Link className="icon-socials icon-linkedin" href="https://www.linkedin.com/in/bhuvnesh-singh-sikarwar-19104011b" />
                                        <Link className="icon-socials icon-instagram" href="https://www.instagram.com/bhuvneshsikarwar" />
                                        <Link className="icon-socials icon-facebook" href="https://www.facebook.com/share/1DfWybHxCQ/?mibextid=wwXIfr" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-team mb-30">
                                <div className="card-image">
                                    <Image src="/devanshCOO.jpg" alt="Devansh Smith - Finance Manager" height={200} width={240} />
                                </div>
                                <div className="card-info">
                                    <Link className="font-lg" href="#">Devansh</Link>
                                    <p className="font-xs color-grey-200 mb-10">COO</p>
                                    <p className="font-xs color-grey-400">Ensuring financial stability while supporting innovative cleaning solutions that align with our values.</p>
                                    <div className="list-socials">
                                        <Link className="icon-socials icon-linkedin" href="https://www.linkedin.com/in/devansh-sengar-8a9252303" />
                                        <Link className="icon-socials icon-instagram" href="https://www.instagram.com/zenith_pursuer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-team mb-30">
                                <div className="card-image">
                                    <Image src="/jatinCTO.png" alt="Jatin Kshatriya - Technology Manager" height={200} width={240}/>
                                </div>
                                <div className="card-info">
                                    <Link className="font-lg" href="#">Jatin Kshatriya</Link>
                                    <p className="font-xs color-grey-200 mb-10">CTO</p>
                                    <p className="font-xs color-grey-400">Driving technological advancements to ensure Namami Cleans stays ahead in the cleaning industry.</p>
                                    <div className="list-socials">
                                        <Link className="icon-socials icon-linkedin" href="https://www.linkedin.com/in/jatin-kshatriya-a9a879214" />
                                        <Link className="icon-socials icon-instagram" href="https://www.instagram.com/jatin_kshatriya/" />
                                        <Link className="icon-socials icon-twitter" href="https://x.com/kshatriya2821" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-bottom mt-30" />
            </section>
            <section className="section mt-50 bg-grey-60">
                <div className="container">
                    <div className="pt-120 pb-120">
                        <h2 className="color-brand-1">What our loving users are <br className="d-none d-lg-block" />saying about us</h2>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-2">
                                    <Testimonial2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-50" />
            {/* <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">From our blog </h2>
                                <p className="font-lg color-gray-500">Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.<br className="d-none d-lg-block" />Aenean vulputate sodales urna ut vestibulum</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><Link href="#" className="btn btn-default font-sm-bold pl-0">View All
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link></div>
                        </div>
                        <div className="row mt-55">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="/assets/imgs/page/homepage2/news1.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">Easy Ways to Make Money While You Sleep</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">Technology</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="/assets/imgs/page/homepage2/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">Tiktok video size guide: Everything you need to know</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">Marketting</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="/assets/imgs/page/homepage1/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">How to convert video to MP4 for free online</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">Media</Link><span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="/assets/imgs/page/homepage2/news3.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">5 fastest ways to increase search engine rankings</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">SEO</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            <section className="section mt-50">
                <div className="container">
                    <div className="box-newsletter box-newsletter-2">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7 m-auto text-center"><span className="font-lg color-brand-1">Newsletter</span>
                                <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                <p className="font-md color-grey-500">Do not miss the latest information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
                                <div className="form-newsletter mt-30">
                                    <form action="#">
                                        <input type="text" placeholder="Enter you mail .." />
                                        <button className="btn btn-submit-newsletter" type="submit">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
    );
};

export default HomePage7;
