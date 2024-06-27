import React from "react";
import { FlyoutLink } from "./flyouts/FlyoutLink";
import {
  DevelopersContent,
  LearnContent,
  SupportContent,
  WhyPaystackContent,
} from "./flyouts/Content";
import { FlyoutFlag } from "./flyouts/FlyoutFlag";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 w-full md:flex flex-col z-50 hidden  items-center">
      {/* mobile */}
      <nav className="sticky top-0 w-full hidden md:flex items-center justify-between py-4 px-[4%] nav-bg z-50">
        <div className="flex items-center gap-6">
          <img
            className="w-[120px]"
            src="/Paystack_Logo.png"
            alt="Paystack Logo"
          />

          <ul className="flex items-center gap-4">
            <FlyoutLink href="#" FlyoutContent={WhyPaystackContent}>
              Why Paystack
            </FlyoutLink>
            <a
              href="#"
              className="flex items-center text-[#011b33] hover:text-[#0ba4db] font-medium transition-colors duration-300"
            >
              <span className="">Customers</span>
            </a>
            <a
              href="#"
              className="flex items-center text-[#011b33] hover:text-[#0ba4db] font-medium transition-colors duration-300"
            >
              <span className="">Pricing</span>
            </a>
            <FlyoutLink href="#" FlyoutContent={LearnContent}>
              Learn
            </FlyoutLink>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-6">
          <ul className="flex items-center gap-4">
            <FlyoutLink href="#" FlyoutContent={DevelopersContent}>
              Developers
            </FlyoutLink>
            <FlyoutLink href="#" FlyoutContent={SupportContent}>
              Support
            </FlyoutLink>
            <a
              href="#"
              className="flex items-center text-[#011b33] hover:text-[#0ba4db] font-medium transition-colors duration-300"
            >
              <span className="">Login</span>
            </a>
          </ul>
          <button className="bg-[#3bb75e] px-3 py-2 text-sm md:text-base text-white rounded font-semibold transition-all duration-300 hover:bg-[#3f9457] hover:transform hover:-translate-y-[1px]">
            Create free account
          </button>
          <FlyoutFlag/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
