import nisam from "./assets/nisam vm.png";

export function CourseMentorSection() {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          <span className="text-white">Course </span>
          <span className="text-[#8dc73d]">Mentor</span>
        </h2>

        <div className="relative min-h-[420px] md:min-h-[500px]">
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
         min-h-fit
h-[303px]
sm:h-[318px]
md:h-[373px]
lg:h-[380px]
xl:h-[380px]
          flex
          flex-col
          md:flex-row
          items-center
          md:items-stretch
          justify-between

          overflow-visible   /* 🔑 IMPORTANT */
        "
          >
            {/* Mentor Image */}

            <div
              className="
                        absolute
                            z-30
                            pointer-events-none
                            lg:w-[450px]
                        md:w-[400px]
                            md:mt-[-122px]
                            md:ml-[-40px]
                            lg:mt-[-172px]
                            lg:ml-[30px]
                            sm:mt-[-107px]
                            sm:ml-[-350px]
                            sm:w-[380px]
                            w-[200px]
                            mt-[79px]
                            ml-[-150px]
                          
                            
                        "
            >
              <img
                src={nisam}
                alt="Nisam VM"
                className="
    "
              />
            </div>

            {/* Name Badge */}
            <div
              className="
            bg-[#8dc73d]
            rounded-[40px_40px_40px_0]
            px-5 py-4
            
            

            mt-28
            ml-[110px]
            sm:ml-[20px]
            sm:w-[230px]
            
            md:absolute
            md:w-[250px]
            md:mt-0
            md:left-[32%]
            md:top-36
            md:-translate-y-1/2

            lg:w-[300px]
            lg:ml-[-20px]
            lg:mt-[40px]

            z-20
            text-center
            md:text-left
          "
            >
              <div className="text-xl  md:text-2xl  md:pl-[50px] font-extrabold text-white uppercase mb-1">
                NISAM VM
              </div>
              <div className="text-sm md:text-base md:pl-[50px]  font-semibold text-white leading-snug">
                CEO - Desgro Media
                <br />
                Demand School
              </div>
            </div>

            {/* Stats */}
            <div
              className="
            text-center
            sm:ml-[500px]
            
            md:text-right
            ml-auto
            mt-6
            md:mt-10
            lg:ml-[660px]
          "
            >
              <div className="text-4xl ml-[-200px] mt-[-300px] sm:text-5xl md:text-5xl sm:ml-[0px] md:mt-5 sm:mt-[-230px] lg:text-7xl font-black text-[#556B2F]">
                146k+
              </div>
              <div className="text-xl ml-[-163px] sm:text-4xl md:text-4xl sm:ml-[-50px] lg:text-5xl font-black text-[#556B2F]">
                Followers
              </div>
              <div className="text-xl ml-[-200px] sm:text-4xl sm:ml-[-100px] md:text-4xl lg:ml-[-150px] lg:mt-2 lg:w-[400px] lg:text-6xl font-black text-[#556B2F]">
                on Instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
