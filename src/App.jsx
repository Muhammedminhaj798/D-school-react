import React, { useEffect, useRef, useState } from "react";
import nisam from "./assets/nisam vm.png";
import logo from "./assets/d logo.png";
import img1 from "./assets/asna2.png";
import img2 from "./assets/aflu2.png";
import img3 from "./assets/asna1.png";
import img4 from "./assets/aflu-1.png";
import jesna from "./assets/jesna.png";
import shamsudheen from "./assets/shamsudheen.png";
import sreelal from "./assets/sreelal.png";
import abidarasheed from "./assets/abida rasheed.png";
import badarulmuneer from "./assets/badarul muneer.png";
import faisal from "./assets/faisal.png";
import fazil from "./assets/fazil.png";
import feroz from "./assets/feroz.png";
import hennaayoob from "./assets/henna ayoob.png";
import hennagazal from "./assets/henna gazal.png";

import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Instagram,
  Linkedin,
  MessageCircle,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { CourseMentorSection } from "./CourseMentorSection";
import EnrollButtonWithCountdown from "./EnrollNow";
import { getGlobalEnrollCount } from "./utils/enrollCount";
import CreatorImage from "./utils/ImageMemo";
// import CreatorImage from "./utils/imageMemo";
// import PricingCard from "./PricingCard";

