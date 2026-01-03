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
      let minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (hours === 0) hours = null;

      setTimeLeft({ hours, minutes, seconds });

      const progress =
        (24 * 60 * 60 * 1000 - difference) /
        (24 * 60 * 60 * 1000);

      const simulatedSeats = Math.max(
        1,
        Math.floor(TOTAL_SEATS * (1 - progress * 0.9))
      );
      setSeatsLeft(simulatedSeats);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 pt-2 flex justify-center z-100">
      <button
        onClick={scrollToPricing}
        disabled={isSoldOut}
        className={`
          w-full max-w-lg mx-auto
          rounded-full
          px-4 py-3
          sm:px-5 sm:py-3
          md:px-6 md:py-4
          flex items-center justify-between
          shadow-2xl
          transition-all duration-300
          ${isSoldOut
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white hover:shadow-xl active:scale-95"}
        `}
      >
        {/* LEFT: TIMER + SEATS */}
        <div className="text-left text-[#708a46]">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-xs sm:text-sm">⏰</span>
            <span className="text-xs sm:text-sm md:text-base font-medium">
              {isSoldOut
                ? "00:00"
                : timeLeft.hours != null
                ? `${formatTime(timeLeft.hours)}:${formatTime(
                    timeLeft.minutes
                  )}:${formatTime(timeLeft.seconds)}`
                : `${formatTime(timeLeft.minutes)}:${formatTime(
                    timeLeft.seconds
                  )}`}
            </span>
          </div>

          <div className="text-sm sm:text-base md:text-lg font-extrabold leading-tight">
            Only {seatsLeft} {seatsLeft === 1 ? "seat" : "seats"} left!
          </div>
        </div>

        {/* RIGHT: CTA */}
        <div className="text-right text-[#708a46]">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-none">
            Enroll Now
          </div>
        </div>
      </button>
    </div>
  );
};

export default EnrollButtonWithCountdown;
