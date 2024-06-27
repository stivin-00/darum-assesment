import React from "react";
import TrustedCards from "../common/TrustedCards";

interface Card {
  img: string;
  title: string;
  desc: string;
}

const Trusted: React.FC = () => {
  const cardData: Card[] = [
    {
      img: "https://assets.paystack.com/assets/img/content/For-International-Businesses_180823_165939.svg",
      title: "Global Brands",
      desc: "We help global brands accept payments from across Africa",
    },
    {
      img: "https://assets.paystack.com/assets/img/content/For-Entrepreneurs_180823_165709.svg",
      title: "Entrepreneurs",
      desc: "From startup to scale-up, we can support you at every stage of your businesses’ growth",
    },
    {
      img: "https://assets.paystack.com/assets/img/content/For-Large-Corporations_180823_165502.svg",
      title: "Large Organizations",
      desc: "Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.",
    },
  ];
  return (
    <div className="relative w-full px-4 py-8 md:py-12 bg-[#eaf6fc] flex flex-col-reverse items-center gap-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 "
        style={{
          backgroundImage: `url(https://paystack.com/assets/img/patterns/checked-pattern-blue.png)`,
        }}
      ></div>
      <div className="w-full max-w-7xl flex flex-col gap-8 items-start pb-8 z-20">
        <div className="w-full flex flex-col gap-4 items-start py-3">
          <h1 className="text-left md:w-3/5 text-4xl font-bold">
            Trusted by 200,000+ businesses
          </h1>
          <p className="text-left md:w-3/5 md:text-lg">
            Thousands of organizations of all sizes trust Paystack to grow their
            business.
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-4 items-ceter justify-between md:grid md:grid-cols-3">
          {cardData.map((card, index) => (
            <TrustedCards key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
