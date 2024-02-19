"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [mblNav, setMblNav] = useState<boolean>(false);

  const showMblNav = (): void => {
    setMblNav(true);
  };
  const hideMblNav = (): void => {
    setMblNav(false);
  };
  return (
    <div className="navbar z-10 fixed top-0 left-0 w-full bg-black">
      <div className="navbar-wrapper flex justify-between items-center gap-2 py-3 px-10 max-w-[1400px] mx-auto ">
        <Link href="/">
          <img src="images/logo.svg" alt="LOGO" />
        </Link>
        {/* DAO Ecosystem Audits Partners */}

        <div
          className={`main-nav !w-full sm:!w-1/2 lg:!w-auto ${
            mblNav && "show-nev"
          }`}>
          <button
            type="button"
            className="inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-transparent lg:hidden"
            onClick={hideMblNav}>
            <svg className="icon !h-6 !w-6 absolute top-8 left-8">
              <use xlinkHref="/icons.svg#icon-clear"></use>
            </svg>
          </button>
          <ul className="navbar-list flex items-center gap-3">
            <li className="link" onClick={hideMblNav}>
              <a href="#stetistics">Statistics</a>
            </li>
            <li className="link" onClick={hideMblNav}>
              <a href="#networks">Networks</a>
            </li>
            <li className="link" onClick={hideMblNav}>
              <a href="#works">How It Works</a>
            </li>
            <li className="link" onClick={hideMblNav}>
              <a href="#dao">DAO</a>
            </li>
            <li className="link" onClick={hideMblNav}>
              <a href="#ecosystem">Ecosystem</a>
            </li>
            <li className="link" onClick={hideMblNav}>
              <a href="#audits">Audits</a>
            </li>
            <li className="link" onClick={hideMblNav}>
              <a href="#partners">Partners</a>
            </li>
          </ul>
          <a
            href="#"
            className="flex justify-center items-center px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2 sm:hidden mt-8">
            <svg className="icon icon-x h-5 w-5 !fill-current">
              <use xlinkHref="/icons.svg#icon-x"></use>
            </svg>
            Join Twitter
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="sm:flex items-center px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2 hidden">
            <svg className="icon icon-x h-5 w-5 !fill-current">
              <use xlinkHref="/icons.svg#icon-x"></use>
            </svg>
            Join Twitter
          </a>
          <button
            type="button"
            className="inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-transparent lg:hidden"
            onClick={showMblNav}>
            <svg className="icon !h-6 !w-6">
              <use xlinkHref="/icons.svg#icon-bars"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
