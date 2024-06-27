import React from "react";

const Benefits: React.FC = () => {
  return (
    <div className="w-full px-4 py-8 md:py-12 bg-white flex flex-col-reverse items-center gap-6 ">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row-reverse gap-8 items-start md:items-center pb-8">
        <div className="w-full md:w-1/2 flex flex-col gap-8 items-start">
          <div className="w-full  flex flex-col gap-4 items-start">
            <h1 className="text-left text-2xl font-bold md:text-3xl lg:text-4xl">
              Protect yourself and your customers with advanced fraud detection
            </h1>
            <p className="text-left md:text-lg">
              Paystack’s combination of automated and manual fraud systems
              protect you from fraudulent transactions and associated chargeback
              claims.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 items-start">
            <h1 className="text-left text-2xl font-bold md:text-3xl lg:text-4xl">
              Detailed reporting for accounting, reconciliation, and audits
            </h1>
            <p className="text-left md:text-lg">
              Understand your customers’ purchase patterns and do easy
              reconciliations with a robust data Dashboard and easy exports.
            </p>
          </div>
        </div>
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <video autoPlay muted loop playsInline className="w-full">
            <source
              src="https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
