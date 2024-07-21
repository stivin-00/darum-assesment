/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const Benefits: React.FC = () => {
  const containerStyle = css`
    width: 100%;
    padding: 2rem 1rem;
    background-color: white;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  `;

  const contentStyle = css`
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    align-items: flex-start;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
      flex-direction: row-reverse;
      align-items: center;
    }
  `;

  const textSectionStyle = css`
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    h1 {
      text-align: left;
      font-size: 1.5rem;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 1.875rem;
      }

      @media (min-width: 1024px) {
        font-size: 2.25rem;
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

  const videoContainerStyle = css`
    display: none;
    width: 50%;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    video {
      width: 100%;
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <div css={textSectionStyle}>
          <div className="w-full flex flex-col gap-4 items-start">
            <h1>Protect yourself and your customers with advanced fraud detection</h1>
            <p>
              Paystack’s combination of automated and manual fraud systems
              protect you from fraudulent transactions and associated chargeback
              claims.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 items-start">
            <h1>Detailed reporting for accounting, reconciliation, and audits</h1>
            <p>
              Understand your customers’ purchase patterns and do easy
              reconciliations with a robust data Dashboard and easy exports.
            </p>
          </div>
        </div>
        <div css={videoContainerStyle}>
          <video autoPlay muted loop playsInline>
            <source
              src="https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
