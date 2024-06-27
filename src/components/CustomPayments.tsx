import React, { useState } from "react";

const CustomPayments: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="w-full px-4 py-8 md:py-12 bg-white flex flex-col-reverse items-center gap-6">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row gap-8 items-start md:items-center pb-8">
        <div className="w-full flex flex-col gap-6 items-start">
          <div className="w-full flex flex-col gap-4 items-start">
            <h1 className="text-left text-2xl font-bold md:text-3xl lg:text-4xl">
              Build custom payments experiences with well-documented APIs
            </h1>
            <p className="text-left md:text-lg">
              Developers love our thorough, well-documented APIs that let you to
              build everything from simple weekend projects, to complex
              financial products serving hundreds of thousands of customers. If
              you can imagine it, you can build it with Paystack.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <ul className="w-full flex flex-col items-start gap-2">
              <li className="flex items-center justify-start gap-1">
                <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                  <img
                    src="https://paystack.com/assets/img/icon/check.svg"
                    alt="check"
                    className="w-3 h-3"
                  />
                </span>
                <p className="font-medium text-sm">
                  Collect one-time and recurring payments from your app or
                  website
                </p>
              </li>
              <li className="flex items-center justify-start gap-1">
                <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                  <img
                    src="https://paystack.com/assets/img/icon/check.svg"
                    alt="check"
                    className="w-3 h-3"
                  />
                </span>
                <p className="font-medium text-sm">Make instant transfers</p>
              </li>
              <li className="flex items-center justify-start gap-1">
                <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                  <img
                    src="https://paystack.com/assets/img/icon/check.svg"
                    alt="check"
                    className="w-3 h-3"
                  />
                </span>
                <p className="font-medium text-sm">Make instant transfers</p>
              </li>

              <li className="flex items-center justify-start gap-1">
                <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                  <img
                    src="https://paystack.com/assets/img/icon/check.svg"
                    alt="check"
                    className="w-3 h-3"
                  />
                </span>
                <p className="font-medium text-sm">
                  Verify the identity of customers
                </p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-start mt-2">
            <a
              className="flex items-center justify-start gap-2"
              onMouseOver={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}
            >
              {showMore ? (
                <img
                  src="p-transactions-hover.svg"
                  alt="check"
                  className="w-5 h-5"
                />
              ) : (
                <img src="p-transactions.svg" alt="check" className="w-5 h-5" />
              )}

              <p className="font-semibold text-[#3bb75e] text-sm">
                Paystack API Quickstart
              </p>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <img
            src={`https://assets.paystack.com/assets/img/content/_800x714_crop_center-center_82_line/Robust-Suite-of-APIs-Opt.png`}
            alt={"gif"}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomPayments;
