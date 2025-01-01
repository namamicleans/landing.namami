import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <Link className="d-flex" href="/">
                <img alt="Ecom" src="/namami_logo.png" height={25} />
              </Link>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <Tabs
                  defaultActiveKey="menu"
                  id="fill-tab-example"
                  className="nav nav-tabs nav-tabs-mobile mt-25"
                  fill
                >
                  <Tab eventKey="menu" title="Menu">
                    <div className="tab-pane">
                      <nav className="mt-15">
                        <ul className="mobile-menu font-heading">
                          <li className="">
                            <Link className="" href="/">
                              Home
                            </Link>
                          </li>
                          <li className="">
                            <Link className="" href="/service">
                              Service
                            </Link>
                          </li>
                          <li className="">
                            <Link className="" href="/about">
                              About
                            </Link>
                          </li>

                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link href="/pricing">Pricing</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Tab>
                  <Tab eventKey="account" title="Account">
                    <nav className="mt-15">
                      <ul className="mobile-menu font-heading">
                        <li>
                          <Link className="active" href="login">
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link href="#">Work Preferences</Link>
                        </li>
                        <li>
                          <Link href="#">My Boosted Shots</Link>
                        </li>
                        <li>
                          <Link href="#">My Collections</Link>
                        </li>
                        <li>
                          <Link href="#">Account Settings</Link>
                        </li>
                        <li>
                          <Link href="#">Go Pro</Link>
                        </li>
                        <li>
                          <Link href="/register">Sign Out</Link>
                        </li>
                      </ul>
                    </nav>
                  </Tab>
                  <Tab eventKey="notification" title="Notification">
                    <p className="font-sm-bold color-brand-1 mt-30">Today</p>
                    <div className="notifications-item">
                      <div className="item-notify">
                        <div className="item-image">
                          <img
                            src="assets/imgs/template/user1.png"
                            alt="iori"
                          />
                        </div>
                        <div className="item-info">
                          <p className="color-grey-500 font-xs">
                            <strong className="font-xs-bold">Steven Job</strong>
                            like started a poll in your post “How to be a good
                            trader in 2023”
                          </p>
                        </div>
                        <div className="item-time">
                          <span className="color-grey-500 font-xs">
                            Just now
                          </span>
                        </div>
                      </div>
                      <div className="item-notify">
                        <div className="item-image">
                          <img
                            src="assets/imgs/template/user2.png"
                            alt="iori"
                          />
                        </div>
                        <div className="item-info">
                          <p className="color-grey-500 font-xs">
                            <strong className="font-xs-bold">Steven Job</strong>
                            like started a poll in your post “How to be a good
                            trader in 2023”
                          </p>
                        </div>
                        <div className="item-time">
                          <span className="color-grey-500 font-xs">
                            Just now
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="font-sm-bold color-brand-1 mt-30">
                      Yesterday
                    </p>
                    <div className="notifications-item">
                      <div className="item-notify">
                        <div className="item-image">
                          <img
                            src="assets/imgs/template/user3.png"
                            alt="iori"
                          />
                        </div>
                        <div className="item-info">
                          <p className="color-grey-500 font-xs">
                            <strong className="font-xs-bold">Steven Job</strong>
                            like started a poll in your post “How to be a good
                            trader in 2023”
                          </p>
                        </div>
                        <div className="item-time">
                          <span className="color-grey-500 font-xs">
                            Just now
                          </span>
                        </div>
                      </div>
                      <div className="item-notify">
                        <div className="item-image">
                          <img
                            src="assets/imgs/template/user4.png"
                            alt="iori"
                          />
                        </div>
                        <div className="item-info">
                          <p className="color-grey-500 font-xs">
                            <strong className="font-xs-bold">Steven Job</strong>
                            like started a poll in your post “How to be a good
                            trader in 2023”
                          </p>
                        </div>
                        <div className="item-time">
                          <span className="color-grey-500 font-xs">
                            Just now
                          </span>
                        </div>
                      </div>
                      <div className="item-notify">
                        <div className="item-image">
                          <img
                            src="assets/imgs/template/user5.png"
                            alt="iori"
                          />
                        </div>
                        <div className="item-info">
                          <p className="color-grey-500 font-xs">
                            <strong className="font-xs-bold">Steven Job</strong>
                            like started a poll in your post “How to be a good
                            trader in 2023”
                          </p>
                        </div>
                        <div className="item-time">
                          <span className="color-grey-500 font-xs">
                            Just now
                          </span>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
              <div className="site-copyright color-grey-400 mt-0">
                <div className="box-download-app">
                  <p className="font-xs color-grey-400 mb-25">
                    Download our Apps and get extra 15% Discount on your first
                    Order…!
                  </p>
                  <div className="mb-25">
                    <Link className="mr-10" href="#">
                      <img src="assets/imgs/template/appstore.png" alt="iori" />
                    </Link>
                    <Link href="#">
                      <img
                        src="assets/imgs/template/google-play.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <p className="font-sm color-grey-400 mt-20 mb-10">
                    Secured Payment Gateways
                  </p>
                  <img
                    src="assets/imgs/template/payment-method.png"
                    alt="iori"
                  />
                </div>
                <div className="mb-0">Copyright 2024 © Namami Cleans</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
