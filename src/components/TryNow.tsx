/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export const TryNow: React.FC = () => {
  const containerStyle = css`
    position: relative;
    width: 100%;
    padding: 2rem 1rem;
    background-color: #fff;
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
    background-position: 0 50%;
    opacity: 0.2;
    background-image: url(https://paystack.com/assets/img/patterns/curved-pattern.png);
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

  const rowStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 1rem 0;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 1.5rem;
    }
  `;

  const textContainerStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (min-width: 768px) {
      width: 50%;
      align-items: flex-start;
    }

    p {
      width: 100%;
      text-align: center;
      font-size: 1rem;

      @media (min-width: 768px) {
        text-align: start;
        font-size: 1.125rem;
      }
    }

    h1 {
      width: 100%;
      text-align: center;
      font-size: 1.875rem;
      font-weight: bold;

      @media (min-width: 768px) {
        text-align: start;
        font-size: 2.25rem;
      }
    }
  `;

  const buttonStyle = css`
    background-color: #3bb75e;
    min-width: 200px;
    padding: 0.75rem 1rem;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: white;
    border-radius: 0.375rem;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background-color: #3f9457;
      transform: translateY(0.25rem);
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={backgroundStyle}></div>
      <div css={contentStyle}>
        <div css={rowStyle}>
          <div css={textContainerStyle}>
            <p>Try Paystack Now</p>
            <h1>Start accepting payments in just 30 minutes</h1>
          </div>
          <button css={buttonStyle}>Create a free account</button>
        </div>
      </div>
    </div>
  );
};
