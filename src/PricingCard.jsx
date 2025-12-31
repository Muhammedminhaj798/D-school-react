import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, Link } from 'lucide-react'; // Link icon for chain

const PricingCard = ({ plan }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isOfferActive, setIsOfferActive] = useState(true);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      let target = new Date();
      target.setHours(21, 0, 0, 0); // Today 9:00 PM

      if (now > target) {
        target.setDate(target.getDate() + 1); // Tomorrow 9 PM
        setIsOfferActive(false);
      } else {
        setIsOfferActive(true);
      }

      const diff = target.getTime() - now.getTime();

      if (diff > 0) {
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ hours: h, minutes: m, seconds: s });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <div
      style={{ backgroundColor: plan.color }}
      className="rounded-[20px_100px_30px_30px] p-6 sm:p-8 md:p-10 flex flex-col min-h-[500px] md:min-h-[560px] lg:min-h-[600px] w-[300px] lg:w-[330px] border-3 border-transparent transition-all duration-300 ease-out md:hover:scale-[1.03] md:hover:shadow-2xl md:hover:border-[#8dc73d] relative overflow-hidden"
    >
      {/* Simple Hanging Chain Countdown - Top Center */}
      {isOfferActive && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            {/* Chain Icon */}
            <Link className="w-8 h-8 text-white/70 mx-auto mb-1" strokeWidth={3} />

            {/* Countdown Tag */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 shadow-lg">
              <p className="text-white font-clash font-bold text-sm tracking-wider whitespace-nowrap">
                Offer ends in{' '}
                <span className="text-yellow-300">
                  {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </span>
              </p>
            </div>

            {/* Small chain link below (optional visual) */}
            <div className="w-1 h-4 bg-white/30 mx-auto mt-1 rounded-full"></div>
          </div>
        </div>
      )}

      {/* Main Content - Added pt to avoid overlap */}
      <div className="pt-8 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-2xl sm:text-2xl md:text-3xl font-clash font-semibold text-white text-center">
          {plan.title}
        </h3>

        {/* Price */}
        <div className="text-4xl sm:text-4xl md:text-5xl font-clash font-semibold text-white my-6 text-center leading-none">
          {plan.price}
        </div>

        {/* Features */}
        <div className="flex-1 space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 font-clash font-black text-white text-base sm:text-lg md:text-xl"
            >
              {feature.included ? (
                <ArrowUpRight className="w-7 h-7 mt-1 text-green-500 flex-shrink-0" />
              ) : (
                <X className="w-7 h-7 mt-1 text-red-500/70 flex-shrink-0" />
              )}
              <span className="leading-tight">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() =>
            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-[#58751c] py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg font-clash font-bold transition-all duration-300 md:hover:shadow-lg md:hover:-translate-y-1 mt-auto"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;