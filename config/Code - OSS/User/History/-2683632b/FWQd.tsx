import React from "react";

interface EntrySectionProps {
  heading: string;
  paragraph: string;
  backgroundImage: string;
}

const EntrySection: React.FC<EntrySectionProps> = ({
  heading,
  paragraph,
  backgroundImage,
}) => {
  return (
    <div
      className="relative flex items-center justify-center min-h-[90vh] max-h-[95vh] max-sm:min-h-[80vh] w-screen  bg-cover bg-center text-black"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gray-300 bg-opacity-75 flex flex-col items-left justify-center p-4 md:p-10">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
          {heading}
        </h1>
        <p className="text- md:text-xl leading-relaxed max-w-full md:max-w-3xl">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default EntrySection;
