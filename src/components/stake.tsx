import React from "react";
import SectionHeading from "./sectionHeading";

const Stake = () => {
  return (
    <div className="stake">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Stake"
          subtitle="RivusDAO is a Decentralized Autonomous Organization that decides on the key parameters
          of liquid staking protocols through the voting power of governance token ($RIVUS) tokens"
        />
        <div className="max-w-2xl mx-auto">
          <div className="system__row grid sm:grid-cols-2 mt-10 gap-5 lg:gap-10">
            <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
              <div className="iconbox h-20 w-20 flex justify-center items-center rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
                {/* <img
                src="https://logosarchive.com/wp-content/uploads/2022/02/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              /> */}
                <svg className="h-10 w-10 fill-white">
                  <use xlinkHref="/icons.svg#icon-ethereum"></use>
                </svg>
              </div>
              <h3 className="heading mb-2 text-center">3.3%</h3>
              <p className="text text-center mb-5">APR</p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2">
                Stake Now
              </a>
            </div>
            <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
              <div className="iconbox h-20 w-20 flex justify-center items-center rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
                {/* <img
                src="https://logosarchive.com/wp-content/uploads/2022/02/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              /> */}
                <svg className="h-10 w-10 fill-white">
                  <use xlinkHref="/icons.svg#icon-ethereum"></use>
                </svg>
              </div>
              <h3 className="heading mb-2 text-center">4.3%</h3>
              <p className="text text-center mb-5">APR</p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2">
                Stake Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
