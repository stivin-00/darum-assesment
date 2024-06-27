import React, { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { MobileNavBar } from "./MobileNavBar";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="sticky top-0 w-full flex flex-col z-50">
      {/* mobile */}
      <nav className="sticky top-0 w-full flex lg:hidden items-center justify-between py-4 px-4 nav-bg z-50">
        <div className="flex items-center justify-center">
          <img
            className="w-[120px]"
            src="/Paystack_Logo.png"
            alt="Paystack Logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center"
          >
            {isOpen ? (
              <MdClose className="w-6 h-6 text-[#011b33]" />
            ) : (
              <HiMiniBars3 className="w-6 h-6 text-[#011b33]" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && <MobileNavBar />}
    </div>
  );
};

export default Nav;
