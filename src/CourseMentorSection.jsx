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
h-[250px]
sm:h-[300px]
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
                            lg:mt-[-172px]
                            sm:mt-[-105px]
                            sm:w-[250px]
                            sm:mt-[120px]
                            w-[200px]
                            mt-[160px]
                           
                            
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
                CEO - Desgro Media
                <br />
                Demand School
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
              <div className="text-4xl sm:text-5xl md:text-5xl md:mt-5  lg:text-4xl font-black text-[#556B2F]">
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
}
