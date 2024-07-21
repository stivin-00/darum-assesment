/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

const CustomPayments: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

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
      flex-direction: row;
      align-items: center;
    }
  `;

  const textSectionStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
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
    padding: 1rem;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <div css={textSectionStyle}>
          <div css={headerStyle}>
            <h1>Build custom payments experiences with well-documented APIs</h1>
            <p>
              Developers love our thorough, well-documented APIs that let you to
              build everything from simple weekend projects, to complex
              financial products serving hundreds of thousands of customers. If
              you can imagine it, you can build it with Paystack.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <ul css={listStyle}>
              {[
                "Collect one-time and recurring payments from your app or website",
                "Make instant transfers",
                "Verify the identity of customers"
              ].map((item, index) => (
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
          </div>
          <div className="flex items-center justify-start mt-2">
            <a
              css={linkStyle}
              onMouseOver={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}
            >
              <img
                src={showMore ? "p-transactions-hover.svg" : "p-transactions.svg"}
                alt="check"
              />
              <p>Paystack API Quickstart</p>
            </a>
          </div>
        </div>
        <div css={imageContainerStyle}>
          <img
            src="https://assets.paystack.com/assets/img/content/_800x714_crop_center-center_82_line/Robust-Suite-of-APIs-Opt.png"
            alt="API suite"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomPayments;
