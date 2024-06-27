import React from "react";
import AccordionItem from "../common/AccordionItem";
import { TopFooterItem } from "../common/TopFooterItem";

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

  return (
    <div className="relative w-full px-4 py-8 md:py-12 bg-[#fff] flex flex-col-reverse items-center gap-6 z-20">
      <div className="w-full max-w-7xl flex flex-col gap-8 items-start pb-8">
        <div className="w-full flex flex-col gap-2 items-start py-3 md:hidden">
          {data.map((item) => (
            <div className="w-full flex flex-col items-start py-3" key={item.id}>
              <AccordionItem title={item.title} links={item.links} />
            </div>
          ))}
        </div>
        <div className="w-full hidden md:grid grid-cols-4 gap-3">
          <div className="w-full flex flex-col items-start py-3">
            <TopFooterItem title={data[0].title} links={data[0].links} />
            <div className="bg-white">
              {secondData.links.map((link, index) => (
                <p className="text-left text-sm hover:text-[#0ba4db] pt-2" key={index}>
                  {link.name}
                </p>
              ))}
            </div>
            <div className="bg-white py-3">
              {thirdData.links.map((link) => (
                <p className="text-left text-sm hover:text-[#0ba4db] pt-2" key={link.name}>
                  {link.name}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col items-start py-3">
            <TopFooterItem title={data[1].title} links={data[1].links} />
            <TopFooterItem title={data[2].title} links={data[2].links} />
            <TopFooterItem title={data[3].title} links={data[3].links} />
          </div>
          <div className="w-full flex flex-col items-start py-3">
            <TopFooterItem title={data[4].title} links={data[4].links} />
            <TopFooterItem title={data[5].title} links={data[5].links} />
            <TopFooterItem title={data[6].title} links={data[6].links} />
          </div>
          <div className="w-full flex flex-col items-start py-3">
            <TopFooterItem title={data[7].title} links={data[7].links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
