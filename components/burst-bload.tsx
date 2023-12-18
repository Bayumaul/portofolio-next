import React from "react";
import { motion } from "framer-motion";

export default function BurstBload() {
  return (
    <div>
      <motion.img
        src="/images/icon/burst-bloat.svg"
        animate={{ scale: [0.5, 0.5, 1.05], rotate: [0, 360] }}
        transition={{
          ease: "easeInOut",
          repeatType: "reverse",
          repeat: Infinity,
          duration: 1.2,
        }}
        alt="about shape bayu maulana ikhsan"
        className="-z-10 top-0 right-4 md:w-auto w-6"
        width="24"
        height="24"
      />
    </div>
  );
}
