import React from "react";

const EasyPayment: React.FC = () => {
  return (
    <div className="w-full px-4 py-8 md:py-12 bg-white flex flex-col-reverse items-center gap-6">
      <div className="w-full max-w-7xl flex flex-col items-start md:items-center pb-8">
        <div className="w-full flex flex-col gap-4 items-start">
          <h1 className="text-left text-3xl font-bold md:text-4xl lg:text-5xl">
            Simple, easy payments
          </h1>
          <p className="text-left md:text-lg lg:text-xl">
            Building a business is hard. Getting paid shouldn't be.
          </p>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default EasyPayment;
