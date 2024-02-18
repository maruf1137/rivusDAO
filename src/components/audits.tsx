"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "swiper";
// import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import { Navigation } from "swiper/modules";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";

const Audits = () => {
  return (
    <div className="audits">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Audits"
          subtitle="RivusDAO is a Decentralized Autonomous Organization that decides on the key parameters
          of liquid staking protocols through the voting power of governance token ($RIVUS) tokens."
        />

        <div className="audits__row relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              765: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: ".bids-swiper-button-next",
              prevEl: ".bids-swiper-button-prev",
            }}
            className=" card-slider-4-columns !py-5">
            <SwiperSlide className="text-white">
              <div className="item card-box border border-white rounded-3xl p-8">
                <img
                  src="/images/audits-item-img-1.png"
                  alt=""
                  className="mb-3"
                />
                <h3 className="heading mb-2 !text-left">
                  Rivus On Polygon Security Audit PR# 69
                </h3>
                <p className="text mb-5">
                  RivusDAO is a Decentralized Autonomous Organization that
                  decides on the key parameters of liquid staking protocols
                  through the voting power of governance token ($RIVUS) tokens.
                </p>
                <a href="#" className="underline">
                  See Report
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-white">
              <div className="item card-box border border-white rounded-3xl p-8">
                <img
                  src="/images/audits-item-img-1.png"
                  alt=""
                  className="mb-3"
                />
                <h3 className="heading mb-2 !text-left">
                  Rivus On Polygon Security Audit PR# 69
                </h3>
                <p className="text mb-5">
                  RivusDAO is a Decentralized Autonomous Organization that
                  decides on the key parameters of liquid staking protocols
                  through the voting power of governance token ($RIVUS) tokens.
                </p>
                <a href="#" className="underline">
                  See Report
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-white">
              <div className="item card-box border border-white rounded-3xl p-8">
                <img
                  src="/images/audits-item-img-1.png"
                  alt=""
                  className="mb-3"
                />
                <h3 className="heading mb-2 !text-left">
                  Rivus On Polygon Security Audit PR# 69
                </h3>
                <p className="text mb-5">
                  RivusDAO is a Decentralized Autonomous Organization that
                  decides on the key parameters of liquid staking protocols
                  through the voting power of governance token ($RIVUS) tokens.
                </p>
                <a href="#" className="underline">
                  See Report
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-white">
              <div className="item card-box border border-white rounded-3xl p-8">
                <img
                  src="/images/audits-item-img-1.png"
                  alt=""
                  className="mb-3"
                />
                <h3 className="heading mb-2 !text-left">
                  Rivus On Polygon Security Audit PR# 69
                </h3>
                <p className="text mb-5">
                  RivusDAO is a Decentralized Autonomous Organization that
                  decides on the key parameters of liquid staking protocols
                  through the voting power of governance token ($RIVUS) tokens.
                </p>
                <a href="#" className="underline">
                  See Report
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-white">
              <div className="item card-box border border-white rounded-3xl p-8">
                <img
                  src="/images/audits-item-img-1.png"
                  alt=""
                  className="mb-3"
                />
                <h3 className="heading mb-2 !text-left">
                  Rivus On Polygon Security Audit PR# 69
                </h3>
                <p className="text mb-5">
                  RivusDAO is a Decentralized Autonomous Organization that
                  decides on the key parameters of liquid staking protocols
                  through the voting power of governance token ($RIVUS) tokens.
                </p>
                <a href="#" className="underline">
                  See Report
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <!-- Slider Navigation --> */}
          <div className="group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full sm:!-left-9 xl:!-left-20 after:hidden">
            <svg className="icon fill-black !h-full !w-full">
              <use xlinkHref="/icons.svg#icon-keyboard_arrow_left"></use>
            </svg>
          </div>
          <div className="group bids-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full sm:!-right-9 xl:!-right-20 after:hidden">
            <svg className="icon fill-black !h-full !w-full">
              <use xlinkHref="/icons.svg#icon-keyboard_arrow_right"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audits;
