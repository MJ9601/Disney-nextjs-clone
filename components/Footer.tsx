import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 pt-4 pb-6 py-6">
      <div className="flex flex-col md:flex-row items-center md:items-start container justify-center md:justify-around">
        <img src="/images/logo.png" alt="" className="w-48 lg:w-96" />
        <div className="flex items-start justify-around gap-5 w-[55%]">
          <div className="flex flex-col gap-3 items-start justify-start pt-4">
            <p className="plink">Disney</p>
            <p className="plink">Marvel</p>
            <p className="plink">Pixar</p>
            <p className="plink">Star wars</p>
            <p className="plink">National geographic</p>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start pt-4">
            <p className="plink">Home</p>
            <p className="plink">Contact</p>
            <p className="plink">Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
