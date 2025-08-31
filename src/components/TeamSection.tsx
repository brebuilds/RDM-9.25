interface TeamSectionProps {
  teamImages: string[];
}

export function TeamSection({ teamImages }: TeamSectionProps) {
  const teamMembers = [
    {
      name: "Edward Chapman",
      title: "Designated Broker",
      image: teamImages[0],
      link: "https://rdm-az.com/ed"
    },
    {
      name: "Taylor Wilson",
      title: "Property Manager",
      image: teamImages[1], // This should be imgBackground1 from App.tsx
      link: "https://rdm-az.com/view-bio"
    },
    {
      name: "Hunter Kubica",
      title: "Director of Accounting",
      image: teamImages[2],
      link: "https://rdm-az.com/hunter"
    },
    {
      name: "Summer Caskey",
      title: "Accounting",
      image: teamImages[3],
      link: "https://rdm-az.com/hunter"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-black py-16 lg:py-24">
      <div className="container-fluid">
        {/* Section Header */}
        

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ab0000]/10">
                {/* Team Member Image - using background-image like the original Figma import */}
                <div 
                  className="relative h-80 lg:h-96 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Gradient overlay like the original */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Team Member Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <p className="text-[#ab0000] font-medium mb-2 tracking-wide">{member.title}</p>
                    <h3 className="text-xl font-semibold mb-4">{member.name}</h3>
                    <a 
                      href={member.link}
                      className="inline-flex items-center text-sm font-medium text-white/80 hover:text-[#ab0000] transition-colors group/link"
                    >
                      VIEW BIO
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}