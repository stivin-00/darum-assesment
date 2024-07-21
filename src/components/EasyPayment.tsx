/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

const EasyPayment: React.FC = () => {
  const containerStyle = css`
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

  const contentStyle = css`
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
      align-items: center;
    }
  `;

  const headerStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    h1 {
      text-align: left;
      font-size: 2.25rem;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 2.5rem;
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

      @media (min-width: 1024px) {
        font-size: 1.25rem;
      }
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <div css={headerStyle}>
          <h1>Simple, easy payments</h1>
          <p>Building a business is hard. Getting paid shouldn't be.</p>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default EasyPayment;
