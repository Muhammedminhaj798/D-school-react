import React from 'react';

export const CreatorCard = React.memo(({ creator }) => {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[550px]  mx-2 md:mx-0">
      {/* Image - original size & rounded */}
      <div className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] aspect-[3/4] rounded-2xl overflow-hidden mb-4">
        <img
          src={creator.image}
          alt={creator.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name - green, overlap style */}
      <div className="text-[#8dc73d] w-[350px] md:w-[550px] md:mt-[-40px] transform -translate-y-15 text-lg font-extrabold text-center uppercase">
        {creator.name}
      </div>

      {/* Profession - white, same overlap */}
      <div className="text-white w-[350px] md:w-[550px] -translate-y-15 text-sm font-semibold text-center">
        {creator.profession}
      </div>
    </div>
  );
});

CreatorCard.displayName = 'CreatorCard';