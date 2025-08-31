import imgPropertyManagement from "../images/property-management.png";
import imgConstructionRepositioning from "../images/construction-repositioning.png";
import imgDesignImplementation from "../images/design-implementation.png";
import imgRentalsShortLongTerm from "../images/rentals-short-long-term.png";
import imgAcquisitionDisposition from "../images/acquisition-disposition.png";
import imgInvestmentAnalysis from "../images/investment-analysis.png";

interface Service {
  title: string;
  image: string;
  description: string;
  features: string[];
}

export function ServicesOverviewSection() {
  const allServices: Service[] = [
    {
      title: "Property Management",
      image: imgPropertyManagement,
      description: "Comprehensive property management services to maximize your investment returns.",
      features: ["Tenant Screening", "Rent Collection", "Maintenance Coordination", "Financial Reporting"]
    },
    {
      title: "Construction & Repositioning",
      image: imgConstructionRepositioning,
      description: "Strategic repositioning and construction services to enhance property value.",
      features: ["Value Engineering", "Project Management", "Quality Control", "Timeline Optimization"]
    },
    {
      title: "Design & Implementation",
      image: imgDesignImplementation,
      description: "Professional design services that transform properties into profitable assets.",
      features: ["Interior Design", "Space Planning", "Material Selection", "Implementation Management"]
    },
    {
      title: "Rentals Short & Long Term",
      image: imgRentalsShortLongTerm,
      description: "Flexible rental solutions for both short-term vacation and long-term residential properties.",
      features: ["Vacation Rentals", "Long-term Leasing", "Market Analysis", "Revenue Optimization"]
    },
    {
      title: "Acquisition & Disposition",
      image: imgAcquisitionDisposition,
      description: "Expert guidance through property acquisition and strategic disposition processes.",
      features: ["Market Research", "Deal Structuring", "Due Diligence", "Exit Strategy Planning"]
    },
    {
      title: "Investment Analysis",
      image: imgInvestmentAnalysis,
      description: "Data-driven investment analysis to identify opportunities and maximize returns.",
      features: ["Cash Flow Analysis", "ROI Projections", "Market Comparables", "Risk Assessment"]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] py-16 lg:py-24">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="mb-8">
            <p className="text-[#ab0000] text-lg lg:text-xl tracking-[4px] font-light">
              OUR SERVICES
            </p>
          </div>
          <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[2px] mb-6">
            What We Do
          </h2>
          <p className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto text-balance">
            Comprehensive property management solutions designed to maximize your investment potential.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ab0000] to-[#ff4444] mx-auto mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {allServices.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-[#ab0000]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ab0000]/25"
            >
              {/* Service Image */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Service Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 lg:p-8">
                <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#ab0000] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-white/70 text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className="w-full bg-transparent border-2 border-[#ab0000] text-[#ab0000] hover:bg-[#ab0000] hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-medium tracking-wide">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}