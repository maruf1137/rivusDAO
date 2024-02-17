import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent fixed top-0 left-0 w-full">
      <div className="navbar-wrapper flex justify-between items-center gap-2 py-3 px-10 max-w-[1400px] mx-auto ">
        <Link href="/">
          <img
            src="https://assets-global.website-files.com/65c6576b083478977379c665/65c659cb2449c97477da317a_rivus-header-logo.svg"
            alt="LOGO"
          />
        </Link>
        {/* DAO Ecosystem Audits Partners */}

        <ul className="navbar-list flex items-center gap-3">
          <li className="link">
            <a href="#">Statistics</a>
          </li>
          <li className="link">
            <a href="#">Networks</a>
          </li>
          <li className="link">
            <a href="#">Statistics</a>
          </li>
          <li className="link">
            <a href="#">Statistics</a>
          </li>
          <li className="link">
            <a href="#">Statistics</a>
          </li>
        </ul>

        <a
          href="#"
          className="inline-flex items-center px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2">
          <svg className="icon icon-x h-5 w-5">
            <use xlinkHref="/icons.svg#icon-x"></use>
          </svg>
          Join Twitter
        </a>
      </div>
    </div>
  );
};

export default Navbar;
