/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

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
      img: "https://assets.paystack.com/assets/img/testimonial-authors/_200x200_crop_center-center_line/otto-williams.jpeg",
      logo: "https://assets.paystack.com/assets/img/logos/merchants/_800x255_crop_center-center_82_line/Visa-_-Color.png",
      role: "Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa",
      desc: "Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem",
    },
    {
      name: "Michael Siebel",
      img: "https://assets.paystack.com/assets/img/testimonial-authors/_400x400_crop_center-center_82_line/michael-siebel-headshot.jpeg",
      logo: "https://assets.paystack.com/assets/img/logos/merchants/_257x257_crop_center-center_line/ycombinator-logo.png",
      role: "CEO, Partner, Y Combinator",
      desc: "As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.",
    },
  ];

  const containerStyle = css`
    position: relative;
    width: 100%;
    padding: 2rem 1rem;
    background-color: #f9fbfc;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  `;

  const backgroundStyle = css`
    position: absolute;
    inset: 0;
    background-position: 300px 0;
    opacity: 0.1;
    background-repeat: no-repeat;
    background-image: url(https://paystack.com/assets/img/patterns/circular-pattern.png);
  `;

  const contentStyle = css`
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    padding-bottom: 2rem;
    z-index: 20;
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
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const cardStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  `;

  const imgStyle = css`
    width: auto;
    height: 20px;
  `;

  const profileImgStyle = css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  `;

  return (
    <div css={containerStyle}>
      <div css={backgroundStyle}></div>
      <div css={contentStyle}>
        <div css={headerStyle}>
          <h1>Backed by strong global partners</h1>
          <p>
            Paystack is backed by notable investors as well as some of the best
            payments companies on the planet.
          </p>
        </div>
        <div css={gridStyle}>
          {cardData.map((card, index) => (
            <div css={cardStyle} key={index}>
              <img
                src={card.logo}
                alt={card.name}
                css={imgStyle}
              />
              <p>{card.desc}</p>
              <div className="flex items-center gap-2">
                <img
                  src={card.img}
                  alt={card.name}
                  css={profileImgStyle}
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
