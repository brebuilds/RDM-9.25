interface HeroSectionProps {
  logoImg: string;
  backgroundImg?: string;
}

export function HeroSection({
  logoImg,
  backgroundImg,
}: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-black py-16 lg:py-24 flex items-center">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Logo */}
            <div className="text-center lg:text-left max-w-sm">
              <img
                src={logoImg}
                alt="Red Door Management Logo"
                className="h-16 lg:h-20 w-auto max-w-full object-contain mx-auto lg:mx-0 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Heading */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-[3px] lg:tracking-[4px] leading-tight">
                SINGLE SOURCE
              </h1>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-[3px] lg:tracking-[4px] leading-tight">
                PROPERTY SOLUTIONS
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0">
              <p className="text-white/90 leading-relaxed text-balance">
                At Red Door Management, we believe that
                effective property management is about more than
                just overseeing buildings; it's about creating
                thriving spaces where businesses and communities
                can flourish. Whether you're a property owner
                looking to maximize your investment, an investor
                seeking profitable opportunities, or a tenant in
                search of the perfect space, our tailored
                solutions are designed to exceed your
                expectations.
              </p>
              <p className="text-white/90 leading-relaxed text-balance">
                With a team of seasoned professionals and a
                commitment to excellence, Red Door Management
                offers a full spectrum of property management
                services, ensuring that your property is
                well-maintained, efficiently run, and
                continuously optimized for value.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="relative min-h-[500px] lg:min-h-[700px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
            style={
              backgroundImg
                ? {
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            {/* Background overlay */}
            {backgroundImg && (
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
            )}

            {/* Contact Info */}
            <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <h3 className="text-white font-semibold tracking-[2px] text-xl lg:text-2xl">
                  HOURS
                </h3>
                <div className="text-white/90 space-y-2">
                  <p className="text-lg">Monday - Friday</p>
                  <p className="text-lg">9:00 am - 5:00 pm</p>
                  <p className="text-lg">& Online Anytime!</p>
                </div>
              </div>

              <div className="w-full max-w-xs h-px bg-gradient-to-r from-[#ab0000] to-[#ab0000]/30"></div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold tracking-[2px] text-xl lg:text-2xl">
                  SERVICE AREA
                </h3>
                <div className="text-white/90 space-y-2">
                  <p className="text-lg">Phoenix, AZ</p>
                  <p className="text-lg">& Surrounding Areas</p>
                </div>
              </div>

              <div className="w-full max-w-xs h-px bg-gradient-to-r from-[#ab0000] to-[#ab0000]/30"></div>

              <div className="space-y-6">
                <h3 className="text-white font-semibold tracking-[2px] text-xl lg:text-2xl">
                  CONTACT
                </h3>
                <p className="text-white/90 text-lg font-medium mb-4">
                  480.501.1515
                </p>
                <a
                  href="mailto:red.door.management.az@gmail.com"
                  className="inline-block bg-[#ab0000] text-white px-8 py-4 rounded-full hover:bg-[#8a0000] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ab0000]/30 font-medium tracking-wide"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}