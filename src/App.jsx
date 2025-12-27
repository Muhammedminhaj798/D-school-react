import React, { useRef, useState } from "react";
import nisam from "./assets/nisam vm.png";
import logo from "./assets/d logo.png";
import img1 from "./assets/asna2.png";
import img2 from "./assets/aflu2.png";
import img3 from "./assets/asna1.png";
import img4 from "./assets/aflu-1.png";
import jesna from './assets/jesna.png';
import shamsudheen from './assets/shamsudheen.png';
import sreelal from './assets/sreelal.png';
import abidarasheed from './assets/abida rasheed.png';
import badarulmuneer from './assets/badarul muneer.png'
import faisal from './assets/faisal.png'
import fazil from './assets/fazil.png'
import feroz from './assets/feroz.png'
import hennaayoob from './assets/henna ayoob.png'
import hennagazal from './assets/henna gazal.png'

import { Check, ChevronLeft, ChevronRight, GraduationCap, Instagram, Linkedin, MessageCircle, Minus, Plus, X } from "lucide-react";
import { CourseMentorSection } from "./CourseMentorSection";

const HeroSection = () => {
  const [openModuleId, setOpenModuleId] = useState(null);
  const [openFaqs, setOpenFaqs] = useState({});
  const scrollRef = useRef(null);
  const toggleModule = (id) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };
  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Top Strip */}
      <div className="bg-[#8dc73d] text-white text-center py-4 text-lg md:text-xl font-semibold">
        Create Engage Grow
      </div>

      {/* Navigation */}
      <nav className="bg-[#708a46] px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white">
            <div className="text-xl md:text-2xl font-normal">Personal</div>
            <div className="text-xl md:text-2xl font-normal">
              Branding Masterclass
            </div>
          </div>

          <div className="w-24 h-24 md:w-32 md:h-3 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-auto rounded-3xl md:rounded-[40px]"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-8 md:py-12 bg-black">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#435c19] to-[#556b2f] rounded-3xl md:rounded-[40px] px-6 py-12 md:py-16 relative overflow-hidden">
          {/* Sparkles */}
          <div className="absolute top-[15%] left-[10%] text-white text-3xl md:text-5xl opacity-80">
            ✦
          </div>
          <div className="absolute top-[15%] right-[15%] text-white text-3xl md:text-5xl opacity-80">
            ✦
          </div>
          <div className="absolute bottom-[29%] right-[28%] text-[#9dc657] text-4xl sm:mb-8 md:text-6xl md:mb-1 xl:mb-14 z-90 opacity-70">
            ✦
          </div>

          {/* Inner Banner */}
          <div className="bg-[#729535dc] w-fit px-6 md:px-8 py-3 mx-auto mb-8 rounded-full text-center shadow-lg">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Personal Branding Mastery
            </h2>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold mb-8">
            <span className="font-light">Build a Personal Brand</span>
            <br />
            <span className="font-light">That Gets You</span>
            <br />
            <span className="font-black">Clients,</span>
            <br />
            <span className="font-black">Respect</span> &{" "}
            <span className="font-black">Opportunities</span>
          </h1>

          {/* Mentor Area */}
          <div className="relative min-h-[200px] md:min-h-[600px]">
            {/* SVG Curve */}
            <svg
              className="absolute bottom-0 left-0 ml-[-23px] w-[392px] sm:ml-[-19px]
                sm:w-[729px]  h-[170px] md:ml-[-25px] md:w-[750px] md:h-[450px] lg:w-[1281px] z-9"
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
                absolute bottom-0
                w-40 mb-5
                sm:w-[300px] sm:ml-[60px]
                md:w-[400px] md:ml-[-50px]
                lg:w-[500px]
                xl:w-[520px]
                2xl:w-[560px]
                md:left-[10%]
                z-20
              "
            >
              <img
                src={nisam}
                alt="Mentor"
                className="w-full h-auto rounded-3xl md:rounded-[40px]"
              />
            </div>

            {/* Mentor Info */}
            <div
              className="
                absolute
                bottom-[35%]
                left-[75%]
                -translate-x-1/2
                w-60
                sm:w-[250px] sm:ml-[-250px] sm:bottom-[50%]
                md:bottom-[35%] md:left-[98%] md:w-[320px]
                lg:w-[360px] lg:ml-[-400px]
                2xl:w-[300px]
                z-10
              "
            >
              <div
                className="
                  text-xs ml-18
                  sm:text-sm sm:ml-20
                  md:text-4xl md:ml-30
                  lg:text-4xl
                  xl:text-4xl
                  xl:ml-[-100px]
                  2xl:text-5xl
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
                  px-3 py-2 w-32 ml-15 
                  sm:px-4 sm:py-2 sm:w-50
                  md:px-6 md:py-3 md:w-[300px]
                  lg:w-[400px]
                  xl:ml-[-180px]
                  rounded-lg sm:rounded-xl md:rounded-2xl
                  text-[10px] sm:text-xs md:text-2xl lg:text-2xl xl:text-3xl
                  leading-tight md:leading-snug
                  font-bold text-white shadow-lg text-center
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
                bottom-[68%]
                right-[5%]
                flex items-start gap-2
                bg-white text-[#435c19]
                rounded-xl shadow-lg
                px-3 py-2
                w-[110px]
                text-xs
                z-1
                sm:w-[130px] sm:bottom-[81%] sm:right-[9%] sm:text-sm
                md:bottom-[60%] md:right-[5%] md:px-5 md:py-4 md:w-[250px]
                md:text-2xl md:rounded-2xl
                lg:w-[350px] lg:bottom-[61%] lg:right-[7%] lg:text-4xl
              "
            >
              <GraduationCap className="w-6 h-6 md:w-12 md:h-12 shrink-0" />
              <span className="font-normal leading-tight">
                565+ <br className="md:hidden" /> Enrolled
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="relative z-30 mt-16 md:mt-24 flex flex-col gap-4 items-center">
            <svg
              className="
                absolute bottom-13 left-0 ml-[-23px] w-[392px]
                h-[235px]
                sm:h-[260px] sm:mb-16
                sm:ml-[-19px]
                sm:w-[729px]
                md:h-[330px]
                 
                md:ml-[-25px] md:w-[750px]
                lg:h-[300px]
                lg:w-[1281px]
                xl:h-[340px]
                2xl:h-[560px]
                z-0
              "
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
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
                bg-white text-[#435c19]
                px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4
                rounded-full
                font-bold
                text-base sm:text-lg md:text-3xl lg:text-3xl xl:text-4xl
                min-w-[220px] sm:min-w-[360px] md:min-w-[550px] lg:min-w-[600px]
                shadow-lg z-10
                hover:scale-105 transition-transform
              "
            >
              <span className="font-medium">Course Duration</span>
              <br />
              <span className="font-extrabold">1hr 30 min +</span>
            </button>

            <button
              className="
                bg-white text-[#435c19]
                px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4
                rounded-full
                font-bold
                text-base sm:text-lg md:text-3xl lg:text-3xl xl:text-4xl
                min-w-[220px] sm:min-w-[360px] md:min-w-[550px] lg:min-w-[600px]
                shadow-lg z-10
                hover:scale-105 transition-transform
              "
            >
              <span className="font-medium">Monthly</span>
              <br />
              <span className="font-extrabold">Mentorship Session</span>
            </button>
          </div>
        </div>
      </section>
      <ScrollBanner />


      {/*  Video Sectio */}

      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Course Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* pain point section */}

      <PainPointsSection />

      {/* achieve section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
            Here's What<br />You'll <span className="text-[#8dc73d]">Achieve</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {['Build Your\nIdentity', 'Grow Your\nEngagement', 'Become a\nRecognised\nExpert'].map((text, idx) => (
              <div key={idx} className="bg-[#8dc73d] text-white px-6 py-8 md:py-12 rounded-3xl text-2xl md:text-3xl font-extrabold flex items-center justify-center min-h-[150px] flex-1 whitespace-pre-line">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* course module section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
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

      <section id="pricing" className="py-12 md:py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
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
          gap-6
          overflow-x-auto
          pb-4
          snap-x snap-mandatory
          scrollbar-hide

          lg:grid
          lg:grid-cols-3
          lg:gap-8
          lg:overflow-visible
        "
            >
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="
              min-w-[85%]
              sm:min-w-[70%]
              md:min-w-[50%]
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
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
            Frequently <span className="text-white">Asked</span><br />
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

      <footer className="bg-[#6a9413] py-8 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Left Section */}
      <div className="text-center md:text-left">
        <p className="font-bold text-white mb-2 text-lg">
          Follow us on
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#"
            className="text-white transition-transform hover:scale-110 active:scale-95"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a
            href="#"
            className="text-white transition-transform hover:scale-110 active:scale-95"
          >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex items-center justify-center">
        <img
          src={logo}
          alt="D School"
          className="w-20 sm:w-24 md:w-28 object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="text-center md:text-right">
        <p className="font-bold text-white mb-2 text-lg">
          Contact us on
        </p>
        <div className="flex gap-4 justify-center md:justify-end">
          <a
            href="#"
            className="text-white transition-transform hover:scale-110 active:scale-95"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
        </div>
      </div>

    </div>
  </div>
</footer>


      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-center">
        <button
          onClick={scrollToPricing}
          className="bg-white text-[#6a9413] px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform w-full max-w-md"
        >
          Enroll Now
        </button>
      </div>

    </div>
  );
};
const ScrollBanner = () => (
  <section className="relative w-full h-40 md:h-44 bg-black overflow-hidden flex items-center justify-center my-8">
    <div className="absolute w-[700%] bg-[#8dc73d] text-white font-bold text-lg md:text-2xl uppercase whitespace-nowrap flex items-center transform rotate-6 sm:rotate-3 md:rotate-3 shadow-lg animate-scroll-left">
      {Array(20).fill('Create Engage Grow').map((text, i) => (
        <span key={i} className="mx-4">· {text}</span>
      ))}
    </div>
    <div className="absolute w-[200%] bg-[#8dc73d] text-white font-bold text-lg md:text-2xl uppercase whitespace-nowrap flex items-center transform -rotate-6 sm:-rotate-3 md:-rotate-3 shadow-lg animate-scroll-right">
      {Array(20).fill('Create Engage Grow').map((text, i) => (
        <span key={`dup-${i}`} className="mx-4">· {text}</span>
      ))}
    </div>
  </section>
);

