import React, { useState, useEffect } from "react";

const EnrollButtonWithCountdown = ({ scrollToPricing }) => {
  const TOTAL_SEATS = 50;

  const getNextDeadline = () => {
    const now = new Date();
    const deadline = new Date();
    deadline.setHours(21, 0, 0, 0); // 9:00 PM

    if (now > deadline) {
      deadline.setDate(deadline.getDate() + 1);
    }
    return deadline;
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(TOTAL_SEATS);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const deadline = getNextDeadline();
      const difference = deadline - now;

      if (difference <= 0) {
        setIsSoldOut(true);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        setSeatsLeft(0);
        return;
      }

      setIsSoldOut(false);

      let hours = Math.floor(difference / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (hours === 0) hours = null;

      setTimeLeft({ hours, minutes, seconds });

      const progress = (24 * 60 * 60 * 1000 - difference) / (24 * 60 * 60 * 1000);
      const simulatedSeats = Math.max(1, Math.floor(TOTAL_SEATS * (1 - progress * 0.9)));
      setSeatsLeft(simulatedSeats);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-4 flex justify-center">
      <button
        onClick={scrollToPricing}
        disabled={isSoldOut}
        className={`
          relative w-full max-w-md mx-auto
          bg-white text-[#708a46]
          rounded-full
          px-8 py-7
          shadow-2xl
          transition-all duration-300
          ${isSoldOut
            ? "bg-gray-200 cursor-not-allowed"
            : "hover:shadow-3xl hover:scale-105 active:scale-98"
          }
        `}
      >
        {/* Attached Countdown Badge - No Gap, Professional Look */}
        <div className="
          absolute -top-5 left-1/2 -translate-x-1/2
          bg-[#708a46] text-white
          rounded-full px-6 py-2.5
          shadow-xl
          flex items-center gap-3
          text-xs sm:text-sm font-bold
          
          whitespace-nowrap
        ">
          <span className="hidden sm:inline">Only</span>
          <span className="sm:hidden">Only</span>
          <span className="text-base sm:text-lg">{seatsLeft}</span>
          <span className="hidden sm:inline">seats left!</span>
          <span className="sm:hidden">left!</span>
          
          <span className="mx-1">•</span>
          
          <span className="flex items-center gap-1">
            <span>⏰</span>
            <span>
              {isSoldOut
                ? "Sold Out"
                : timeLeft.hours != null
                ? `${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`
                : `${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`
              }
            </span>
          </span>
        </div>

        {/* Main CTA */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Enroll Now
        </div>
      </button>
    </div>
  );
};

export default EnrollButtonWithCountdown;