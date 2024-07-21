/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

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

  const containerStyle = css`
    position: relative;
    width: 100%;
    padding: 2rem 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;
    z-index: 20;

    @media (min-width: 768px) {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  `;

  const contentStyle = css`
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    padding-bottom: 2rem;
  `;

  const headerStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem 0;

    h1 {
      text-align: left;
      font-size: 2.25rem;
      font-weight: bold;

      @media (min-width: 768px) {
        width: 60%;
        font-size: 2.5rem;
      }
    }

    p {
      text-align: left;
      font-size: 1rem;

      @media (min-width: 768px) {
        width: 60%;
        font-size: 1.125rem;
      }
    }
  `;

  const gridStyle = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    align-items: center;
    justify-content: start;

    @media (min-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }
  `;

  const imgStyle = css`
    width: auto;
    height: 20px;
    object-fit: contain;
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <div css={headerStyle}>
          <h1>Powering growth for amazing businesses</h1>
          <p>
            Paystack is a growth engine for a new generation of innovative,
            forward-looking organizations operating in Africa.
          </p>
        </div>
        <div css={gridStyle}>
          {cardData.map((card, index) => (
            <div key={index}>
              <img src={card.img} alt={`img-${index}`} css={imgStyle} />
            </div>
          ))}
          {cardData2.map((card, index) => (
            <div className="hidden md:flex items-start col-span-1" key={index}>
              <img src={card.img} alt={`img-${index}`} css={imgStyle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Powering;
