import React, { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaYoutubeSquare, FaLinkedin } from "react-icons/fa";

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

  return (
    <div className="relative w-full px-4 py-8 bg-[#fff] flex flex-col items-center gap-6 z-20">
      <div className="w-full max-w-7xl flex flex-col md:grid md:grid-cols-4 gap-8 items-start pb-8">
        <div className="w-full flex flex-col md:col-span-1 gap-2 items-start py-3">
          <p className="font-semibold">Contact</p>
          <div className="flex flex-col py-2 gap-2 items-start">
            <p className="text-left text-sm text-[#0ba4db] pt-2">
              hello@paystack.com
            </p>
            <div className="flex- flex items-center gap-2">
              <AiFillFacebook className="text-[#576f7f] text-2xl" />
              <AiOutlineTwitter className="text-[#576f7f] text-2xl" />
              <AiOutlineInstagram className="text-[#576f7f] text-2xl" />
              <FaLinkedin className="text-[#576f7f] text-2xl" />
              <FaYoutubeSquare className="text-[#576f7f] text-2xl" />
            </div>
            <div className="flex-col flex items-start">
              <p
                onMouseOver={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className={`text-left text-sm pt-2 ${
                  active ? "text-[#0ba4db]" : ""
                }`}
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
        <div className="w-full flex flex-col gap-2 md:col-span-3 md:grid-cols-3 md:grid items-start md:py-0">
          {data.map((item, index) => (
            <div
              className="w-full flex flex-col gap-1 items-start py-3"
              key={index}
            >
              <p className="font-semibold pb-2">{item.location}</p>
              {item.address.map((address, index) => (
                <p className="text-left text-sm" key={index}>
                  {address}
                </p>
              ))}
              {item.phone && (
                <p className="text-left text-sm text-[#0ba4db] pt-2">
                  {item.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
