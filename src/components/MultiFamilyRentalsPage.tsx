import svgPaths from "../imports/svg-vapmwwmjes";
import imgLink from "../images/phoenix-area.png";
import imgLink1 from "../images/property-management.png";
import imgLink2 from "../images/red-door-background.png";
import imgLink3 from "../images/construction-repositioning.png";
import imgLink4 from "../images/design-implementation.png";
import imgLink5 from "../images/rentals-short-long-term.png";
import imgLink6 from "../images/acquisition-disposition.png";
import imgLink7 from "../images/investment-analysis.png";

export function MultiFamilyRentalsPage() {
  const properties = [
    { id: 1, image: imgLink, alt: "Landmark Multi-Family Property" },
    { id: 2, image: imgLink1, alt: "Modern Multi-Family Development" },
    { id: 3, image: imgLink2, alt: "Contemporary Multi-Family Complex" },
    { id: 4, image: imgLink3, alt: "Multi-Family Rental Community" },
    { id: 5, image: imgLink4, alt: "Urban Multi-Family Housing" },
    { id: 6, image: imgLink5, alt: "Multi-Family Investment Property" },
    { id: 7, image: imgLink6, alt: "Multi-Family Residential Complex" },
    { id: 8, image: imgLink7, alt: "Multi-Family Rental Development" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-16 lg:py-24">
        <div className="container-fluid text-center">
          <div className="mb-8 lg:mb-12">
            <p className="text-[#ab0000] text-lg lg:text-xl tracking-[4px] font-light">
              RED DOOR MANAGEMENT
            </p>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-[8px] lg:tracking-[12px] mb-8">
            Multi-Family Rentals
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ab0000] to-[#ff4444] mx-auto"></div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {properties.map((property) => (
              <div 
                key={property.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-[#ab0000]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ab0000]/25"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-[#ab0000]/90 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-medium text-sm lg:text-base">
                        {property.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] py-16 lg:py-20">
        <div className="container-fluid text-center">
          <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-6">
            Ready to Maximize Your Multi-Family Investment?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Our comprehensive property management services are designed to optimize your multi-family rental returns while maintaining high tenant satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ab0000] hover:bg-[#8b0000] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ab0000]/25 font-medium tracking-wide">
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-white/30 hover:border-[#ab0000] hover:bg-[#ab0000]/10 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium tracking-wide">
              View Our Services
            </button>
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