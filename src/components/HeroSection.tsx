/** @jsxImportSource @emotion/react */
import React from "react";
import BackgroundSVG from "../assets/bg.svg";
import { BsFillPlayFill } from "react-icons/bs";
import { IoPlayCircle } from "react-icons/io5";
import { css } from "@emotion/react";

const HeroSection: React.FC = () => {
  return (
    <div css={containerStyle}>
      <div css={bgStyle}></div>
      <div css={contentStyle}>
        <div css={textContentStyle}>
          <h1>Modern online and offline payments for Africa</h1>
          <p>
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </p>
          <div css={buttonContainerStyle}>
            <button css={ctaButtonStyle}>Create a free account</button>
            <button css={contactButtonStyle}>or Contact Sales</button>
          </div>
        </div>
      </div>
      {/* bottom Hero */}
      <div css={bottomHeroContainerStyle}>
        <div css={bottomHeroContentStyle}>
          <div css={trustedByStyle}>
            <p>Trusted by over 200,000 businesses</p>
            <div css={logoContainerStyle}>
              <img
                src="https://assets.paystack.com/assets/img/logos/merchants/Dominos-Plain.svg"
                className="h-[15px] w-auto"
                alt="Dominos"
              />
              <img
                src="https://assets.paystack.com/assets/img/logos/merchants/mtn-group-grayscale.svg"
                className="h-[15px] w-auto"
                alt="MTN Group"
              />
              <img
                src="https://assets.paystack.com/assets/img/logos/merchants/Bolt-Stack-Blue_200304_153027.svg"
                className="h-[15px] w-auto"
                alt="Bolt"
              />
              <img
                src="https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg"
                className="h-[15px] w-auto"
                alt="Axa Mansard"
              />
            </div>
          </div>

          <div css={videoContainerStyle}>
            <p>
              Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss
              working with Paystack
            </p>
            <IoPlayCircle
              color="#0ba4db"
              className="w-12 h-12 hidden md:block"
            />
            <button css={playButtonStyle}>
              <BsFillPlayFill color="#0ba4db" className="w-6 h-6" />
              Play Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = css`
  width: 100%;
  position: relative;
  top: 0;
  background-color: #f1fef4f2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const bgStyle = css`
  position: absolute;
  top: 60px;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 60%;
  background-image: url(${BackgroundSVG});
  background-size: cover;
  background-position: center;
  z-index: 10;
`;

const contentStyle = css`
  width: 100%;
  max-width: 90rem;
  position: relative;
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 30;

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 4rem;
  }
`;

const textContentStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    max-width: 50%;
    gap: 1.5rem;
  }

  h1 {
    text-align: left;
    font-size: 1.875rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }

  p {
    text-align: left;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

const buttonContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ctaButtonStyle = css`
  background-color: #3bb75e;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: white;
  border-radius: 0.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #3f9457;
    transform: translateY(-1px);
  }
`;

const contactButtonStyle = css`
  color: #3bb75e;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`;

const bottomHeroContainerStyle = css`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 90rem;
  }
`;

const bottomHeroContentStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 4rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const trustedByStyle = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    max-width: 50%;
  }

  p {
    font-size: 0.875rem;
  }
`;

const logoContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const videoContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dfe1e0;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 768px) {
    max-width: 45%;
  }

  p {
    font-weight: 600;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      text-align: right;
    }
  }
`;

const playButtonStyle = css`
  color: #0ba4db;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  background: none;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default HeroSection;
