import React from "react";
import Seeff from "../assets/CompanyLogos/Seeff.svg";
import RealInvestors from "../assets/CompanyLogos/RealtorsInt.svg";
import Icon from "../assets/CompanyLogos/Icon.svg";
import PamGolding from "../assets/CompanyLogos/PamGolding.svg";

const Affiliate = () => {
  return (
    <div
      className="py-28 bg-gray-900 h-screen flex items-center"
      id="Affiliates"
    >
      <div className="max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 justify-between items-center md:flex md:px-8 lg:flex-nowrap">
        <div className="max-w-xl space-y-3">
          <h3 className="text-cyan-400 text-sm font-semibold">AFFILIATES</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Trusted by the best real estate companies and world-class teams
          </p>
          <p className="text-gray-300">
            Market Ready is associated with South Africa's leading real estate
            companies and have built a long-lasting relationship throughout the
            years
          </p>
        </div>
        <div className="flex-none mt-12 text-white lg:mt-0">
          <ul className="grid grid-cols-2 gap-2 items-center justify-center [&>*]:bg-gray-700 [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-14">
            {/* LOGO 1 */}

            <li className="items-center">
              <img src={RealInvestors} alt="" className="h-16 w-full" />
            </li>
            <li className="items-center">
              <img src={Icon} alt="Icon Logo" className="h-16 w-full" />
            </li>
            <li className="items-center">
              <img src={Seeff} alt="" className="h-16 w-full" />
            </li>
            <li className="items-center">
              <img src={PamGolding} alt="" className="h-16 w-full" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
