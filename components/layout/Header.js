import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isSearchToggled, setSearchToggled] = useState(false);
  const [isLanguageToggled, setLanguageToggled] = useState(false);
  const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
  const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={`${scroll ? "header sticky-bar stick" : "header sticky-bar"} ${addClass}`}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img alt="Ecom" src="/namami_logo.png" height={50} />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
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
                <div
                  className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                  onClick={() => {
                    handleOpen();
                    handleRemove();
                  }}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <div className="header-right">
                <div className="d-inline-block box-search-top">
                  <div
                    className={
                      isSearchToggled
                        ? "form-search-top d-block"
                        : " form-search-top d-none"
                    }
                  >
                    <form action="#">
                      <input
                        className="input-search"
                        type="text"
                        placeholder="Search..."
                      />
                      <button className="btn btn-search">
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="d-none d-sm-inline-block">
                  <Link className="btn btn-brand-1 hover-up" href="register">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
