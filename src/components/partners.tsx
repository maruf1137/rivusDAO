import React from "react";
import SectionHeading from "./sectionHeading";

const Partners = () => {
  return (
    <div className="partners">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Partners"
          subtitle="RivusDAO is a Decentralized Autonomous Organization that decides on the key parameters
          of liquid staking protocols through the voting power of governance token ($RIVUS) tokens."
        />

        <div className="partners__row grid grid-cols-6 gap-5 mt-8">
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
