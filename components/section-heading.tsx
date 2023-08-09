import React from "react";
import Image from "next/image";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div>
      {/* <Image
        src="/images/shape/shape-experience.svg"
        alt="Bayu Maulana Ikhsan"
        width="50"
        height="192"
        quality="95"
        priority={true}
        className="text-center absolute xl:w-auto md:w-56 w-48"
      /> */}
      <h2 className="text-4xl font-bold capitalize mb-8 text-center">
        {children}
      </h2>
    </div>
  );
}
