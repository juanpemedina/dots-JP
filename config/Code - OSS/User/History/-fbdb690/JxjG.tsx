// InfoCard.tsx
import React from "react";

interface InfoCardProps {
  title: string;
  text: string;
  imageUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text, imageUrl }) => {
  return (
    <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-56 overflow-hidden shadow-lg">
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
