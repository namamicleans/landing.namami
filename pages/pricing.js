import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";

const pagePrice = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>

      <Layout>
        <section className="section bg-plan-3 pt-110 pb-0">
          <div class="container">
            <div class="row align-items-end">
              <div class="col-lg-8 col-md-8">
                <h2 class="color-brand-1 mb-20">Choose The Best Plan</h2>
                <p class="font-lg color-gray-500">
                  Pick your plan. <br class="d-none d-lg-block" /> Change
                  whenever you want.
                </p>
              </div>
              <div class="col-lg-4 col-md-4 text-md-end text-start">
                <a class="btn btn-default font-sm-bold pl-0">
                  Compare plans
                  <svg
                    class="w-6 h-6 icon-16 ml-5"
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
            <div class="row mt-50">
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="card-plan hover-up">
                  <div class="card-image-plan">
                    <div class="icon-plan">
                      <img
                        src="assets/imgs/page/homepage1/free.svg"
                        alt="iori"
                      />
                    </div>
                    <div class="info-plan">
                      <h4 class="color-brand-1">One Time Plan</h4>
                      <p class="font-md color-grey-400">One-time service</p>
                    </div>
                  </div>
                  <div class="box-day-trial">
                    <span class="font-lg-bold color-brand-1">Rs. X,XXX</span>
                    <span class="font-md color-grey-500"> per month</span>
                  </div>
                  <div class="mt-30 mb-30">
                    <ul class="list-ticks list-ticks-2">
                      <li>Regular cleaning service (monthly/weekly)</li>
                      <li>Priority booking and exclusive offers</li>
                      <li>Discounted rates for long-term plans</li>
                      <li>Flexible scheduling options</li>
                      <li>
                        Access to all service categories (car cleaning, sofa,
                        etc.)
                      </li>
                    </ul>
                  </div>
                  <div class="mt-20">
                    <Link class="btn btn-brand-1-full hover-up" href="#">
                      Get Started
                      <svg
                        class="w-6 h-6 icon-16 ml-10"
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
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="card-plan hover-up">
                  <div class="card-image-plan">
                    <div class="icon-plan bg-1">
                      <img
                        src="assets/imgs/page/homepage1/standard.svg"
                        alt="iori"
                      />
                    </div>
                    <div class="info-plan">
                      <h4 class="color-brand-1">Monthly Plan</h4>
                      <p class="font-md color-grey-400">Regular service</p>
                    </div>
                  </div>
                  <div class="box-day-trial">
                    <span class="font-lg-bold color-brand-1">Rs. X,XXX</span>
                    <span class="font-md color-grey-500"> per month</span>
                  </div>
                  <div class="mt-30 mb-30">
                    <ul class="list-ticks list-ticks-2">
                      <li>Regular cleaning service (monthly/weekly)</li>
                      <li>Priority booking and exclusive offers</li>
                      <li>Discounted rates for long-term plans</li>
                      <li>Flexible scheduling options</li>
                      <li>
                        Access to all service categories (car cleaning, sofa,
                        etc.)
                      </li>
                    </ul>
                  </div>
                  <div class="mt-20">
                    <Link class="btn btn-brand-1-full hover-up" href="#">
                      Get Started
                      <svg
                        class="w-6 h-6 icon-16 ml-10"
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
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="card-plan card-plan-2 hover-up">
                  <div class="card-image-plan">
                    <div class="icon-plan bg-2">
                      <img
                        src="assets/imgs/page/homepage1/business.svg"
                        alt="iori"
                      />
                    </div>
                    <div class="info-plan">
                      <h4 class="color-brand-1">Annual Plan</h4>
                      <p class="font-md color-grey-400">With discount</p>
                    </div>
                  </div>
                  <div class="box-day-trial">
                    <span class="font-lg-bold color-brand-1">Rs. XX,XXX</span>
                    <span class="font-md color-grey-500"> per year</span>
                    <br />
                    <span class="font-xs color-grey-500">
                      Save X% with annual plan
                    </span>
                  </div>
                  <div class="mt-30 mb-30">
                    <ul class="list-ticks list-ticks-2">
                      <li>Regular cleaning service (monthly/weekly)</li>
                      <li>Priority booking and exclusive offers</li>
                      <li>Discounted rates for long-term plans</li>
                      <li>Flexible scheduling options</li>
                      <li>
                        Access to all service categories (car cleaning, sofa,
                        etc.)
                      </li>
                    </ul>
                  </div>
                  <div class="mt-20">
                    <Link class="btn btn-brand-1-full hover-up" href="#">
                      Get Started
                      <svg
                        class="w-6 h-6 icon-16 ml-10"
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-50">
          <div className="container">
            <div className="text-center">
              <h2 className="color-brand-1 mb-40">Compare Plans</h2>
            </div>
            <div className="table-responsive table-responsive-sm table-responsive-md">
              <table className="table table-compare">
                <thead>
                  <tr>
                    <th className="width-28 color-success">Data</th>
                    <th className="width-18">Free</th>
                    <th className="width-18">Standard</th>
                    <th className="width-18">Business</th>
                    <th className="width-18">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Requests Quota</td>
                    <td>50k Requests/Day</td>
                    <td>100k Requests/Day</td>
                    <td>500k Requests/Day</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Account Acess</td>
                    <td>35</td>
                    <td>85</td>
                    <td>120</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Service Analystic</td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Achive Nodes</td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Enriched APIs</td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Rosetta APIs</td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Priority Support Response</td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Dedicated Account Manager</td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom SLAs</td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-disable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        className="w-6 h-6 icon-18 icon-enable"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="section mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card-support">
                  <div className="card-image">
                    <div className="box-circle-img">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Cleaning Services Icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">
                      Eco-Friendly Cleaning
                    </h4>
                    <p className="font-md color-grey-500 mb-15">
                      We provide sustainable and eco-friendly cleaning solutions
                      to ensure a cleaner and greener environment for everyone.
                    </p>
                    <Link
                      className="btn btn-default pl-0 font-sm-bold hover-up"
                      href="#"
                    >
                      Learn More
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Right Arrow Icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-support">
                  <div className="card-image">
                    <div className="box-circle-img">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Support Icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">24/7 Service</h4>
                    <p className="font-md color-grey-500 mb-15">
                      Our team is available 24/7, ensuring that your spaces are
                      cleaned and maintained at any time convenient for you.
                    </p>
                    <Link
                      className="btn btn-default pl-0 font-sm-bold hover-up"
                      href="#"
                    >
                      Learn More
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Right Arrow Icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-support">
                  <div className="card-image">
                    <div className="box-circle-img">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Report Icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">
                      Weekly Cleanliness Reports
                    </h4>
                    <p className="font-md color-grey-500 mb-15">
                      Receive detailed weekly reports about the cleanliness and
                      maintenance of your space, so you stay informed and on
                      track.
                    </p>
                    <Link
                      className="btn btn-default pl-0 font-sm-bold hover-up"
                      href="#"
                    >
                      Learn More
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Right Arrow Icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="no-bg-faqs">
                    <section className="section pt-80 mb-30 bg-faqData">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="color-brand-1 mb-20">Frequently Asked Questions</h2>
                                    <p className="font-lg color-gray-500">Have questions about our cleaning services? Browse through our FAQs or reach out to our support team for assistance.</p>
                                </div>
                                <div className="col-lg-4 col-md-4 text-md-end text-start">
                                    <a className="btn btn-default font-sm-bold pl-0">Contact Us
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-50 mb-100">
                                <div className="col-xl-3 col-lg-4">
                                    <ul className="list-list-faqs nav nav-tabs" role="tablist">
                                        <li><a className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)} ><span>General Support</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                        <li><a className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><span>Cleaning Services</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                        <li><a className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}><span>Pricing & Plans</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                        <li><a className={activeIndex === 4 ? "active" : ""} onClick={() => handleOnClick(4)}><span>Health & Safety</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                        <li><a className={activeIndex === 5 ? "active" : ""} onClick={() => handleOnClick(5)}><span>Your Account</span>
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></li>
                                    </ul>
                                </div>
                                <div className="col-xl-9 col-lg-8">
                                    <div className="tab-content tab-content-slider">
                                        <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion />
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion
                                                faqData={[
                                                    { question: "What services do you provide?", answer: "We offer a wide range of cleaning services including car cleaning, water tank cleaning, sofa and carpet cleaning, solar panel cleaning, and more." },
                                                    { question: "Are your cleaning products eco-friendly?", answer: "Yes, we use environmentally safe and non-toxic cleaning products to ensure a safe environment for your family and the planet." },
                                                    { question: "Can I schedule a cleaning for my business?", answer: "Absolutely! We provide cleaning services for both residential and commercial spaces. Contact us for customized plans." },
                                                    { question: "How do I book a cleaning service?", answer: "You can easily book our services through our website or by calling our support team." }
                                                ]} />
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion
                                                faqData={[
                                                    { question: "How much does cleaning cost?", answer: "The cost depends on the type of service and the size of the area. Please contact us for a customized quote." },
                                                    { question: "Do you offer subscription plans?", answer: "Yes, we offer monthly and annual plans with discounted rates for regular services." }
                                                ]} />
                                        </div>
                                        <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion
                                                faqData={[
                                                    { question: "Are your cleaning teams trained in health and safety?", answer: "Yes, all our cleaning staff are thoroughly trained in safety protocols to ensure a clean and secure environment." },
                                                    { question: "Do you take any special precautions during the pandemic?", answer: "We follow strict hygiene protocols, including the use of masks, gloves, and sanitizers during all cleaning sessions." }
                                                ]} />
                                        </div>
                                        <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                            <Accordion />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom" />
                    </section>
                </div> */}

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

export default pagePrice;
