import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface countryTypes {
  name: string;
  img: string;
}

export const FlyoutFlag: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const showFlyout = Boolean(open);


  const countryFlags: countryTypes[] = [
    { name: "Côte d'Ivoire", img: "https://flagicons.lipis.dev/flags/4x3/ci.svg" },
    { name: "Egypt", img: "https://flagicons.lipis.dev/flags/4x3/eg.svg" },
    { name: "South Africa", img: "https://flagicons.lipis.dev/flags/4x3/za.svg" },
    { name: "Kenya", img: "https://flagicons.lipis.dev/flags/4x3/ke.svg" },
    { name: "Ghana", img: "https://flagicons.lipis.dev/flags/4x3/gh.svg" },
    { name: "Rwanda", img: "https://flagicons.lipis.dev/flags/4x3/rw.svg" },
    { name: "Others", img: "https://img.icons8.com/nolan/64/1A6DFF/C822FF/great-britain.png" },

  ]

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a className="relative flex items-center transition-all duration-300">
        <div className="w-6 h-5 overflow-hidden rounded-md grid place-items-center">
          <img src={`https://flagicons.lipis.dev/flags/4x3/ng.svg`} alt={`nigeria`} className="w-6 h-5 rounded-md" />
        </div>
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -left-[150%] top-8 bg-white text-black"
          >
            <div className="w-[200px] bg-white p-6 shadow-xl rounded-md ">
              {countryFlags.map((item, index) => (
                <div
                  className="flex items-center gap-3 cursor-pointer mb-2"
                  key={index}
                >
                  <div className="w-5 h-4 overflow-hidden rounded-md grid place-items-center">
                    <img src={item.img} alt={item.name} className="w-5  h-4 rounded-md" />
                  </div>
                  <p className="relative flex items-center text-base text-[#3d5e69]  font-medium transition-colors duration-300">
                    {item.name}
                  </p>
                </div>
              ))}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
