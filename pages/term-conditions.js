import Link from "next/link";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";

const pageTerm = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>

      <Layout>
        <div className="section pt-40 content-term">
          <div className="box-bg-term" />
          <div className="container">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link href="#">
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="term-conditions">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="content-main mt-50">
              <div className="text-center">
                <h2 className="color-brand-1 mb-10">Terms and Conditions</h2>
                <div className="box-image-head mt-50 mb-50">
                  <img
                    className="bd-rd8"
                    src="assets/imgs/page/term/img.png"
                    alt="terms"
                  />
                </div>
              </div>
              <div className="row mt-70">
                <div className="col-lg-1 col-md-1" />
                <div className="col-lg-2 col-md-3">
                  <h6 className="color-brand-1 mb-15">Table of Contents</h6>
                  <ul className="list-terms">
                    <li>
                      <Link href="#cancellation">Cancellation Policy</Link>
                    </li>
                    <li>
                      <Link href="#refund">Refund Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-8 col-md-7">
                  <h4 className="color-brand-1 mb-20" id="cancellation">
                    Cancellation Policy
                  </h4>
                  <p className="font-md color-grey-500 mb-30">
                    Cancellations can be made up to 24 hours before the
                    scheduled service. After this period, a cancellation fee of
                    Rs. XXX will apply. To cancel a service, please contact us
                    through our customer support page or email us directly.
                  </p>
                  <h4 className="color-brand-1 mb-20" id="refund">
                    Refund Policy
                  </h4>
                  <p className="font-md color-grey-500 mb-30">
                    Refunds are available for services cancelled within 24 hours
                    of booking. After this period, no refund will be issued, but
                    rescheduling may be possible. Refunds are processed within
                    7-10 business days. For refund requests, please provide your
                    booking details and reason for cancellation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section mt-50">
          <div className="container">
            <div className="box-newsletter box-newsletter-2">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 m-auto text-center">
                  <span className="font-lg color-brand-1">Newsletter</span>
                  <h2 className="color-brand-1 mb-15 mt-5">
                    Subscribe to our Newsletter
                  </h2>
                  <p className="font-md color-grey-500">
                    Stay updated with the latest information and offers. By
                    subscribing, you agree to our Terms & Conditions.
                  </p>
                  <div className="form-newsletter mt-30">
                    <form action="#">
                      <input type="text" placeholder="Enter your email..." />
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

export default pageTerm;
