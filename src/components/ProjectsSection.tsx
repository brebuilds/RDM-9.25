interface ProjectsSectionProps {
  projectImages: string[];
}

export function ProjectsSection({ projectImages }: ProjectsSectionProps) {
  const projects = [
    {
      title: "Landmark On 67th",
      description: "56 Unit - New Construction",
      year: "2023",
      image: projectImages[0],
      type: "New Construction"
    },
    {
      title: "Hillside",
      description: "Luxury Air BnB",
      year: "2022",
      image: projectImages[1],
      type: "Luxury Rental"
    },
    {
      title: "Boho On 40th Street",
      description: "56 Unit - Complete remodel",
      year: "2019",
      image: projectImages[2],
      type: "Renovation"
    },
    {
      title: "Ocean Isle Beach House",
      description: "Luxury Air BnB",
      year: "2022",
      image: projectImages[3],
      type: "Luxury Rental"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-16 lg:py-24">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-[4px] lg:tracking-[6px]">
              OUR PROJECTS
            </h2>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl text-balance">
              Showcasing our expertise in property development, renovation, and management across Phoenix.
            </p>
          </div>
          <div>
            <a
              href="#portfolio"
              className="inline-flex items-center border-2 border-[#ab0000] text-[#ab0000] px-8 py-4 rounded-full hover:bg-[#ab0000] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ab0000]/30 font-medium tracking-wide group"
            >
              VIEW FULL PORTFOLIO
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ab0000]/10 hover:border-[#ab0000]/30">
                {/* Project Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ab0000] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 lg:p-8 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-[#ab0000] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/80">{project.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-white/60 font-medium">Completed {project.year}</span>
                    <div className="flex items-center text-[#ab0000] group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-medium mr-2">View Details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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