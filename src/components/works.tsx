import React from "react";
import SectionHeading from "./sectionHeading";

const Works = () => {
  return (
    <div className="works">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="How Rivus Works"
          subtitle="Understand how liquid staking works for your crypto tokens with
          Rivus"
        />

        {/* for big devices */}
        <div className="works__row mt-8 flex-col gap-10 hidden sm:flex">
          <div className="flex items-center justify-between gap-5 lg:gap-8">
            <div className="step-block-image">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65cce8a1f6d804bb097facc2_HRW%20-%201.svg"
                loading="lazy"
                alt=""
                className="image-27"
              />
            </div>
            <div className="step-block-number">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65c76d3b48b17a6f46a5b1a5_step-1-number.svg"
                loading="lazy"
                alt=""
                className="step-number"
              />
            </div>
            <div className="step-block-text">
              <h4 className="heading step-block-text-heading">
                Stake your tokens
              </h4>
              <div className="step-block-text-description">
                Stake any amount of your tokens to access daily staking rewards.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 lg:gap-8">
            <div className="step-block-text">
              <h4 className="heading step-block-text-heading">
                Receive your stTokens
              </h4>
              <div className="step-block-text-description">
                Receive liquid tokens and start to receive rewards in real time.
              </div>
            </div>
            <div className="step-block-number">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65c76effe59f3578cacdac16_step-2-number.svg"
                loading="lazy"
                alt=""
                className="step-number"
              />
            </div>
            <div className="step-block-image">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65cce8afd13f6fd922a3b787_HRW%20-%202.svg"
                loading="lazy"
                alt=""
                className="image-27"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 lg:gap-8">
            <div className="step-block-image">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65cce8ba013230b1238ffb44_HRW%20-%203.svg"
                loading="lazy"
                alt=""
                className="image-27"
              />
            </div>
            <div className="step-block-number">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65c76feb3673a9347453cc1a_step-3-number.svg"
                loading="lazy"
                alt=""
                className="step-number"
              />
            </div>
            <div className="step-block-text">
              <h4 className="heading step-block-text-heading">Use in DeFi</h4>
              <div className="step-block-text-description">
                Use your stTokens across DeFi to compound more to your daily
                staked rewards.
              </div>
            </div>
          </div>
        </div>

        {/* for mobile */}
        <div className="works__row mt-8 flex flex-col gap-10 sm:hidden">
          <div className="flex flex-col items-center justify-between gap-5 lg:gap-8">
            <div className="step-block-number">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65c76d3b48b17a6f46a5b1a5_step-1-number.svg"
                loading="lazy"
                alt=""
                className="step-number"
              />
            </div>
            <div className="step-block-text">
              <h4 className="heading step-block-text-heading text-center">
                Stake your tokens
              </h4>
              <div className="step-block-text-description text-center">
                Stake any amount of your tokens to access daily staking rewards.
              </div>
            </div>
            <div className="step-block-image">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65cce8a1f6d804bb097facc2_HRW%20-%201.svg"
                loading="lazy"
                alt=""
                className="image-27"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 lg:gap-8">
            <div className="step-block-number">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65c76effe59f3578cacdac16_step-2-number.svg"
                loading="lazy"
                alt=""
                className="step-number"
              />
            </div>
            <div className="step-block-text">
              <h4 className="heading step-block-text-heading text-center">
                Receive your stTokens
              </h4>
              <div className="step-block-text-description text-center">
                Receive liquid tokens and start to receive rewards in real time.
              </div>
            </div>
            <div className="step-block-image">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65cce8afd13f6fd922a3b787_HRW%20-%202.svg"
                loading="lazy"
                alt=""
                className="image-27"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 lg:gap-8">
            <div className="step-block-number">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65c76feb3673a9347453cc1a_step-3-number.svg"
                loading="lazy"
                alt=""
                className="step-number"
              />
            </div>
            <div className="step-block-text">
              <h4 className="heading step-block-text-heading text-center">
                Use in DeFi
              </h4>
              <div className="step-block-text-description text-center">
                Use your stTokens across DeFi to compound more to your daily
                staked rewards.
              </div>
            </div>
            <div className="step-block-image">
              <img
                src="https://assets-global.website-files.com/65c6576b083478977379c665/65cce8ba013230b1238ffb44_HRW%20-%203.svg"
                loading="lazy"
                alt=""
                className="image-27"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
