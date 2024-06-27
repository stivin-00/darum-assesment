import React from "react";
import {
  developersLinks,
  learnLinks,
  supportLinks,
  whyChoosePaystackLinks,
} from "../data";

export const WhyPaystackContent: React.FC = () => {
  return (
    <div className="shadow-xl flex rounded-lg w-full ">
      <div className="bg-white p-10 flex flex-col items-center gap-5 ">
        {whyChoosePaystackLinks[0].links.map((link, index) => (
          <div
            className="flex items-center gap-4 group cursor-pointer"
            key={index}
          >
            <div className="h-[60px] w-[60px] rounded-full bg-[#011b33] grid place-items-center overflow-hidden">
              <img
                src={link.img}
                alt="Paystack logo"
                className="w-10 h-auto transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="flex flex-col items-start gap-1 w-[215px]">
              <h3 className="font-semibold transition-colors duration-300 group-hover:text-[#0ba4db]">
                {link.name}
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#f9fbfc] p-10 flex flex-col gap-8 items-start">
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-[#3d5e69] font-medium mb-2">
            {whyChoosePaystackLinks[1].tittle}
          </p>
          {whyChoosePaystackLinks[1].links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="block text-base text-[#011b33] font-medium w-[150px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-[#3d5e69] font-medium mb-2">
            {whyChoosePaystackLinks[2].tittle}
          </p>
          {whyChoosePaystackLinks[2].links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="block text-base text-[#011b33] font-medium w-[150px] transition-colors duration-300 hover:text-[#0ba4db]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LearnContent = () => {
  return (
    <div className="shadow-xl flex rounded-lg w-full ">
      <div className="bg-white p-10 flex flex-col items-center gap-5 ">
        {learnLinks[0].links.map((link, index) => (
          <div
            className="flex items-center gap-4 group cursor-pointer"
            key={index}
          >
            <div className="h-[60px] w-[60px] rounded-full bg-[#011b33] grid place-items-center overflow-hidden">
              <img
                src={link.img}
                alt="Paystack logo"
                className="w-10 h-auto transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="flex flex-col items-start gap-1 w-[215px]">
              <h3 className="font-semibold transition-colors duration-300 group-hover:text-[#0ba4db]">
                {link.name}
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#f9fbfc] p-10 flex flex-col gap-8 items-start">
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-[#3d5e69] font-medium mb-2">
            {learnLinks[1].tittle}
          </p>
          {learnLinks[1].links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="block text-base text-[#011b33] font-medium w-[150px] transition-colors duration-300 hover:text-[#0ba4db]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const DevelopersContent = () => {
  return (
    <div className="w-[200px] bg-white p-6 shadow-xl rounded-md">
      {developersLinks.map((item, index) => (
        <div className="mb-3 space-y-3 " key={index}>
          {item.links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="relative flex items-center text-[#011b33] hover:text-[#0ba4db] font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export const SupportContent = () => {
  return (
    <div className="w-[200px] bg-white p-6 shadow-xl rounded-md">
      {supportLinks.map((item, index) => (
        <div className="mb-3 space-y-3 " key={index}>
          {item.links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="relative flex items-center text-[#011b33] hover:text-[#0ba4db] font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};
