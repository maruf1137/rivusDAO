import React from "react";
import SectionHeading from "./sectionHeading";

const System = () => {
  return (
    <div className="system" id="ecosystem">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Eco System"
          subtitle="Rivus empowers stakers to put their staked tokens to use. Explore apps and services integrated with Rivus."
        />

        <div className="system__row grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 lg:gap-10">
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">Metamask</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">Curve</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">AAVE</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">1inch</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">Ledger</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">Balancer</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">Uniswap</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">MakerDAO</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
          <div className="item card-box border border-white rounded-3xl p-5 flex flex-col justify-center items-center">
            <div className="iconbox h-20 w-2h-20 rounded-full bg-black border-2 border-[#03c7ff] mb-5 p-5">
              <img
                src="/images/Metamask-icon.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h3 className="heading mb-2 text-center">More Soon...</h3>
            <p className="text text-center">
              A crypto wallet and gateway to blockchain apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
