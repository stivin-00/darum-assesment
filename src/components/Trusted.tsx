/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';
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

  const containerStyle = css`
    position: relative;
    width: 100%;
    padding: 2rem 1rem;
    background-color: #eaf6fc;
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
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    background-image: url(https://paystack.com/assets/img/patterns/checked-pattern-blue.png);
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

  const cardsContainerStyle = css`
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

  return (
    <div css={containerStyle}>
      <div css={backgroundStyle}></div>
      <div css={contentStyle}>
        <div css={headerStyle}>
          <h1>Trusted by 200,000+ businesses</h1>
          <p>
            Thousands of organizations of all sizes trust Paystack to grow their
            business.
          </p>
        </div>
        <div css={cardsContainerStyle}>
          {cardData.map((card, index) => (
            <TrustedCards key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
