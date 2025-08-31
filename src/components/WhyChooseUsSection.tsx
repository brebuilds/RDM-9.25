interface WhyChooseUsSectionProps {
  backgroundImg: string;
}

export function WhyChooseUsSection({ backgroundImg }: WhyChooseUsSectionProps) {
  const reasons = [
    {
      title: "Experienced Professionals",
      description: "Our team brings decades of experience across all aspects of property management, design, and construction. We have the expertise to handle even the most complex projects with confidence."
    },
    {
      title: "Customized Solutions",
      description: "We recognize that every property is unique. That's why we offer tailored solutions designed to meet the specific needs of your property and your business goals."
    },
    {
      title: "Client-Centric Approach",
      description: "At Red Door Management, your satisfaction is our top priority. We work closely with you to understand your needs and deliver results that not only meet but exceed your expectations."
    },
    {
      title: "Proven Track Record",
      description: "We have a history of delivering successful outcomes for our clients, from increasing occupancy rates to enhancing property value through strategic improvements."
    },
    {
      title: "Commitment to Innovation",
      description: "We stay ahead of industry trends and continuously seek out new ways to enhance our services, ensuring that your property benefits from the latest innovations in property management and design."
    }
  ];

  return (
    <section className="bg-black">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Image */}
        <div className="lg:w-1/2 relative">
          <div 
            className="h-64 lg:h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:from-transparent lg:to-black/30"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex items-center bg-gradient-to-br from-black via-[#0a0a0a] to-black">
          <div className="p-8 lg:p-16 xl:p-20 space-y-8 lg:space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight text-balance">
                Why Partner with Red<br />
                Door Management?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Discover the advantages of working with Phoenix's premier property management team.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-10">
              {reasons.map((reason, index) => (
                <div key={index} className="group">
                  <div className="space-y-3 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#ab0000]/30">
                    <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-[#ab0000] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-balance">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a 
                href="#services"
                className="inline-flex items-center bg-[#ab0000] text-white px-8 py-4 rounded-full hover:bg-[#8a0000] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ab0000]/30 font-medium tracking-wide group"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}