// InfoCard.tsx
import React from "react";

interface InfoCardProps {
  title: string;
  text: string;
  imageUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text, imageUrl }) => {
  return (
    <div className="relative h-96 w-80 sm:h-72 sm:w-56 md:h-80 md:w-56 lg:h-[450px] overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute flex flex-col justify-end bg-black bg-opacity-50 text-white h-full w-full p-4">
        <h2 className="text-xl font-bold w-full">{title}</h2>
        <p className="mt-2 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