const PainPointsSection = () => {
  const painPoints = [
    { text: 'Not Knowing\nWhere\nto Start', img: img1, position: 'right', color: 'bg-[#8dc73d]', rounded: 'rounded-tr-3xl rounded-bl-3xl rounded-br-3xl' },
    { text: 'Low\nEngagement &\nNo Community', img: img2, position: 'left', color: 'bg-[#556b2f]', rounded: 'rounded-tl-3xl rounded-bl-3xl rounded-br-3xl' },
    { text: 'Poor Content\nStructure', img: img3, position: 'right', color: 'bg-[#8dc73d]', rounded: ' rounded-tr-3xl rounded-bl-3xl rounded-br-3xl' },
    { text: 'Lack of\nConsistency', img: img4, position: 'left', color: 'bg-[#556b2f]', rounded: 'rounded-tl-3xl rounded-bl-3xl rounded-br-3xl' },
  ];



  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          <span className="text-[#8dc73d]">Struggling</span> With<br />Any of These?
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {painPoints.map((point, idx) => (
            <div key={idx} className={`${point.color} ${point.rounded} p-6 md:p-8 relative overflow-hidden min-h-[130px] md:min-h-[180px] flex items-center ${point.position === 'left' ? 'justify-end' : 'justify-start'}`}>
              <h3 className={`text-2xl md:text-3xl font-extrabold text-white z-10 whitespace-pre-line ${point.position === 'left' ? 'text-right' : 'text-left'} max-w-[60%]`}>
                {point.text}
              </h3>
              <div
                className={`
                    absolute
                    ${point.position === "right" ? "right-0" : "left-0"}
                    bottom-0
                    w-[45%]
                    h-full

                    ${idx < 3 ? "translate-y-6 md:translate-y-10" : ""}
                `}>

                <img
                  src={point.img}
                  alt=""
                  className="w-full h-full object-cover "
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
      className="px-6 py-5 cursor-pointer flex justify-between items-center text-white font-extrabold text-lg md:text-xl"
    >
      <span className="leading-tight whitespace-pre-line">
        {module.title}
      </span>
      {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
    </div>

    {/* Content */}
    <div
      className={`bg-[#3a3939] text-white px-6 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
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
    className="
      bg-[#58751c]
      rounded-[20px_100px_30px_30px]

      p-6
      sm:p-8
      md:p-10

      flex
      flex-col

      min-h-[480px]
      md:min-h-[520px]
      lg:min-h-[560px]

      border-2 border-transparent

      transition-all duration-300 ease-out

      md:hover:scale-[1.03]
      md:hover:shadow-2xl
      md:hover:border-[#8dc73d]
    "
  >
    {/* Title */}
    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center mb-4">
      {plan.title}
    </h3>

    {/* Price */}
    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
      {plan.price}
    </div>

    {/* Features */}
    <div className="flex-1 space-y-4 mb-6">
      {plan.features.map((feature, idx) => (
        <div
          key={idx}
          className="flex items-start gap-3 text-white text-base sm:text-lg md:text-xl"
        >
          {feature.included ? (
            <Check className="w-5 h-5 mt-1 flex-shrink-0" />
          ) : (
            <X className="w-5 h-5 mt-1 flex-shrink-0" />
          )}
          <span>{feature.text}</span>
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
  { id: 1, title: 'Who is this course for?', content: 'This course is designed for creators, freelancers, entrepreneurs, and anyone who wants to build a strong personal brand that attracts clients and opportunities.' },
  { id: 2, title: 'How long is the course?', content: 'The core masterclass runs for 1 hr 30+ minutes, but you\'ll also get monthly live mentorship sessions (depending on your plan).' },
  { id: 3, title: 'Will this help me grow on Instagram?', content: 'Yes. You\'ll learn content pillars, engagement strategies, and community-building techniques specifically for Instagram.' },
  { id: 4, title: 'Is this course suitable for working professionals?', content: 'Yes! All sessions can be watched anytime, and the system is built for busy schedules.' },
];

const CreatorsSection = () => {
  const creators = [
    {
      name: "JESNA M",
      image: jesna,
      profession: "Content Creator",
    },
    {
      name: "SHAMSUDHEEN",
      image: shamsudheen,
      profession: "Video Creator",
    },
    {
      name: "SREELAL",
      image: sreelal,
      profession: "Content Creator",
    },
    {
      name: "ABIDA RASHEED",
      image: abidarasheed,
      profession: "Lifestyle Creator",
    },
    {
      name: "BADARUL MUNEER",
      image: badarulmuneer,
      profession: "Content Creator",
    },
    {
      name: "FAISAL",
      image: faisal,
      profession: "Influencer",
    },
    {
      name: "FAZIL",
      image: fazil,
      profession: "Content Creator",
    },
    {
      name: "FEROZ",
      image: feroz,
      profession: "Digital Creator",
    },
    {
      name: "HENNA AYOOB",
      image: hennaayoob,
      profession: "Content Creator",
    },
    {
      name: "HENNA GAZAL",
      image: hennagazal,
      profession: "Content Creator",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          <span className="text-[#8dc73d]">Creators </span>
          <span className="text-white">we Work with</span>
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 w-max animate-scroll-creators">
            {[...creators, ...creators].map((creator, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[220px] sm:w-[260px]"
              >
                {/* Image */}
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <div className="text-[#8dc73d] text-lg font-extrabold text-center uppercase">
                  {creator.name}
                </div>

                {/* Profession */}
                <div className="text-white text-sm font-semibold text-center">
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
  { id: 1, title: 'Module 1:\nWhy Personal Branding', content: 'Why personal branding matters in today\'s digital-first world. How a strong personal brand creates career and business opportunities. The impact of personal branding on trust, influence, and visibility.' },
  { id: 2, title: 'Module 2:\nBuilding Your Brand Foundation', content: 'Identifying your niche and area of expertise. How to understand your target audience and their needs. Defining your brand personality and tone of voice.' },
  { id: 3, title: 'Module 3:\nContent Creation', content: 'Types of content that work for personal brands. Creating content that reflects your identity and expertise. Basics of storytelling for personal branding. Building confidence to show up on camera or in writing.' },
  { id: 4, title: 'Module 4:\nViral Content Creation', content: 'Psychology behind viral content. What makes people stop scrolling. Using emotions, relatability, and trends effectively.' },
  { id: 5, title: 'Module 5:\nContent Structure', content: 'Simple frameworks to organise content ideas. How to script short-form and long-form content. Structuring posts for clarity and impact.' },
  { id: 6, title: 'Module 6:\nCommunity Building and Engagement', content: 'Difference between followers and community. Building trust through authentic interaction. How to engage using comments, DMs, and stories.' },
  { id: 7, title: 'Module 7:\nEstablishing Industry Authority', content: 'Positioning yourself as an industry expert. Creating thought leadership content. Sharing insights, opinions, and experiences confidently.' },
  { id: 8, title: 'Module 8:\nThe Motivation and The Consistency', content: 'Developing the right mindset for long-term growth. Overcoming fear, self-doubt, and burnout. Building habits that keep your personal brand growing.' },
];


const pricingPlans = [
  {
    title: 'Basic Plan',
    price: '₹1,799',
    features: [
      { text: 'Pre-recorded Masterclass Videos', included: true },
      { text: 'Live Classes', included: false },
      { text: 'Certificate of Completion', included: true },
      { text: 'Access Validity: 3 Month', included: true },
    ]
  },
  {
    title: 'Standard Plan',
    price: '₹2,499',
    features: [
      { text: 'Pre-recorded Masterclass Videos', included: true },
      { text: '1 Live Class', included: true },
      { text: 'Certificate of Completion', included: true },
      { text: 'Access Validity: 3 Month', included: true },
    ]
  },
  {
    title: 'Advanced Plan',
    price: '₹3,499',
    features: [
      { text: 'Pre-recorded Masterclass Videos', included: true },
      { text: '6 Live Classes', included: true },
      { text: 'Certificate of Completion', included: true },
      { text: 'Access Validity: 12 Month', included: true },
    ]
  },
];



export default HeroSection;
