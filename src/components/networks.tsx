import React from "react";

const Networks = () => {
  return (
    <div className="networks">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Supported Networks
          </h2>
          <p className="mt-4 text-white">
            Rivus enables you to stake tokens for numerous networks. Choose a
            network below to get started.
          </p>
        </div>
        <div className="items grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="item">
            <a href="#" className="wrapper flow-root rounded-lg p-6 relative">
              <a href="#" className="absolute top-5 right-3">
                <svg className="icon h-8 w-8 fill-gray-500">
                  <use xlinkHref="/icons.svg#icon-arrow-right"></use>
                </svg>
              </a>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Ethereum
              </h3>
              <p className="text-base">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.
              </p>
              <svg className="icon h-96 w-auto py-10 fill-gray-500">
                <use xlinkHref="/icons.svg#icon-ethereum"></use>
              </svg>
              <div className="flex justify-center items-center gap-5">
                <div>
                  <p className="text-lg font-semibold text-center">3.3%</p>
                  <p className="text-sm font-light text-gray-200 text-center">
                    APR
                  </p>
                </div>
                <div className="line"></div>
                <div>
                  <p className="text-lg font-semibold text-center">$22M</p>
                  <p className="text-sm font-light text-gray-200 text-center">
                    Staked
                  </p>
                </div>
              </div>
            </a>
            <div className="btns flex items-center gap-5 mt-5">
              <a
                href="#"
                className="px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2 w-full text-center hover:border-white hover:bg-transparent hover:text-white transition">
                Stake
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2 w-full text-center hover:border-white hover:bg-transparent hover:text-white transition">
                Learn More
              </a>
            </div>
          </div>
          <div className="item">
            <a href="#" className="wrapper flow-root rounded-lg p-6 relative">
              <a href="#" className="absolute top-5 right-3">
                <svg className="icon h-8 w-8 fill-gray-500">
                  <use xlinkHref="/icons.svg#icon-arrow-right"></use>
                </svg>
              </a>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Polygon
              </h3>
              <p className="text-base">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.
              </p>
              <svg className="icon h-96 w-auto py-10 fill-gray-500">
                <use xlinkHref="/icons.svg#icon-ethereum"></use>
              </svg>
              <div className="flex justify-center items-center gap-5">
                <div>
                  <p className="text-lg font-semibold text-center">3.3%</p>
                  <p className="text-sm font-light text-gray-200 text-center">
                    APR
                  </p>
                </div>
                <div className="line"></div>
                <div>
                  <p className="text-lg font-semibold text-center">$22M</p>
                  <p className="text-sm font-light text-gray-200 text-center">
                    Staked
                  </p>
                </div>
              </div>
            </a>
            <div className="btns flex items-center gap-5 mt-5">
              <a
                href="#"
                className="px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2 w-full text-center hover:border-white hover:bg-transparent hover:text-white transition">
                Stake
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2 w-full text-center hover:border-white hover:bg-transparent hover:text-white transition">
                Learn More
              </a>
            </div>
          </div>
          <div className="item">
            <a href="#" className="wrapper flow-root rounded-lg p-6 relative">
              <a href="#" className="absolute top-5 right-3">
                <svg className="icon h-8 w-8 fill-gray-500">
                  <use xlinkHref="/icons.svg#icon-arrow-right"></use>
                </svg>
              </a>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Ethereum
              </h3>
              <p className="text-base">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.
              </p>
              <svg className="icon h-96 w-auto py-10 fill-gray-500">
                <use xlinkHref="/icons.svg#icon-bitcoin"></use>
              </svg>
              <div className="flex justify-center items-center gap-5">
                <div>
                  <p className="text-lg font-semibold text-center">3.3%</p>
                  <p className="text-sm font-light text-gray-200 text-center">
                    APR
                  </p>
                </div>
                <div className="line"></div>
                <div>
                  <p className="text-lg font-semibold text-center">$22M</p>
                  <p className="text-sm font-light text-gray-200 text-center">
                    Staked
                  </p>
                </div>
              </div>
            </a>
            <div className="btns flex items-center gap-5 mt-5">
              <a
                href="#"
                className="px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2 w-full text-center hover:border-white hover:bg-transparent hover:text-white transition">
                Stake
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2 w-full text-center hover:border-white hover:bg-transparent hover:text-white transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networks;
