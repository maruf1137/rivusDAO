import React from "react";
import SectionHeading from "./sectionHeading";

const Partners = () => {
  return (
    <div className="partners" id="partners">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Partners"
          subtitle="RivusDAO is a Decentralized Autonomous Organization that decides on the key parameters
          of liquid staking protocols through the voting power of governance token ($RIVUS) tokens."
        />

        <div className="partners__row grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 mt-8">
          <div className="item">
            <img src="/images/partner-img-1.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-2.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-3.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-4.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-5.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-6.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-4.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-5.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-6.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-3.png" alt="" />
          </div>
          <div className="item">
            <img src="/images/partner-img-2.png" alt="" />
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
