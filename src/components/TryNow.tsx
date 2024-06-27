import React from "react";

export const TryNow: React.FC = () => {
  return (
    <div className="relative w-full px-4 py-8 md:py-12 bg-[#fff] flex flex-col-reverse items-center gap-6">
      <div
        className="absolute inset-0 bg-cover bg-pos-0-50 opacity-20 "
        style={{
          backgroundImage: `url(https://paystack.com/assets/img/patterns/curved-pattern.png)`,
        }}
      ></div>
      <div className="w-full max-w-7xl flex flex-col gap-8 items-start pb-8 z-20">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 md:gap-6 items-center py-3">
          <div className="w-full md:w-[50%] flex-col items-center md:items-start gap-4">
            <p className="w-full md:text-start text-center md:text-lg">Try Paystack Now</p>
            <h1 className="w-full text-center md:text-start text-3xl md:text-4xl font-bold">
              Start accepting payments in just 30 minutes
            </h1>
          </div>
          <button className="bg-[#3bb75e] md:min-w-[200px] px-4 py-3 mt-4 text-sm text-white rounded font-semibold transition-all duration-300 hover:bg-[#3f9457] hover:transform hover:translate-y-1">
            Create a free account
          </button>
        </div>
      </div>
    </div>
  );
};
