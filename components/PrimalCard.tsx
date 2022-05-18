import React from "react";

const PrimalCard = ({
  title,
  videoSrc,
}: {
  title: string;
  videoSrc: string;
}) => {
  return (
    <div className="relative w-80  border-2 h-48 rounded-md border-gray-600 cursor-pointer hover:border-white hover:border-3 transition-all duration-200 hover:scale-[1.07] shadow-md shadow-gray-800 overflow-hidden group ">
      <video
        src={`/videos/${videoSrc}`}
        autoPlay
        muted
        className="hidden w-[100%] h-[100%] object-cover z-[-1] group-hover:block"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <h4 className="text-3xl">{title}</h4>
      </div>
    </div>
  );
};

export default PrimalCard;
