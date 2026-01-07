import React, { useState, useEffect } from "react";
import RotatingText from "./RoatingText";
import { getGlobalEnrollCount } from "./utils/enrollCount";
import { GraduationCap } from "lucide-react";


// import RotatingText from "./RotatingText";

const EnrollButtonWithCountdown = ({ scrollToPricing }) => {
  const enrollCount = getGlobalEnrollCount({
    startTime: new Date("2025-01-01T10:00:00Z"), // 👈 manual start time
    baseCount: 565,
    intervalMinutes: 1,
    maxCount: 1500,
    resetTo: 199,
  });

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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const deadline = getNextDeadline();
      const difference = deadline - now;

      if (difference <= 0) {
        setIsSoldOut(true);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      let hours = Math.floor(difference / (1000 * 60 * 60));
      let minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (hours === 0) hours = null;

      setTimeLeft({ hours, minutes, seconds });
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

          px-5 py-4
          sm:px-7 sm:py-6
          md:px-8 md:py-7

          border border-[#708a46]/30
          shadow-[0_10px_30px_rgba(112,138,70,0.25)]

          transition-all duration-300
          ${isSoldOut
            ? "bg-gray-200 cursor-not-allowed shadow-none border-gray-300"
            : "hover:shadow-[0_18px_45px_rgba(112,138,70,0.35)] hover:scale-105 active:scale-98"
          }
        `}
      >
        {/* ROTATING BADGE */}
        <div
          className="
            absolute -top-8.5  left-1/2 -translate-x-1/2
            bg-[#708a46] text-white
            rounded-full px-5 py-2

            w-69
            h-13
            md:h-15
            md:w-84
            border border-white/30
            shadow-[0_8px_25px_rgba(0,0,0,0.25)]

            
            flex items-center gap-3
            text-xs sm:text-sm font-bold
            whitespace-nowrap
          "
        >
          {/* 🔁 ROTATING TEXT */}
          <RotatingText
  texts={[
    `Offer Ends Soon • ⏰ ${
      timeLeft.hours != null
        ? `${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`
        : `${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`
    }`,
    (
      <span className="flex items-center gap-2 justify-center">
        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>{enrollCount}+ Enrolled</span>
      </span>
    )
  ]}
  rotationInterval={5500}
  mainClassName="
    uppercase tracking-wide font-bold
    text-xs sm:text-base
    text-center justify-center
    w-full
  "
/>

        </div>

        {/* MAIN CTA */}
        <div className="text-xl sm:text-3xl md:text-4xl font-extrabold">
          Enroll Now
        </div>
      </button>
    </div>
  );
};

export default EnrollButtonWithCountdown;
