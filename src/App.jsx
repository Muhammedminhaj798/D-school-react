import React, { useState } from "react";
import nisam from "./assets/nisam vm.png";
import logo from "./assets/d logo.png";
import img1 from "./assets/asna2.png";
import img2 from "./assets/aflu2.png";
import img3 from "./assets/asna1.png";
import img4 from "./assets/aflu-1.png";
import { GraduationCap, Minus, Plus } from "lucide-react";

const HeroSection = () => {
  const [openModuleId, setOpenModuleId] = useState(null);


  const toggleModule = (id) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
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
          <div className="absolute bottom-[30%] right-[28%] text-[#9dc657] text-4xl sm:mb-8 md:text-6xl md:mb-1 xl:mb-14 z-90 opacity-70">
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
          <div className="relative min-h-[300px] md:min-h-[600px]">
            {/* SVG Curve */}
            <svg
              className="absolute bottom-0 left-0 w-full h-[300px] md:h-[450px] z-9"
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
                sm:w-[250px] sm:ml-[-150px] sm:bottom-[50%]
                md:bottom-[35%] md:left-[82%] md:w-[320px]
                lg:w-[360px] lg:ml-[-400px]
                2xl:w-[300px]
                z-10
              "
            >
              <div
                className="
                  text-xs ml-18
                  sm:text-sm sm:ml-20
                  md:text-4xl md:ml-27
                  lg:text-4xl
                  xl:text-5xl
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
                  px-3 py-2 w-32 ml-12
                  sm:px-4 sm:py-2 sm:w-50
                  md:px-6 md:py-3 md:w-[300px]
                  lg:w-[400px]
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
                bottom-[82%]
                right-[4%]
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
                absolute bottom-13 left-0 w-full
                h-[250px]
                sm:h-[260px] sm:mb-16
                md:h-[330px]
                lg:h-[330px]
                xl:h-[420px]
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

<CreatorsSection/>

    </div>
  );
};
const ScrollBanner = () => (
  <section className="relative w-full h-40 md:h-44 bg-black overflow-hidden flex items-center justify-center my-8">
    <div className="absolute w-[200%] bg-[#8dc73d] text-white font-bold text-lg md:text-2xl uppercase whitespace-nowrap flex items-center transform rotate-6 sm:rotate-3 md:rotate-3 shadow-lg animate-scroll-left">
      {Array(20).fill('Create Engage Grow').map((text, i) => (
        <span key={i} className="mx-4">. {text}</span>
      ))}
    </div>
    <div className="absolute w-[200%] bg-[#8dc73d] text-white font-bold text-lg md:text-2xl uppercase whitespace-nowrap flex items-center transform -rotate-6 sm:-rotate-3 md:-rotate-3 shadow-lg animate-scroll-right">
      {Array(20).fill('Create Engage Grow').map((text, i) => (
        <span key={i} className="mx-4">. {text}</span>
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

const CourseMentorSection = () => (
  <section className="py-12 md:py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        <span className="text-white">Course </span>
        <span className="text-[#8dc73d]">Mentor</span>
      </h2>

      <div className="relative min-h-[420px] md:min-h-[500px]">

        {/* Mentor Image */}

        <div
          className="
    absolute
    left-0
    top-1/2
    -translate-y-1/2

    z-30
    pointer-events-none
  "
        >
          <img
            src={nisam}
            alt="Nisam VM"
            className="
      h-[260px]        /* small phones */
      sm:h-[320px]     /* big phones */
      md:h-[520px]     /* tablets */
      md:mt-[-230px]
      md:ml-[-30px]
      lg:h-[750px]
      lg:mt-[-245px] 
      lg:ml-[10px]    /* laptops */
      xl:h-[620px]     /* desktops */

      w-auto
      object-contain
    "
          />
        </div>



        {/* Card */}
        <div
          className="
          bg-gray-100
          rounded-3xl
          md:rounded-[30px_30px_110px_30px]
          md:p-12
          w-full
          md:ml-[0%]
          relative
          z-10
          min-h-[320px]

          flex
          flex-col
          md:flex-row
          items-center
          md:items-stretch
          justify-between

          overflow-visible   /* 🔑 IMPORTANT */
        "
        >

          {/* Name Badge */}
          <div
            className="
            bg-[#8dc73d]
            rounded-[40px_40px_40px_0]
            px-5 py-4

            mt-40
            md:absolute
            md:w-[250px]
            md:mt-0
            md:left-[31%]
            md:top-36
            md:-translate-y-1/2

            lg:w-[300px]
            lg:ml-[-10px]
            lg:mt-[40px]

            z-20
            min-w-[200px]
            text-center
            md:text-left
          "
          >
            <div className="text-xl md:text-2xl  md:pl-[50px] font-extrabold text-white uppercase mb-1">
              NISAM VM
            </div>
            <div className="text-sm md:text-base md:pl-[50px]  font-semibold text-white leading-snug">
              CEO - Desgro Media<br />Demand School
            </div>
          </div>

          {/* Stats */}
          <div
            className="
            text-center
            md:text-right
            ml-auto
            mt-6
            md:mt-10
          "
          >
            <div className="text-4xl sm:text-5xl md:text-5xl md:mt-5  lg:text-7xl font-black text-[#556B2F]">
              146k+
            </div>
            <div className="text-xl sm:text-2xl md:text-5xl lg:text-7xl font-black text-[#556B2F]">
              Followers
            </div>
            <div className="text-xl sm:text-2xl md:text-7xl lg:text-7xl font-black text-[#556B2F]">
              on Instagram
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CreatorsSection = () => {
  const creators = [
    'JESNA M', 'SHAMSUDHEEN', 'SREELAL', 'ABIDA RASHEED', 'BADARUL MUNEER',
    'FAISAL', 'FAZIL', 'FEROZ', 'HENNA AYOOB', 'HENNA GAZAL',
    'ISHAQ', 'JAVAD', 'JESNA JAMES', 'KADEEJA', 'PHILIP',
    'SAFEENA', 'SHAFI', 'SHAHEEN', 'SUHAIL', 'SUHANA'
  ];

  return (
    <section className="py-12 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          <span className="text-[#8dc73d]">Creators </span>
          <span className="text-white">we Work with</span>
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll-creators">
            {[...creators, ...creators].map((name, idx) => (
              <div key={idx} className="flex-shrink-0 w-64">
                <div className="relative mb-4">
                  <div className="w-full aspect-[3/4] bg-gray-600 rounded-2xl"></div>
                </div>
                <div className="text-[#8dc73d] text-xl font-extrabold text-center uppercase">{name}</div>
                <div className="text-white text-base font-semibold text-center">Content Creator</div>
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



export default HeroSection;
