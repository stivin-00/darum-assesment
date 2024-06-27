import React, { useState } from "react";

interface Card {
  img: string;
  title: string;
  desc: string;
}

interface TrustedCardsProps {
  card: Card;
  index: number;
}

const TrustedCards: React.FC<TrustedCardsProps> = ({ card, index }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="flex flex-col items-start flex-grow gap-4 p-6 rounded-lg bg-white shadow-sm md:col-span-1"
      key={index}
    >
      <img src={card.img} alt={card.title} className="w-[150px] h-auto" />
      <h1 className="text-lg font-semibold">
        Paystack for <br />
        {card.title}
      </h1>
      <p>{card.desc}</p>
      <a
        className="flex items-center justify-start gap-2 "
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        {show ? (
          <img
            src="/p-transactions-hover.svg"
            alt="check"
            className="w-5 h-5 transition-all duration-300 "
          />
        ) : (
          <img
            src="/p-transactions.svg"
            alt="check"
            className="w-5 h-5 transition-all duration-300 "
          />
        )}

        <p className="font-semibold text-sm">Learn more</p>
      </a>
    </div>
  );
};

export default TrustedCards;
