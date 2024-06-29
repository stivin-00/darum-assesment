import React from "react";

interface CardData {
  name: string;
  img: string;
  logo: string;
  role: string;
  desc: string;
}

const Partners: React.FC = () => {
  const cardData: CardData[] = [
    {
      name: "Patrick Collison",
      img: "https://assets.paystack.com/%20assets/img/testimonial-authors/_400x400_crop_center-center_82_line/patrick-collison-headshot.jpg",
      logo: "https://assets.paystack.com/assets/img/logos/merchants/_300x124_crop_center-center_60_line/Stripe.png",
      role: "CEO, Stripe",
      desc: "Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    },
    {
      name: "Otto Williams",
      img: "https://assets.paystack.com/ assets/img/testimonial-authors/_200x200_crop_center-center_line/otto-williams.jpeg",
      logo: "https://assets.paystack.com/assets/img/logos/merchants/_800x255_crop_center-center_82_line/Visa-_-Color.png",
      role: "Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa",
      desc: "Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem",
    },
    {
      name: "Patrick Collison",
      img: "https://assets.paystack.com/ assets/img/testimonial-authors/_400x400_crop_center-center_82_line/michael-siebel-headshot.jpeg",
      logo: "https://assets.paystack.com/assets/img/logos/merchants/_257x257_crop_center-center_line/ycombinator-logo.png",
      role: "CEO, Partner, Y Combinator",
      desc: "As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.",
    },
  ];

  return (
    <div className="relative w-full px-4 py-8 bg-[#f9fbfc] flex flex-col-reverse items-center gap-6">
      <div
        className="absolute inset-0 bg-pos-300-0 opacity-10 bg-no-repeat"
        style={{
          backgroundImage: `url(https://paystack.com/assets/img/patterns/circular-pattern.png)`,
        }}
      ></div>
      <div className="w-full max-w-7xl flex flex-col gap-8 items-start pb-8 z-20">
        <div className="w-full md:w-3/5 flex flex-col gap-4 items-start py-3">
          <h1 className="text-left text-3xl md:text-4xl font-bold">
            Backed by strong global partners
          </h1>
          <p className="text-left md:text-lg">
            Paystack is backed by notable investors as well as some of the best
            payments companies on the planet.
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-4 items-center justify-between md:grid md:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              className="flex flex-col items-start flex-grow gap-6 p-6 rounded-lg bg-white shadow-sm md:col-span-1"
              key={index}
            >
              <img
                src={card.logo}
                alt={card.name}
                className="w-auto h-5"
              />
              <p>{card.desc}</p>
              <div className="flex items-center gap-2">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col items-start gap-1">
                  <h1 className="font-semibold">{card.name}</h1>
                  <p>{card.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
