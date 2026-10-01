"use client";

import Image from "next/image";
import { useState } from "react";

type ProductsItemProps = {
  id: string;
  title: string;
  imageSrc: string;
  price: string;
  description: string;
  details: string[];
  pacifico: string;
};

export const ProductsItem = ({
  id,
  title,
  imageSrc,
  price,
  description,
  details,
  pacifico
}: ProductsItemProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`group relative bg-white/5 border border-white/10 rounded-3xl p-7 transform-3d hover:border-pink/40 hover:bg-white/[0.07] transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`}
      onClick={() => setFlipped(prev => !prev)}
    >
      {/* Front side */}
      <div className="relative backface-hidden flex flex-row md:flex-col sm:flex-row gap-5 sm:gap-10">
        <div className="relative shrink-0 w-[40%] aspect-square rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 backface-hidden">
          <Image src={imageSrc} alt={`${title} image`} height={300} width={300} className="object-contain rounded-2xl"></Image>
        </div>
        <div className="flex flex-col items-start gap-10 mb-2 backface-hidden">
          <h3 className={`text-white text-3xl ${pacifico}`}>{title}</h3>
          <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">{price}</span>
        </div>
      </div>
      {/* Back side */}
      <div className="absolute inset-0 overflow-auto rounded-2xl flex flex-col items-center justify-start gap-3 backface-hidden rotate-y-180 bg-white/5 border border-white/10 p-8" onClick={(e) => {
          e.stopPropagation();
          setFlipped(prev => !prev);
        }}>
        <div className="text-white">
          <h3 className="text-pink text-lg font-bold">{description}</h3>
          {details.map((detail, index) => (
            <p key={index} className="mb-2 text-sm">{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};