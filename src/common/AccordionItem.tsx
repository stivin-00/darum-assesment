import React, { useState } from "react";


interface AccordionItemProps {
  title: string;
  links: { name: string }[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div
        className="w-full flex justify-between items-center cursor-pointer text-left"
        onClick={toggleOpen}
      >
        <p className="font-semibold">{title}</p>
        <svg
          className={`w-4 h-4 transition-transform transform ${
            isOpen ? "" : "-rotate-90"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {links.map((link, index) => (
          <p key={index} className="text-left text-sm hover:text-[#0ba4db] pt-2">
            {link.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AccordionItem;
