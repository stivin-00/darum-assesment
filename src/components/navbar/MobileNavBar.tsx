import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { SubNavBar } from "./SubNavBar";
import { developersLinks, learnLinks, supportLinks, whyChoosePaystackLinks } from "./data";

interface Link {
  name: string;
}

interface NavItem {
  tittle?: string;
  links?: Link[];
}

export const MobileNavBar: React.FC = () => {
  const [data, setData] = useState<NavItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavClick = (links: NavItem[]) => {
    setData(links);
    setIsOpen(true);
  };

  return (
    <nav className="w-full absolute top-12 left-0 z-50 min-h-[60vh] flex flex-col lg:hidden items-center py-8 px-4 nav-bg">
      {/* nav list */}
      <div
        className={`w-full flex flex-col items-center gap-4 transition-transform duration-500 ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className="w-full flex justify-between items-center cursor-pointer text-left"
          onClick={() => handleNavClick(whyChoosePaystackLinks)}
        >
          <p className="font-[500] cursor-pointer text-sm hover:text-[#0ba4db]">
            Why Paystack
          </p>
          <MdPlayArrow className="w-3 h-2" color="#011b33" />
        </div>
        <div className="w-full flex justify-between items-center cursor-pointer text-left">
          <p className="font-[500] cursor-pointer text-sm hover:text-[#0ba4db]">
            Customers
          </p>
        </div>
        <div className="w-full flex justify-between items-center cursor-pointer text-left">
          <p className="font-[500] cursor-pointer text-sm hover:text-[#0ba4db]">
            Pricing
          </p>
        </div>
        <div className="w-full flex justify-between items-center cursor-pointer text-left"
        onClick={() => handleNavClick(learnLinks)}>
          <p className="font-[500] cursor-pointer text-sm hover:text-[#0ba4db]">
            Learn
          </p>
          <MdPlayArrow className="w-3 h-2" color="#011b33" />
        </div>
        <div className="w-full flex justify-between items-center cursor-pointer text-left"
        onClick={() => handleNavClick(developersLinks)}>
          <p className="font-[500] cursor-pointer text-sm hover:text-[#0ba4db]">
            Developers
          </p>
          <MdPlayArrow className="w-3 h-2" color="#011b33" />
        </div>
        <div className="w-full flex justify-between items-center cursor-pointer text-left"
        onClick={() => handleNavClick(supportLinks)}>
          <p className="font-[500] cursor-pointer text-sm hover:text-[#0ba4db]">
            Support
          </p>
          <MdPlayArrow className="w-3 h-2" color="#011b33" />
        </div>
        <div className="w-full flex justify-between items-center text-left">
          <p className="font-semibold text-[#3bb75e] cursor-pointer">Login</p>
        </div>
        <button className="w-full bg-[#3bb75e] mt-4 px-4 py-3 text-sm text-white rounded font-semibold transition-all duration-300 hover:bg-[#3f9457]">
          Create a free account
        </button>
      </div>

      {/* sub nav */}
      <div
        className={`transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full absolute top-4 z-50 min-h-[60vh] flex flex-col lg:hidden items-center pb-8 px-4 bg-[#f1fef4f2]`}
      >
        <SubNavBar data={data} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};
