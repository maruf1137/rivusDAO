import React from "react";

const Hero = () => {
  return (
    <div className="hero py-20">
      <div className="hero-wrapper max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl">
                Unlock the{" "}
                <a href="#" className="underline pr-2">
                  full potential
                </a>
                of your $TAO with RivusDAO’s Liquid Staking
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Seamlessly integrate staking rewards while maintaining liquidity
                and flexibility for your digital assets.
              </p>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;