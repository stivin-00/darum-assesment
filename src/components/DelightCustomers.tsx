/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

const DelightCustomers: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  `;

  const headerStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

  const listStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.25rem;

      span {
        background-color: #f1fef4;
        border-radius: 0.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
      }

      img {
        width: 0.75rem;
        height: 0.75rem;
      }

      p {
        font-weight: 500;
        font-size: 0.875rem;
      }
    }
  `;

  const linkStyle = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    cursor: pointer;

    p {
      font-weight: 600;
      color: #3bb75e;
      font-size: 0.875rem;
    }

    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  `;

  const imageContainerStyle = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <div css={textSectionStyle}>
          <div css={headerStyle}>
            <h1>Delight customers with a seamless payments experience</h1>
            <p>
              Give your customers the gift of modern, frictionless, painless
              payments. Integrate Paystack once and let your customers pay you
              however they want.
            </p>
          </div>
          <ul css={listStyle}>
            {["Card", "Bank Account", "Bank Transfer", "USSD", "Apple Pay", "Mobile Money", "POS"].map((item, index) => (
              <li key={index}>
                <span>
                  <img
                    src="https://paystack.com/assets/img/icon/check.svg"
                    alt="check"
                  />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div css={headerStyle}>
            <h1>Enjoy phenomenal transaction success rates</h1>
            <p>
              We automatically route payments through the most optimal
              channels, ensuring the highest transaction success rates in the
              market.
            </p>
          </div>
          <a
            css={linkStyle}
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
          >
            <img
              src={show ? "p-transactions-hover.svg" : "p-transactions.svg"}
              alt="check"
            />
            <p>Find out how we achieve high success rates</p>
          </a>
        </div>
        <div css={imageContainerStyle}>
          <img
            src="https://assets.paystack.com/assets/img/content/Collect-Payments-for-Multiple-Channels-1.1.gif"
            alt="gif"
          />
        </div>
      </div>
    </div>
  );
};

export default DelightCustomers;
