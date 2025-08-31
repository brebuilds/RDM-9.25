import svgPaths from "../imports/svg-dpkmxfbgq5";
import imgSection from "../images/red-door-background.png";
import imgLink from "../images/phoenix-area.png";
import imgLink1 from "../images/property-management.png";
import imgLink2 from "../images/construction-repositioning.png";

export function VacationRentalsPage() {
  const properties = [
    {
      title: "Furnished Rentals",
      image: imgLink,
      buttonText: "View Projects",
      href: "#furnished-rentals"
    },
    {
      title: "Hillside Luxury Airbnb",
      image: imgLink1,
      buttonText: "View Property",
      href: "https://www.rdm-az.com/hillside---project-info"
    },
    {
      title: "Ocean Isle Beach House",
      image: imgLink2,
      buttonText: "View Property",
      href: "https://www.rdm-az.com/oib---project-info"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-32"
        style={{ backgroundImage: `url('${imgSection}')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-fluid relative z-10 text-center">
          <div className="mb-8 lg:mb-12">
            <p className="text-[#ab0000] text-lg lg:text-xl tracking-[4px] font-light">
              RED DOOR MANAGEMENT
            </p>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-[8px] lg:tracking-[12px] mb-8">
            Vacation Rentals
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ab0000] to-[#ff4444] mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
              We provide a wide range of professional services to meet your needs.
            </p>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
              We promise to provide every service with a smile and to your highest level of satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="container-fluid">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {properties.map((property, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-[#ab0000]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ab0000]/25"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 lg:p-8">
                  <h3 className="text-white font-semibold text-xl lg:text-2xl tracking-wide mb-6">
                    {property.title}
                  </h3>
                  
                  <a
                    href={property.href}
                    className="inline-block bg-transparent border-2 border-[#ab0000] text-[#ab0000] hover:bg-[#ab0000] hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 font-medium tracking-wide"
                  >
                    {property.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-black/70 text-lg mb-8">
              What People Say About Us
            </p>
            
            <div className="bg-black rounded-2xl p-8 lg:p-12">
              <blockquote className="text-white text-2xl lg:text-3xl font-medium leading-relaxed">
                "Amazing service. Can't wait to find out what's next!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-black text-2xl lg:text-3xl font-semibold text-center mb-12">
              Contact us any time
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-black text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full bg-transparent border-b border-black/30 focus:border-[#ab0000] px-4 py-3 text-black focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="emailAddress" className="block text-black text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    className="w-full bg-transparent border-b border-black/30 focus:border-[#ab0000] px-4 py-3 text-black focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block text-black text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full bg-transparent border-b border-black/30 focus:border-[#ab0000] px-4 py-3 text-black focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-black text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-black/30 focus:border-[#ab0000] px-4 py-3 text-black focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your vacation rental needs..."
                />
              </div>
              
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-[#ab0000] hover:bg-[#8b0000] text-white px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ab0000]/25 font-medium tracking-wide"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-gradient-to-r from-[#ab0000] to-[#8b0000] py-8 lg:py-12">
        <div className="container-fluid text-center">
          <h3 className="text-white text-lg lg:text-xl font-medium tracking-[3px] lg:tracking-[6px]">
            STRATEGIC MANAGEMENT FOR OPTIMAL RETURNS
          </h3>
        </div>
      </section>
    </div>
  );
}