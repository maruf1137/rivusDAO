import React from "react";

const SectionHeading = ({ title = "", subtitle = "" }) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-white">{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