const HeroSection = () => {
  const [openModuleId, setOpenModuleId] = useState(null);
  const [openFaqs, setOpenFaqs] = useState({});
  const scrollRef = useRef(null);

  const toggleModule = (id) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };
  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const enrollCount = getGlobalEnrollCount({
    startTime: new Date("2025-01-01T10:00:00Z"), // 👈 manual start time
    baseCount: 565,
    intervalMinutes: 1,
    maxCount: 1500,
    resetTo: 199,
  });

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Top Strip */}
      <div className="bg-[#8dc73d] text-white text-center py-1 text-xl md:text-xl font-semibold">
        Create Engage Grow
      </div>

      {/* Navigation */}
      <nav className="bg-[#708a46] pl-6">
        <div className="max-w-10xl h-12 mx-auto flex justify-between items-center">
          <div className="[@media(max-width:320px)]:font-normal [@media(max-width:320px)]:text-base w-[10rem] md:w-[30rem] md:text-2xl font-clash font-base ml-[-10px]">
            Personal{" "}
            <span className="pl-0.2 md:pl-0">Branding Masterclass</span>
          </div>
          <div className="w-24 h-1 md:w-32 md:h-3 flex items-center justify-center [@media(max-width:320px)]:pr-5 pr-7">
            <img src={logo} alt="Logo" className="w-full h-auto" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-15 md:py-15 bg-black">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#435c19] to-[#556b2f] rounded-3xl md:rounded-[40px] px-6 py-6 md:py-16 relative overflow-hidden">
          {/* Sparkles */}
          <div className="absolute top-[15%] left-[4%] md:left-[15%] text-white text-3xl md:text-5xl opacity-80">
            ✦
          </div>
          <div className="absolute top-[15%] right-[5%] md:right-[15%] text-white text-3xl md:text-5xl opacity-80">
            ✦
          </div>
          <div className="absolute bottom-[29%] right-[28%] text-[#9dc657] text-4xl sm:mb-8 md:text-6xl md:mb-1 xl:mb-14 z-90 opacity-70">
            ✦
          </div>

          {/* Inner Banner */}
          <div
            className="
    bg-[#729535dc]
    px-6 sm:px-8 md:px-10
    py-2 
    mx-auto mb-3
    rounded-full
    text-center
    shadow-lg
    w-fit
    max-w-[95%]
  "
          >
            <h2
              className="
      text-sm sm:text-lg md:text-2xl lg:text-3xl
      font-extrabold
      text-white
      leading-tight
      whitespace-nowrap
    "
            >
              Personal Branding Mastery
            </h2>
          </div>

          {/* Headline */}
          <h1 className="text-2xl w-full [@media(max-width:320px)]:text-xl md:text-4xl lg:text-5xl text-center font-mundial font-bold">
            <span className="font-light">Build a Personal Brand</span>
            <br />
            <span className="font-light">That Gets You </span>

            <span className="font-bold">Clients,</span>
            <br />

            <span className="inline-flex items-center justify-center space-x-1 md:space-x-2">
              <span className="font-bold">Respect</span>
              <span>&</span>
              <span className="font-bold">Opportunities</span>
            </span>
          </h1>

          {/* Mentor Area */}
          <div className="relative min-h-[130px] md:min-h-[150px] mt-18 lg:min-h-[250px] xl:min-h-[250px] 2xl:min-h-[180px] lg:mt-[200px] xl:mt-[186px] md:bottom-5">
            {/* SVG Curve */}
            <svg
              className="absolute bottom-0 left-0 ml-[-23px] w-[392px] sm:ml-[-19px]
                sm:w-[729px] [@media(max-width:767px)]:bottom-[-0.3rem]  sm:bottom-30 md:bottom-[-3rem] lg:bottom-20 xl:bottom-20 2xl:bottom-12 h-[170px] md:ml-[-25px]  md:w-[980px] md:h-[200px] lg:w-[1281px] lg:h-[250px] 2xl:h-[200px] z-9"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 C240,10 480,10 720,40 C960,70 1200,60 1440,30 L1440,260 C1200,300 960,300 720,280 C480,260 240,260 0,300 Z"
                fill="#6b8e23"
              />
            </svg>

            {/* Mentor Image */}
            <div
              className="
                absolute
                w-40 
                
                [@media(max-width:767px)]:bottom-[1rem]
                sm:w-[200px] sm:ml-36 sm:bottom-30
                md:w-[220px] md:ml-[30px] md:bottom-[-3rem]
                lg:w-[320px] lg:ml-14 lg:bottom-19
                xl:w-[290px] xl:h-[200px] xl:mb-42 xl:ml-16
                2xl:w-[260px] 2xl:mb-24 2xl:ml-28
                md:left-[10%]
                
                z-20
              "
            >
              <CreatorImage
                src={nisam}
                alt={"Mentor"}
                className={"w-full h-auto rounded-3xl md:rounded-[40px]"}
              />
            </div>

            {/* Mentor Info */}
            <div
              className="
                absolute
                bottom-[50%]
                left-[55%]
                -translate-x-1/2
                w-60
                [@media(max-width:366px)]:left-[60%]
                sm:w-[200px] sm:bottom-[50%]
                md:bottom-[15%] md:left-[48%] md:w-[320px]
                lg:w-[360px] lg:ml-[40px] lg:bottom-[63%]
                xl:ml-[5rem] xl:bottom-[70%] 
                2xl:w-[300px] 2xl:bottom-[55%]
                z-10
              "
            >
              <div
                className="
                  text-xs ml-25
                  sm:text-sm sm:ml-25
                  md:text-2xl md:ml-30
                  lg:text-3xl lg:ml-35
                  xl:text-3xl xl:ml-[0%] 
                  2xl:text-3xl
                  font-clash
                  font-semibold
                  text-white
                  uppercase
                  tracking-wide
                  drop-shadow-lg
                "
              >
                NISAM VM
              </div>

              <div
                className="
                  bg-[#8dc73d]
                  px-3 py-2 w-38 ml-14.5 text-right
                  sm:px-4 sm:py-2 sm:w-50
                  md:px-6 md:py-3 md:w-[300px]
                  lg:w-[400px]
                  xl:ml-[-180px]
                  rounded-lg sm:rounded-xl md:rounded-2xl

                  text-[10px] sm:text-xs md:text-lg lg:text-2xl xl:text-2xl 
                  leading-tight md:leading-snug
                  font-clash font-semibold text-white shadow-lg text-center
                "
              >
                CEO - Desgro Media
                <br />
                Demand School
              </div>
            </div>

            {/* Stats Badge */}
            <div
              className="
                absolute
                bottom-[100%]
                right-[3%]
                flex items-start gap-2
                bg-white text-[#435c19]
                rounded-xl shadow-lg
                px-3 py-2
                w-[135px]
                text-xs
                z-1
                [@media(max-width:366px)]:left-[60%]
                 [@media(max-width:366px)]:left-2 [@media(max-width:366px)]:w-29  [@media(max-width:376px)]:left-[60%]  [@media(max-width:376px)]:bottom-[105%] [@media(max-width:320px)]:bottom-[108%]
                sm:w-[130px] sm:bottom-[101%] sm:right-[9%] sm:text-sm
                md:bottom-[70%] md:right-[0%] md:px-5 md:py-4 md:w-[260px]
                md:text-2xl md:rounded-2xl
                lg:w-[350px] lg:bottom-[106%] lg:h-[100px] lg:right-[2%] lg:text-4xl
              "
            >
              <GraduationCap className="w-6 h-6 md:w-12 md:h-12 shrink-0" />
              <span className="font-clash font-normal leading-tight">
                {enrollCount} + Enrolled
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="relative z-30  flex flex-col gap-4 items-center bottom-0 md:bottom-0 lg:bottom-10 xl:bottom-19 2xl:bottom-20">
            <svg
              className="
                absolute bottom-1 left-0 ml-[-23px] w-[392px]
                h-[100px] sm:bottom-[-1.2rem]
                sm:h-[90px] 
                sm:ml-[-19px]
                sm:w-[729px]
                md:h-[216px]

                [@media(max-width:425px)]:h-39
                [@media(max-width:767px)]:h-41  
                [@media(max-width:639px)]:h-38
                md:ml-[-25px] md:w-[980px]
                lg:h-[160px]
                lg:w-[1281px]  lg:bottom-[72%]
                xl:h-[280px]  xl:w-[1282px] xl:bottom-[5%]
                2xl:h-[200px] 2xl:mb-10
                z-0
              "
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="ctaGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#435c19" />
                  <stop offset="100%" stopColor="#556b2f" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 C240,10 480,10 720,40 C960,70 1200,60 1440,30 L1440,260 C1200,300 960,300 720,280 C480,260 240,260 0,300 Z"
                fill="url(#ctaGrad)"
              />
            </svg>

            <button
              className="
    relative z-10
    bg-white text-[#435c19]
    rounded-full
    shadow-lg
    transition-all duration-200

    px-4 py-2
    sm:px-6 sm:py-3
    md:px-8 md:py-4

    text-xs sm:text-sm md:text-lg lg:text-2xl
    w-auto
    
    min-w-[180px]
    sm:min-w-[260px]
    md:min-w-[380px]
    lg:min-w-[520px]
    max-w-full
    bottom-0
    md:bottom-[-20px]
  "
            >
              <span className="block font-clash font-bold leading-tight">
                Course Duration
              </span>
              <span className="block font-extrabold leading-tight">
                1hr 30 min +
              </span>
            </button>

            <button
              className="
    relative z-10
    bg-white text-[#435c19]
    rounded-full
    shadow-lg
    transition-all duration-200

    px-4 py-2
    sm:px-6 sm:py-3
    md:px-8 md:py-4

    text-xs sm:text-sm md:text-lg lg:text-2xl

    w-auto
    min-w-[180px]
    sm:min-w-[260px]
    md:min-w-[380px]
    lg:min-w-[520px]
    max-w-full
    bottom-0
    md:bottom-[-20px]
  "
            >
              <span className="block font-clash font-bold leading-tight">
                Monthly
              </span>
              <span className="block font-extrabold leading-tight">
                Mentorship Session
              </span>
            </button>
          </div>
        </div>
      </section>
      <ScrollBanner />

      {/*  Video Section */}

     <section className="py-8 md:py-12 px-4">
  <div className="max-w-4xl mx-auto">
    <div className="relative aspect-video bg-white rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl">
      <iframe
        src="https://www.youtube.com/embed/g3zJhiOvOiw?controls=0&modestbranding=1&rel=0"
        className="w-full h-full"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>


      {/* pain point section */}

      <PainPointsSection />

      {/* achieve section */}
      <section className="py-12 md:py-9 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className=" text-3xl md:text-5xl font-clash font-semibold mb-12">
            Here's What
            <br />
            You'll <span className="text-[#8dc73d]">Achieve</span>
          </h2>
          <div className="flex flex-row gap-3 md:gap-6 overflow-x-auto scrollbar-hide">
            {[
              "Build Your\nIdentity",
              "Grow Your\nEngagement",
              "Become a\nRecognised\nExpert",
            ].map((text, idx) => (
              <div
                key={idx}
                className="
    bg-[#8dc73d] text-white
    px-3 py-4
    md:px-6 md:py-12

    rounded-2xl md:rounded-3xl
    max-[370px]:text-sm
    text-base sm:text-lg md:text-3xl
    font-extrabold

    flex items-center justify-center
    min-h-[100px] md:min-h-[150px]

    flex-1
    whitespace-pre-line
    text-center
  "
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* course module section */}
      <section className=" md:py-5 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-clash font-semibold text-center mb-12">
            Course <span className="text-[#8dc73d]">Module</span>
          </h2>

          {/* 🔑 IMPORTANT FIXES:
            - items-start
            - auto-rows-min
        */}
          <div className="grid md:grid-cols-2 gap-4 items-start auto-rows-min">
            {modules.map((module) => (
              <ModuleItem
                key={module.id}
                module={module}
                isOpen={openModuleId === module.id}
                toggle={() => toggleModule(module.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <CourseMentorSection />

      <CreatorsSection />

      <ScrollBanner />

      {/* pricing section */}

      <section id="pricing" className=" md:py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-clash font-semibold text-center mb-12">
            Choose Your <span className="text-[#8dc73d]">Plan</span>
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* LEFT ARROW */}
            <button
              onClick={() =>
                scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="
    flex
    lg:hidden

    absolute
    left-[-16px]
    top-1/2
    -translate-y-1/2
    z-20

    text-white

    p-2
    sm:p-3
    rounded-full
    shadow-lg

    hover:scale-110
    transition
  "
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() =>
                scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="
    flex
    lg:hidden

    absolute
    right-[-16px]
    top-1/2
    -translate-y-1/2
    z-20


    text-white
    p-2
    sm:p-3
    rounded-full
    shadow-lg

    hover:scale-110
    transition
  "
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* CARDS */}
            <div
              ref={scrollRef}
              className="
    flex
    gap-4
    overflow-x-auto
    pb-4
    px-3 sm:px-4
    snap-x snap-mandatory
    scrollbar-hide

    [@media(max-width:320px)]:gap-14
    [@media(max-width:390px)]:gap-11

    [@media(max-width:376px)]:gap-11
    lg:grid
    lg:grid-cols-3
    lg:gap-8
    lg:overflow-visible
    lg:px-0
  "
            >
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="
              min-w-[85%]
              sm:min-w-[70%]
              md:min-w-[70%]
              lg:min-w-0
              snap-center
              
            "
                >
                  <PricingCard plan={plan} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="py-12 md:py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-clash font-semibold text-center mb-12">
            Frequently <span className="text-white">Asked</span>
            <br />
            <span className="text-[#8dc73d]">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <ModuleItem
                key={faq.id}
                module={faq}
                isOpen={openFaqs[faq.id]}
                toggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#6a9413] py-8 px-4 h-54  sm:h-64 md:h-65 lg:h-66">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row mb-[50px] md:flex-row items-center justify-between gap-8">
            {/* Left Section */}
            <div className="text-center mt-[-30px] sm:mt-0 md:text-left z-30">
              <p className="font-clash w-25  text-white mb-2 ">Follow us on</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/company/demandschoolofficial?originalSubdomain=in"
                  className="text-white transition-transform hover:scale-110 active:scale-95"
                >
                  <Linkedin className="w-4 h-4 sm:w-7 sm:h-7 md:w-6 md:h-6" />
                </a>
                <a
                  href="https://www.instagram.com/demand.school/?utm_source=qr#"
                  className="text-white transition-transform hover:scale-110 active:scale-95"
                >
                  <Instagram className="w-4 h-4 sm:w-7 sm:h-7 md:w-6 md:h-6" />
                </a>
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex items-center justify-center flex-shrink-0">
              <CreatorImage
                src={logo}
                alt={"D School"}
                className="
    [@media(max-width:376px)]:w-24
      max-[365px]:w-20
      [@media(max-width:321px)]:ml-[-30px]
      ml-[-10px]
      w-34
      sm:w-36
      md:w-40
      lg:w-44
      h-auto
      z-10
      object-contain
    "
              />
            </div>

            {/* Right Section */}
            <div className="text-center [@media(max-width:376px)]:ml-[-40] [@media(max-width:320px)]:ml-[-60px] z-30 ml-[-60px] max-[365px]:ml-[-40px] mt-[-30px] sm:mt-0 md:text-right">
              <p className="font-clash w-35 text-white mb-2 ">Contact us on</p>
              <div className="flex gap-4 justify-center md:justify-end">
                <a
                  href="https://wa.me/918891804490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform hover:scale-110 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 sm:w-7 sm:h-7 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <EnrollButtonWithCountdown scrollToPricing={scrollToPricing} />

      {/* <div className=" fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-center">
        <button
          onClick={scrollToPricing}
          className="bg-white text-[#709722] px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform w-full max-w-md"
        >
          Enroll Now
        </button>
      </div> */}
    </div>
  );
};

const ScrollBanner = () => {
  const text = "Create Engage Grow . ";
  const repeatedText = text.repeat(40); // കൂടുതൽ repeat for mobile seamless scroll

  return (
    <section className="relative w-full h-[180px] bg-black overflow-hidden flex justify-center items-center -mt-[50px] z-10">
      {/* Band 1: Left to Right */}
      <div
        className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[140vw] md:w-[120vw] 
        bg-[#8dc73d] text-white py-1 md:py-2 
        flex items-center justify-center 
        shadow-[0_0_20px_rgba(138,189,76,0.4)]
        rotate-5 md:rotate-2 lg:rotate-2
      "
      >
        <div
          className="whitespace-nowrap"
          style={{ animation: "scroll-left-to-right 35s linear infinite" }}
        >
          {repeatedText}
        </div>
      </div>

      {/* Band 2: Right to Left */}
      <div
        className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[140vw] md:w-[120vw] 
        bg-[#8dc73d] text-white py-1 md:py-2 
        flex items-center justify-center 
        shadow-[0_0_20px_rgba(138,189,76,0.4)]
        -rotate-5 md:-rotate-2 lg:-rotate-2
      "
      >
        <div
          className="whitespace-nowrap"
          style={{ animation: "scroll-right-to-left 35s linear infinite" }}
        >
          {repeatedText}
        </div>
      </div>

      {/* Global Keyframes - Add this to your global CSS (index.css or App.css) */}
      <style jsx global>{`
        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-30%);
          }
          100% {
            transform: translateX(30%);
          }
        }

        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(30%);
          }
          100% {
            transform: translateX(-30%);
          }
        }
      `}</style>
    </section>
  );
};

const PainPointsSection = () => {
  const painPoints = [
    {
      text: "Not Knowing\nWhere\nto Start",
      img: img1,
      position: "right",
      color: "bg-[#8dc73d]",
      rounded: "rounded-tr-3xl rounded-bl-3xl rounded-br-3xl",
    },
    {
      text: "Low\nEngagement &\nNo Community",
      img: img2,
      position: "left",
      color: "bg-[#556b2f]",
      rounded: "rounded-tl-3xl rounded-bl-3xl rounded-br-3xl",
    },
    {
      text: "Poor Content\nStructure",
      img: img3,
      position: "right",
      color: "bg-[#8dc73d]",
      rounded: "rounded-tr-3xl rounded-bl-3xl rounded-br-3xl",
    },
    {
      text: "Lack of\nConsistency",
      img: img4,
      position: "left",
      color: "bg-[#556b2f]",
      rounded: "rounded-tl-3xl rounded-bl-3xl rounded-br-3xl",
    },
  ];

  return (
    <section className=" md:py-0 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-clash font-semibold text-center mb-12">
          <span className="text-[#8dc73d]">Struggling</span> With
          <br />
          Any of These?
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className={`
                ${point.color}
                ${point.rounded}
                p-6 md:p-8
                relative overflow-hidden
                min-h-[130px] md:min-h-[180px]
                flex items-center
                ${point.position === "left" ? "justify-end" : "justify-start"}
              `}
            >
              {/* TEXT */}
              <h3
                className={`
                  [@media(max-width:320px)]:text-lg text-2xl md:text-2xl lg:text-4xl font-clash font-bold text-white
                  whitespace-pre-line
                  
                  z-21 md:z-21
                  ${point.position === "left" ? "text-right" : "text-left"}
                  ${
                    idx === 1
                      ? "relative z-0 md:z-10  text-2xl"
                      : "relative z-10"
                  }
                `}
              >
                {point.text}
              </h3>

              {/* IMAGE */}
              <div
                className={`
                  absolute
                  ${point.position === "right" ? "right-0" : "left-0"}
                  bottom-0

                  w-[60%] md:w-[75%]

                  ${
                    idx === 1 || idx === 2
                      ? "h-[190%] md:h-[140%] bottom-[-40px] md:bottom-[-40px]"
                      : "h-full"
                  }
                  ${
                    idx === 1
                      ? "[@media(max-width:320px)]:h-[150px] [@media(max-width:320px)]:bottom-[23px] [@media(max-width:320px)]:ml-[-40px]  [@media(max-width:320px)]:w-[280px] md:h-[420px] h-[300px] w-[650x] bottom-[-50px] md:bottom-[-59px]"
                      : ""
                  }
                  ${idx === 2 ? "md:h-[320px]" : ""}
                  ${
                    idx === 0
                      ? "bottom-6 md:bottom-[40px] lg:bottom-10 lg:h-[185px]"
                      : ""
                  }
                  
                  ${idx < 3 ? "translate-y-6 md:translate-y-10" : ""}

                  ${idx === 1 ? "z-20" : "z-0"}
                `}
              >
                <CreatorImage
                  src={point.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Module Item Component
const ModuleItem = ({ module, isOpen, toggle }) => (
  <div className="bg-[#8dc73d] rounded-2xl overflow-hidden transition-all self-start">
    {/* Header */}
    <div
      onClick={toggle}
      className="px-6 py-5 lg:h-[80px] cursor-pointer flex justify-between items-center text-white font-extrabold text-lg md:text-xl"
    >
      <span className="leading-tight font-mundial whitespace-pre-line">
        {module.title}
      </span>
      {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
    </div>

    {/* Content */}
    <div
      className={`bg-[#3a3939] text-white px-6 overflow-hidden transition-[max-height,padding] duration-300 ease-in-out ${
        isOpen ? "max-h-[1000px] py-6" : "max-h-0 py-0"
      }`}
    >
      <p className="text-base leading-relaxed">{module.content}</p>
    </div>
  </div>
);

// pricing card module

// Pricing Card Component
const PricingCard = ({ plan }) => (
  <div
    style={{ backgroundColor: plan.color }}
    className="
    relative
    rounded-[20px_100px_30px_30px]
    p-6 sm:p-8 md:p-10
    flex flex-col
    min-h-[450px] md:min-h-[520px] lg:min-h-[560px]
    w-[300px] md:w-[70%] lg:w-[330px]
    overflow-hidden
    transition-all duration-300
  "
  >
    {plan.isBestSeller && (
      <div
        className="
    absolute
    top-6
    right-[-48px]
    rotate-45

    bg-[#8dc73d]
    text-white

    text-xs sm:text-sm
    font-clash font-bold
    tracking-wide

    px-16 py-2
    shadow-lg
  "
      >
        BEST VALUE
      </div>
    )}

    {/* Title */}
    <h3 className="text-2xl sm:text-2xl  md:text-3xl font-clash font-semibold text-white ">
      {plan.title}
    </h3>

    {/* Price */}
    {/* Price */}
    <div className="mb-6">
      <div className="text-lg sm:text-xl md:text-2xl text-white/70 line-through font-clash">
        {plan.actualPrice}
      </div>

      <div className="text-4xl sm:text-4xl md:text-5xl font-clash font-semibold text-white leading-none">
        {plan.price}
      </div>
    </div>

    {/* Features */}
    <div className="flex-1 space-y-2 mb-6">
      {plan.features.map((feature, idx) => (
        <div
          key={idx}
          className="flex items-start gap-3 font-clash font-black text-white text-base sm:text-lg md:text-xl"
        >
          {feature.included ? (
            <ArrowUpRight className="w-8 h-8 mt-1 text-2xl text-green-600  flex-shrink-0" />
          ) : (
            <X className="w-8 h-8 mt-1 text-green-600 flex-shrink-0" />
          )}
          <span className=" [@media(max-width:366px)]:text-base text-lg md:text-2xl">
            {feature.text}
          </span>
        </div>
      ))}
    </div>

    {/* Button */}
    <button
      onClick={() =>
        document
          .getElementById("pricing")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="
        bg-white
        text-[#58751c]
        py-3
        sm:py-4
        px-6
        sm:px-8
        rounded-2xl
        text-base
        sm:text-lg
        font-clash
        font-bold

        transition-all duration-300

        md:hover:shadow-lg
        md:hover:-translate-y-1
      "
    >
      Enroll Now
    </button>
  </div>
);

const faqs = [
  {
    id: 1,
    title: "Who is this course for?",
    content:
      "This course is designed for creators, freelancers, entrepreneurs, and anyone who wants to build a strong personal brand that attracts clients and opportunities.",
  },
  {
    id: 2,
    title: "How long is the course?",
    content:
      "The core masterclass runs for 1 hr 30+ minutes, but you'll also get monthly live mentorship sessions (depending on your plan).",
  },
  {
    id: 3,
    title: "Will this help me grow on Instagram?",
    content:
      "Yes. You'll learn content pillars, engagement strategies, and community-building techniques specifically for Instagram.",
  },
  {
    id: 4,
    title: "Is this course suitable for working professionals?",
    content:
      "Yes! All sessions can be watched anytime, and the system is built for busy schedules.",
  },
];

const CreatorsSection = () => {
  const creators = [
    {
      name: "Jesna M",
      image: jesna,
      profession: "CEO of Talkio Talkies",
    },
    {
      name: "Shamsudheen V",
      image: shamsudheen,
      profession: "Founder Boulevard Luxury Resorts",
    },
    {
      name: "Sreelal Prospero",
      image: sreelal,
      profession: "Managing Director, Matrix Finbiz",
    },
    {
      name: "Abida Rasheed",
      image: abidarasheed,
      profession: "Celebrity Chef",
    },
    {
      name: "Badarul Muneer",
      image: badarulmuneer,
      profession: "Founder, Hap&Hop",
    },
    {
      name: "Faisal V",
      image: faisal,
      profession: "Founder, Messwala",
    },
    {
      name: "Fazil",
      image: fazil,
      profession: "Co-Founder Msquare Automation Solutions",
    },
    {
      name: "Feroz Kalathil",
      image: feroz,
      profession: "CEO, Build World Constructions",
    },
    {
      name: "Henna Ayoob",
      image: hennaayoob,
      profession: "Consultant Psychologist",
    },
    {
      name: "Henna Gazal",
      image: hennagazal,
      profession: "Psychologist",
    },
  ];
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = creators.length;

    creators.forEach((c) => {
      const img = new Image();
      img.src = c.image;

      const done = () => {
        loaded++;
        if (loaded === total) setReady(true);
      };

      img.onload = done;
      img.onerror = done;
    });

    // safety fallback – UI block aavathirikkaan
    setTimeout(() => setReady(true), 6000);
  }, []);

  if (!ready) {
    return <div>loading...</div>;
  }

  return (
    <section className=" overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-clash font-semibold text-center ">
          <span className="text-[#8dc73d]">Creators </span>
          <span className="text-white">we Work with</span>
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`flex w-max will-change-transform transition-opacity duration-300 ${
              ready ? "animate-scroll-creators opacity-100" : "opacity-0"
            }`}
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            {[...creators, ...creators].map((creator, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[200px] md:w-[300px] sm:w-[260px]"
              >
                {/* Image */}
                <div className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] aspect-[3/4] rounded-2xl overflow-hidden mb-4 will">
                  <CreatorImage
                    src={creator.image}
                    alt={creator.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <div className="text-[#8dc73d] w-[180px]  ml-23 md:ml-19  md:ml-35 md:w-[250px] md:mt-[-40px]  transform -translate-y-15  text-lg font-extrabold  text-left uppercase">
                  {creator.name}
                </div>

                {/* Profession */}
                <div
                  className="
    text-white
    w-full

    ml-23
    md:ml-35
    max-w-[150px] md:max-w-[250px]
    text-xs
    md:text-sm
    font-semibold
    text-left
    [@media(max-width:366px)]:w-50
    [@media(max-width:366px)]:text-xs
    break-words
    leading-snug

    -translate-y-15
    
  "
                >
                  {creator.profession}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const modules = [
  {
    id: 1,
    title: "Module 1:\nWhy Personal Branding",
    content:
      "Why personal branding matters in today's digital-first world. How a strong personal brand creates career and business opportunities. The impact of personal branding on trust, influence, and visibility.",
  },
  {
    id: 2,
    title: "Module 2:\nBuilding Your Brand Foundation",
    content:
      "Identifying your niche and area of expertise. How to understand your target audience and their needs. Defining your brand personality and tone of voice.",
  },
  {
    id: 3,
    title: "Module 3:\nContent Creation",
    content:
      "Types of content that work for personal brands. Creating content that reflects your identity and expertise. Basics of storytelling for personal branding. Building confidence to show up on camera or in writing.",
  },
  {
    id: 4,
    title: "Module 4:\nViral Content Creation",
    content:
      "Psychology behind viral content. What makes people stop scrolling. Using emotions, relatability, and trends effectively.",
  },
  {
    id: 5,
    title: "Module 5:\nContent Structure",
    content:
      "Simple frameworks to organise content ideas. How to script short-form and long-form content. Structuring posts for clarity and impact.",
  },
  {
    id: 6,
    title: "Module 6:\nCommunity Building and Engagement",
    content:
      "Difference between followers and community. Building trust through authentic interaction. How to engage using comments, DMs, and stories.",
  },
  {
    id: 7,
    title: "Module 7:\nEstablishing Industry Authority",
    content:
      "Positioning yourself as an industry expert. Creating thought leadership content. Sharing insights, opinions, and experiences confidently.",
  },
  {
    id: 8,
    title: "Module 8:\nThe Motivation and The Consistency",
    content:
      "Developing the right mindset for long-term growth. Overcoming fear, self-doubt, and burnout. Building habits that keep your personal brand growing.",
  },
];

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "₹1,799",
    actualPrice: "₹2,499",
    color: "#58751c",
    features: [
      { text: "Pre-recorded Masterclass Videos", included: true },
      { text: "Live Classes", included: false },
      { text: "Certificate of Completion", included: true },
      { text: "Access Validity: 3 Month", included: true },
    ],
  },
  {
    title: "Standard Plan",
    price: "₹2,499",
    actualPrice: "₹3,499",
    isBestSeller: true, // 👈 IMPORTANT
    color: "#58751c",
    features: [
      { text: "Pre-recorded Masterclass Videos", included: true },
      { text: "1 Live Class", included: true },
      { text: "Certificate of Completion", included: true },
      { text: "Access Validity: 3 Month", included: true },
    ],
  },
  {
    title: "Advanced Plan",
    price: "₹3,499",
    actualPrice: "₹4,999",
    color: "#58751c",
    features: [
      { text: "Pre-recorded Masterclass Videos", included: true },
      { text: "6 Live Classes", included: true },
      { text: "Certificate of Completion", included: true },
      { text: "Access Validity: 12 Month", included: true },
    ],
  },
];

export default HeroSection;
