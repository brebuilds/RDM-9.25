import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      title: "Property Management",
      description: "Comprehensive property management tailored to your property's needs.",
      image: "https://images.unsplash.com/photo-1611973711282-c3bb21b4c933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMHByb3BlcnR5JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NTU3Njk5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Repositioning",
      description: "Expert repositioning solutions for maximizing your property.",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcmVwb3NpdGlvbmluZyUyMHJlbm92YXRpb258ZW58MXx8fHwxNzU1NzY5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Design & Implementation",
      description: "Complete renovation guide for your property improvements.",
      image: "https://images.unsplash.com/photo-1557847211-a0be5b0ed242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGltcGxlbWVudGF0aW9uJTIwbW9kZXJufGVufDF8fHx8MTc1NTc2OTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Short & Long Term Rentals",
      description: "We offer a unique marketing system for all vacancies.",
      image: "https://images.unsplash.com/photo-1711048090317-4ccd555851a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW50YWwlMjBwcm9wZXJ0eSUyMGludGVyaW9yJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTU3Njk5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Acquisition & Disposition",
      description: "Acquisition services to help analyze and purchase property on market or off market properties.",
      image: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWNxdWlzaXRpb24lMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc1NTc2OTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Investment Analysis",
      description: "Comprehensive investment decisions tailored to your property needs.",
      image: "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwYW5hbHlzaXMlMjBmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NTU3Njk5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-16 lg:py-24">
        <div className="container-fluid text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-[8px] lg:tracking-[12px] mb-8">
            OUR SERVICES
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ab0000] to-[#ff4444] mx-auto"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="container-fluid">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-[#ab0000]/90 to-[#8b0000]/95 backdrop-blur-sm border border-[#ab0000]/30 rounded-2xl p-6 lg:p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ab0000]/25 group"
              >
                {/* Image */}
                <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-xl lg:text-2xl tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="pt-4">
                    <button className="bg-black/50 hover:bg-black/80 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium tracking-wide w-full sm:w-auto">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] py-16 lg:py-20">
        <div className="container-fluid text-center">
          <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">
            Questions?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            We understand that every situation is unique and work to 
            customize our processes to meet your needs.
          </p>
          <p className="text-white/60 text-lg mb-12">
            Contact us and see what's possible.
          </p>
          
          <button className="bg-transparent border-2 border-white/30 hover:border-[#ab0000] hover:bg-[#ab0000]/10 text-white px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium tracking-wide">
            Contact
          </button>
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