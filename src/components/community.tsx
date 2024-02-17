import React from "react";
import SectionHeading from "./sectionHeading";

const Community = () => {
  return (
    <div className="community">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Community"
          subtitle="RivusDAO is a Decentralized Autonomous Organization that decides on the key parameters
          of liquid staking protocols through the voting power of governance token ($RIVUS) tokens."
        />

        <div className="max-w-3xl mx-auto">
          <div className="system__row grid sm:grid-cols-2 mt-10 gap-5">
            <a
              href="#"
              target="_blank"
              className="card-box flex items-center gap-5 border border-white rounded-2xl p-5">
              <div className="iconbox h-14 w-14 rounded-full border border-[#03c7ff] flex items-center justify-center">
                <img
                  src="https://assets-global.website-files.com/65c6576b083478977379c665/65c80a3aa7aae6a637639607_telegram-community-icon.svg"
                  alt=""
                  className="h-6 w-6"
                />
                {/* <svg className="icon">
                  <use xlinkHref="/icons.svg#icon-paper-plane"></use>
                </svg> */}
              </div>
              <div className="content">
                <h4 className="heading mb-2">Telegram</h4>
                <p className="text text-sm">Join chat</p>
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              className="card-box flex items-center gap-5 border border-white rounded-2xl p-5">
              <div className="iconbox h-14 w-14 rounded-full border border-[#03c7ff] flex items-center justify-center">
                <img
                  src="https://assets-global.website-files.com/65c6576b083478977379c665/65c80a4208c3583fde07daf7_twitter-community-icon.svg"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
              <div className="content">
                <h4 className="heading mb-2">Twitter</h4>
                <p className="text text-sm">Follow us</p>
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              className="card-box flex items-center gap-5 border border-white rounded-2xl p-5">
              <div className="iconbox h-14 w-14 rounded-full border border-[#03c7ff] flex items-center justify-center">
                <img
                  src="https://assets-global.website-files.com/65c6576b083478977379c665/65c80a4afcf5246259faebff_discord-community-icon.svg"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
              <div className="content">
                <h4 className="heading mb-2">Discord</h4>
                <p className="text text-sm">Join community</p>
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              className="card-box flex items-center gap-5 border border-white rounded-2xl p-5">
              <div className="iconbox h-14 w-14 rounded-full border border-[#03c7ff] flex items-center justify-center">
                <img
                  src="https://assets-global.website-files.com/65c6576b083478977379c665/65c80a552a38163bab809af0_contact-us-community-icon.svg"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
              <div className="content">
                <h4 className="heading mb-2">Contact Us</h4>
                <p className="text text-sm">Get in touch</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
