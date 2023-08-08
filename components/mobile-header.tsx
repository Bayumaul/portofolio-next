import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { links } from "@/lib/data";
import { motion } from "framer-motion";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <div className="md:hidden flex fixed top-[0.25rem] right-1 h-12 -translate-x-1/2 py-2">
      <button
        onClick={() => setOpen((open) => !open)}
        type="button"
        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      >
        <BiMenuAltRight />
      </button>

      <motion.div
        className={`${
          open ? "block" : "hidden"
        } bg-white overflow-hidden top-2 mr-5 ml-2 w-56 right-12 absolute rounded-lg`}
        animate={open ? "open" : "closed"}
        variants={variants}
      >
        {links.map((link) => (
          <a
            href={link.hash}
            onClick={() => setOpen(false)}
            className="px-2 py-2 text-sm block hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-black text-gray-700 dark:bg-gray-900 dark:text-gray-100 hover:text-black"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </div>
  );
}