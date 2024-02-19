import React from "react";
import SectionHeading from "./sectionHeading";

const RivusDAO = () => {
  return (
    <div className="rivusDAO" id="dao">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="RivusDAO"
          subtitle="RivusDAO is a Decentralized Autonomous Organization that decides on the key parameters
of liquid staking protocols through the voting power of governance token ($RIVUS) tokens."
        />

        <div className="rivusDAO__row grid grid-cols-12 gap-5 mt-8">
          <div className="item border border-white rounded-lg p-10 col-span-12">
            <figure className="img flex justify-center pb-5 w-full h-[350px] items-center border-[15px] border-black rounded-2xl">
              {/* <img
                src="/images/rivusdao-img.png"
                alt=""
                className="rounded-b-lg"
              /> */}
              <h2 className="heading">DAO UI Screenshot Here</h2>
            </figure>
            <h3 className="heading mb-3 text-center">Earn Rewards</h3>
            <p className="text text-center">
              Explore how the decisions in Rivus governance process are made.
            </p>
          </div>
          <div className="item border border-white rounded-lg p-10 col-span-12 sm:col-span-12 lg:col-span-4">
            <figure className="img flex justify-center pt-10 pb-20">
              <img src="/images/earn-rewards-image.svg" alt="" />
            </figure>
            <h3 className="heading mb-3 text-center">Earn Rewards</h3>
            <p className="text text-center">
              Explore how the decisions in Rivus governance process are made.
            </p>
          </div>
          <div className="item border border-white rounded-lg p-10 col-span-12 sm:col-span-6 lg:col-span-4">
            <figure className="img flex justify-center pt-10 pb-20">
              <img src="/images/network-security-image.svg" alt="" />
            </figure>
            <h3 className="heading mb-3 text-center">Network Security</h3>
            <p className="text text-center">
              Explore how the decisions in Rivus governance process are made.
            </p>
          </div>
          <div className="item border border-white rounded-lg p-10 col-span-12 sm:col-span-6 lg:col-span-4">
            <figure className="img flex justify-center pt-10 pb-20">
              <img src="/images/maintain-liquidity-image.svg" alt="" />
            </figure>
            <h3 className="heading mb-3 text-center">Maintain Liquidity</h3>
            <p className="text text-center">
              Explore how the decisions in Rivus governance process are made.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="card-box flex flex-col lg:flex-row justify-center items-center gap-8 border border-white rounded-md p-8">
          <div className="iconbox h-14 w-14 rounded-full border border-white flex items-center justify-center">
            <svg className="icon">
              <use xlinkHref="/icons.svg#icon-paper-plane"></use>
            </svg>
          </div>
          <div className="content">
            <h2 className="heading ">Governance Notification Bot</h2>
            <p className="text">
              Stay up to date with Rivus governance developments.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black bg-white gap-2">
            Get Notified
          </a>
        </div>
      </div>
    </div>
  );
};

export default RivusDAO;
