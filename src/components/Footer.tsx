/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaYoutubeSquare, FaLinkedin } from "react-icons/fa";
import { css } from '@emotion/react';

interface AddressData {
  location: string;
  address: string[];
  phone?: string;
}

export const Footer: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const data: AddressData[] = [
    {
      location: "Lagos",
      address: [
        "126 Joel Ogunnaike Street,",
        "Ikeja GRA, Ikeja,",
        "Lagos, Nigeria",
      ],
      phone: "+234 803 123 4567",
    },
    {
      location: "San Francisco",
      address: [
        "354 Oyster Point Blvd.,",
        "South San Francisco,",
        "CA 94080",
        "United States",
      ],
    },
    {
      location: "Cape Town",
      address: [
        "Wework (1st Floor),",
        "80 Strand Street,",
        "Cape Town City Centre,",
        "Cape Town, 8001,",
        "South Africa",
      ],
    },
    {
      location: "Accra",
      address: [
        "AfricaWorks @ Airport City",
        "4th Floor, Stanbic Heights,",
        "215 North Liberation Link,",
        "Airport City,",
        "Accra, Ghana",
      ],
    },
    {
      location: "Dubai",
      address: [
        "Office 215,",
        "Building 3,",
        "Dubai Internet City, Dubai,",
        "United Arab Emirates",
      ],
    },
    {
      location: "Nairobi",
      address: [
        "The Pavilion (1st Floor)",
        "Lower Kabete Road, Westlands",
        "Nairobi, Kenya",
      ],
    },
  ];

  const containerStyle = css`
    background-color: #fff;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    width: 100%;
    z-index: 20;
  `;

  const contentStyle = css`
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    padding-bottom: 2rem;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 10%;
      justify-content: space-between;
    }
  `;

  const contactStyle = css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
  `;

  const emailStyle = css`
    color: #0ba4db;
    padding-top: 0.5rem;
    font-size: 0.875rem;
    text-align: left;
  `;

  const socialIconsStyle = css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .icon {
      color: #576f7f;
      font-size: 1.5rem;
    }
  `;

  const addressContainerStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const addressStyle = css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem 0;
  `;

  const locationStyle = css`
    font-weight: 600;
    padding-bottom: 0.5rem;
  `;

  const phoneStyle = css`
    color: #0ba4db;
    padding-top: 0.5rem;
    font-size: 0.875rem;
    text-align: left;
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <div css={contactStyle}>
          <p className="font-semibold">Contact</p>
          <div css={contactStyle}>
            <p css={emailStyle}>hello@paystack.com</p>
            <div css={socialIconsStyle}>
              <AiFillFacebook className="icon" />
              <AiOutlineTwitter className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaLinkedin className="icon" />
              <FaYoutubeSquare className="icon" />
            </div>
            <div className="flex-col flex items-start">
              <p
                onMouseOver={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                css={css`
                  text-align: left;
                  font-size: 0.875rem;
                  padding-top: 0.5rem;
                  ${active ? 'color: #0ba4db;' : ''}
                `}
              >
                hello@paystack.com
              </p>
              <div
                onMouseOver={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="flex flex-col items-start"
              >
                {active ? (
                  <img
                    src="/stripe-hover.svg"
                    alt="stripe logo"
                    className="w-20 pt-2"
                  />
                ) : (
                  <img
                    src="/stripe.svg"
                    alt="stripe logo"
                    className="w-20 pt-2"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div css={addressContainerStyle}>
          {data.map((item, index) => (
            <div css={addressStyle} key={index}>
              <p css={locationStyle}>{item.location}</p>
              {item.address.map((address, index) => (
                <p className="text-left text-sm" key={index}>
                  {address}
                </p>
              ))}
              {item.phone && (
                <p css={phoneStyle}>{item.phone}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
