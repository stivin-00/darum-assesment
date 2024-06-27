import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface Link {
  name: string;
}

interface NavItem {
  tittle?: string;
  links?: Link[];
}

interface SubNavBarProps {
  data: NavItem[];
  setIsOpen: (isOpen: boolean) => void;
}

export const SubNavBar: React.FC<SubNavBarProps> = ({ data, setIsOpen }) => {
  return (
    <nav className="w-full  flex flex-col lg:hidden items-start">
      <div className="w-full flex flex-col items-start gap-4">
        <button
          onClick={() => setIsOpen(false)}
          className="w-full flex  items-center cursor-pointer gap-2 my-3"
        >
          <MdKeyboardArrowLeft className="w-5 h-5 -ml-1 text-[#576f7f]" />
          <p className="font-[500] cursor-pointer text-sm text-[#576f7f]">
            Back
          </p>
        </button>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {item.tittle && (
              <p className="font-[500] -mb-2 mt-2 cursor-pointer text-xs text-[#576f7f]">
                {item.tittle}
              </p>
            )}
            {item.links &&
              item.links.map((link, linkIndex) => (
                <p
                  key={linkIndex}
                  className="font-[500] cursor-pointer text-sm hover:text-[#0ba4db]"
                >
                  {link.name}
                </p>
              ))}
          </React.Fragment>
        ))}
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
      </div>
    </nav>
  );
};
