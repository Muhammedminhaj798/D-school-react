


export const ScrollBanner = () => (
    
  <section className="relative w-full h-32 md:h-44 bg-black overflow-hidden flex items-center justify-center my-8">
    <div className="absolute w-[200%] bg-[#8dc73d] text-white font-bold text-lg md:text-2xl uppercase whitespace-nowrap flex items-center transform rotate-2 shadow-lg animate-scroll-left">
      {Array(20).fill('Create Engage Grow').map((text, i) => (
        <span key={i} className="mx-4">. {text}</span>
      ))}
    </div>
    <div className="absolute w-[200%] bg-[#8dc73d] text-white font-bold text-lg md:text-2xl uppercase whitespace-nowrap flex items-center transform -rotate-2 shadow-lg animate-scroll-right">
      {Array(20).fill('Create Engage Grow').map((text, i) => (
        <span key={i} className="mx-4">. {text}</span>
      ))}
    </div>
  </section>
);