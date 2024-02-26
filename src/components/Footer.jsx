import React from "react";
import BofA_rgb from "../images/BofA_rgb.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#00008B] p-4 w-full my-4">
      <div className="flex flex-wrap justify-center items-center my-2">
        <a
          target="_blank"
          href="https://locators.bankofamerica.com"
          className="text-white text-sm mr-1 cursor-pointer hover:underline"
        >
          Location |
        </a>
        <a
          target="_blank"
          href="https://www.bankofamerica.com/contactus/contactus.go?request_locale=en_US"
          className="text-white text-sm mr-1 cursor-pointer hover:underline"
        >
          Contact Us |
        </a>
        <a
          target="_blank"
          href="https://www.bankofamerica.com/help/overview.go?request_locale=en_US"
          className="text-white text-sm mr-1 cursor-pointer hover:underline"
        >
          Help |
        </a>
        <a
          target="_blank"
          href="https://www.bankofamerica.com/accessiblebanking/overview.go?request_locale=en_US"
          className="text-white text-sm mr-1 cursor-pointer hover:underline"
        >
          Accessible Banking |
        </a>
        <a
          target="_blank"
          href="http://careers.bankofamerica.com/"
          className="text-white text-sm mr-1 cursor-pointer hover:underline"
        >
          Career |
        </a>
        <a
          target="_blank"
          href="https://www.bankofamerica.com/security-center/privacy-overview/"
          className="text-white text-sm mr-1 cursor-pointer hover:underline"
        >
          Privacy |
        </a>
        <a
          target="_blank"
          href="https://www.bankofamerica.com/security-center/overview/"
          className="text-white text-sm mr-1 cursor-pointer hover:underline"
        >
          Security |
        </a>
        <p className="text-white text-sm mr-1 cursor-pointer hover:underline">
          McAfee |
        </p>
        <p className="text-white text-sm mr-1 cursor-pointer hover:underline">
          Sitemap |
        </p>
        <a
          href="javascript:void(0);"
          className="text-white text-sm mr-1 cursor-pointer hover:underline"
        >
          Advertising Practices |
        </a>
        <p className="text-white text-sm mr-1 cursor-pointer hover:underline">
          Website Feedback |
        </p>
        <p className="text-white text-sm mr-1 cursor-pointer hover:underline">
          View Full Online Banking Site
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white text-sm">Connect with us</p>
        <p className="text-white text-sm">Bank of America, N.A. Member FDIC.</p>
      </div>
      <div className="flex flex-col justify-center items-center my-2">
        <p className="text-white text-sm">Equal Housing Lender</p>
        <p className="text-white text-sm">
          © 2023 Bank of America Corporation.
        </p>
      </div>
    </div>
  );
};

export default Footer;
