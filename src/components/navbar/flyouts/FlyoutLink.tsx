import React, { useState, ReactNode, ElementType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";

interface FlyoutLinkProps {
  children: ReactNode;
  href: string;
  FlyoutContent?: ElementType;
}

export const FlyoutLink: React.FC<FlyoutLinkProps> = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState<boolean>(false);

  const showFlyout = Boolean(FlyoutContent && open);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a
        href={href}
        className="relative flex items-center text-[#011b33] hover:text-[#0ba4db] font-medium transition-colors duration-300"
      >
        <span>{children}</span>
        <IoMdArrowDropdown />
      </a>
      <AnimatePresence>
        {showFlyout && FlyoutContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-[100%] top-8 bg-white text-black"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
