/** @jsxImportSource @emotion/react */
import React from "react";
import AccordionItem from "../common/AccordionItem";
import { TopFooterItem } from "../common/TopFooterItem";
import { css } from '@emotion/react';

interface Link {
  name: string;
}

interface DataItem {
  id: number;
  title: string;
  links: Link[];
}

interface SectionData {
  links: Link[];
}

const TopFooter: React.FC = () => {
  const data: DataItem[] = [
    {
      id: 1,
      title: "Why Paystack",
      links: [{ name: "Why Choose Paystack" }, { name: "Success Rates" }],
    },
    {
      id: 2,
      title: "Pricing",
      links: [
        { name: "Nigeria" },
        { name: "Ghana" },
        { name: "South Africa" },
        { name: "Kenya" },
      ],
    },
    {
      id: 3,
      title: "Customers",
      links: [{ name: "Testimonials" }],
    },
    {
      id: 4,
      title: "Learn",
      links: [
        { name: "Blog" },
        { name: "Guides" },
        { name: "Video Tutorials" },
        { name: "Decode Fintech" },
        { name: "Commerce" },
        { name: "Terminal" },
      ],
    },
    {
      id: 5,
      title: "Developers",
      links: [
        { name: "Overview" },
        { name: "Documentation" },
        { name: "Integrations" },
        { name: "Status Page" },
      ],
    },
    {
      id: 6,
      title: "Community",
      links: [{ name: "Service Partner Directory" }, { name: "Nigeria Logos" }],
    },
    {
      id: 7,
      title: "Support",
      links: [
        { name: "Help Desk" },
        { name: "Contact Us" },
        { name: "Why Was I Debited?" },
      ],
    },
    {
      id: 8,
      title: "About",
      links: [
        { name: "Company" },
        { name: "Changelog" },
        { name: "Subscribe" },
        { name: "Compliance" },
        { name: "Careers" },
        { name: "Media Kit" },
        { name: "Privacy & Terms" },
      ],
    },
  ];

  const secondData: SectionData = {
    links: [
      { name: "For Entrepreneurs" },
      { name: "For Corporates" },
      { name: "For Global Brands" },
      { name: "For Startups" },
    ],
  };

  const thirdData: SectionData = {
    links: [
      { name: "For Fintechs" },
      { name: "For Agents" },
      { name: "For Schools" },
      { name: "For Betting" },
    ],
  };

  const containerStyle = css`
    position: relative;
    width: 100%;
    padding: 2rem 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5rem;
    z-index: 20;

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
    gap: 2rem;
    align-items: flex-start;
    padding-bottom: 2rem;
  `;

  const accordionStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;

    @media (min-width: 768px) {
      display: none;
    }
  `;

  const gridStyle = css`
    width: 100%;
    display: none;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
    }
  `;

  const itemStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
  `;

  const linkStyle = css`
    text-align: left;
    font-size: 0.875rem;
    padding-top: 0.5rem;

    &:hover {
      color: #0ba4db;
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        <div css={accordionStyle}>
          {data.map((item) => (
            <div css={itemStyle} key={item.id}>
              <AccordionItem title={item.title} links={item.links} />
            </div>
          ))}
        </div>
        <div css={gridStyle}>
          <div css={itemStyle}>
            <TopFooterItem title={data[0].title} links={data[0].links} />
            <div>
              {secondData.links.map((link, index) => (
                <p css={linkStyle} key={index}>
                  {link.name}
                </p>
              ))}
            </div>
            <div>
              {thirdData.links.map((link) => (
                <p css={linkStyle} key={link.name}>
                  {link.name}
                </p>
              ))}
            </div>
          </div>
          <div css={itemStyle}>
            <TopFooterItem title={data[1].title} links={data[1].links} />
            <TopFooterItem title={data[2].title} links={data[2].links} />
            <TopFooterItem title={data[3].title} links={data[3].links} />
          </div>
          <div css={itemStyle}>
            <TopFooterItem title={data[4].title} links={data[4].links} />
            <TopFooterItem title={data[5].title} links={data[5].links} />
            <TopFooterItem title={data[6].title} links={data[6].links} />
          </div>
          <div css={itemStyle}>
            <TopFooterItem title={data[7].title} links={data[7].links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
