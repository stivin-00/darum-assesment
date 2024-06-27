import React from "react";

interface CardData {
  img: string;
}

const Powering: React.FC = () => {
  const cardData: CardData[] = [
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Air-Peace-Stack-Blue_200305_154114.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/FilmHouse-Stack-Blue_200304_153641.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Piggyvest-Stack-Blue_200304_153734.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ibom-Air-Stack-Blue_200304_154259.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/kuda-Stack-Blue_200304_154345.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ariiya-Stack-Blue_200304_155307.svg",
    },
  ];

  const cardData2: CardData[] = [
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Air-Peace-Stack-Blue_200305_154114.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/FilmHouse-Stack-Blue_200304_153641.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Piggyvest-Stack-Blue_200304_153734.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ibom-Air-Stack-Blue_200304_154259.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/kuda-Stack-Blue_200304_154345.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ariiya-Stack-Blue_200304_155307.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Air-Peace-Stack-Blue_200305_154114.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/FilmHouse-Stack-Blue_200304_153641.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Piggyvest-Stack-Blue_200304_153734.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ibom-Air-Stack-Blue_200304_154259.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/kuda-Stack-Blue_200304_154345.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ariiya-Stack-Blue_200304_155307.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Air-Peace-Stack-Blue_200305_154114.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/FilmHouse-Stack-Blue_200304_153641.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Piggyvest-Stack-Blue_200304_153734.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ibom-Air-Stack-Blue_200304_154259.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/kuda-Stack-Blue_200304_154345.svg",
    },
    {
      img: "https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ariiya-Stack-Blue_200304_155307.svg",
    },
  ];

  return (
    <div className="relative w-full px-4 py-8 md:py-12 bg-[#fff] flex flex-col-reverse items-center gap-6 z-20">
      <div className="w-full max-w-7xl flex flex-col gap-8 items-start pb-8">
        <div className="w-full md:w-3/5 flex flex-col gap-4 items-start py-3">
          <h1 className="text-left text-3xl md:text-4xl font-bold">
            Powering growth for amazing businesses
          </h1>
          <p className="text-left md:text-lg">
            Paystack is a growth engine for a new generation of innovative,
            forward-looking organizations operating in Africa.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-6 items-center justify-start">
          {cardData.map((card, index) => (
            <div className="flex md:overflow-y-hidden items-start" key={index}>
              <img
                src={card.img}
                alt={`img-${index}`}
                className="w-auto h-[20px] object-contain"
              />
            </div>
          ))}
          {cardData2.map((card, index) => (
            <div className="hidden md:flex items-start col-span-1" key={index}>
              <img
                src={card.img}
                alt={`img-${index}`}
                className="w-auto h-[20px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Powering;
