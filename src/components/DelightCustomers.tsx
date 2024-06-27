import React, { useState } from "react";

const DelightCustomers: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="w-full px-4 py-8 md:py-12 bg-white flex flex-col-reverse items-center gap-6">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row-reverse gap-8 items-start md:items-center pb-8">
        <div className="w-full flex flex-col gap-4 items-start">
          <div className="w-full flex flex-col gap-4 items-start">
            <div className="w-full flex flex-col gap-4 items-start">
              <h1 className="text-left text-2xl font-bold md:text-3xl lg:text-4xl">
                Delight customers with a seamless payments experience
              </h1>
              <p className="text-left md:text-lg">
                Give your customers the gift of modern, frictionless, painless
                payments. Integrate Paystack once and let your customers pay you
                however they want.
              </p>
            </div>
            <div className="w-full flex">
              <ul className="w-full flex flex-col items-start gap-2">
                <li className="flex items-center justify-start gap-1">
                  <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                    <img
                      src="https://paystack.com/assets/img/icon/check.svg"
                      alt="check"
                      className="w-3 h-3"
                    />
                  </span>
                  <p className="font-medium text-sm">Card</p>
                </li>
                <li className="flex items-center justify-start gap-1">
                  <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                    <img
                      src="https://paystack.com/assets/img/icon/check.svg"
                      alt="check"
                      className="w-3 h-3"
                    />
                  </span>
                  <p className="font-medium text-sm">Bank Account</p>
                </li>
                <li className="flex items-center justify-start gap-1">
                  <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                    <img
                      src="https://paystack.com/assets/img/icon/check.svg"
                      alt="check"
                      className="w-3 h-3"
                    />
                  </span>
                  <p className="font-medium text-sm">Bank Transfer</p>
                </li>
                <li className="flex items-center justify-start gap-1">
                  <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                    <img
                      src="https://paystack.com/assets/img/icon/check.svg"
                      alt="check"
                      className="w-3 h-3"
                    />
                  </span>
                  <p className="font-medium text-sm">USSD</p>
                </li>
                <li className="flex items-center justify-start gap-1">
                  <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                    <img
                      src="https://paystack.com/assets/img/icon/check.svg"
                      alt="check"
                      className="w-3 h-3"
                    />
                  </span>
                  <p className="font-medium text-sm">Apple Pay</p>
                </li>

                <li className="flex items-center justify-start gap-1">
                  <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                    <img
                      src="https://paystack.com/assets/img/icon/check.svg"
                      alt="check"
                      className="w-3 h-3"
                    />
                  </span>
                  <p className="font-medium text-sm">Mobile Money</p>
                </li>
                <li className="flex items-center justify-start gap-1">
                  <span className="bg-[#f1fef4] text-[] rounded-sm flex items-center justify-center p-2">
                    <img
                      src="https://paystack.com/assets/img/icon/check.svg"
                      alt="check"
                      className="w-3 h-3"
                    />
                  </span>
                  <p className="font-medium text-sm">POS</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 items-start">
            <div className="w-full flex flex-col gap-4 items-start">
              <h1 className="text-left text-2xl font-bold md:text-3xl lg:text-4xl">
                Enjoy phenomenal transaction success rates
              </h1>
              <p className="text-left md:text-lg">
                We automatically route payments through the most optimal
                channels, ensuring the highest transaction success rates in the
                market.
              </p>
            </div>
            <div className="flex items-center justify-start">
              <a
                className="flex items-center justify-start gap-2"
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
              >
                {show ? (
                  <img
                    src="p-transactions-hover.svg"
                    alt="check"
                    className="w-5 h-5"
                  />
                ) : (
                  <img
                    src="p-transactions.svg"
                    alt="check"
                    className="w-5 h-5"
                  />
                )}

                <p className="font-semibold text-[#3bb75e] text-sm">
                  Find out how we achieve high success rates
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <img
            src={`https://assets.paystack.com/assets/img/content/Collect-Payments-for-Multiple-Channels-1.1.gif`}
            alt={"gif"}
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default DelightCustomers;
