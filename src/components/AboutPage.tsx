import { TeamSection } from './TeamSection';

interface AboutPageProps {
  teamImages: string[];
}

export function AboutPage({ teamImages }: AboutPageProps) {
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
            About Us
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto text-balance">
            Your trusted partner in property management excellence since 2015.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection teamImages={teamImages} />

      {/* Content Section */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 tracking-wide">
                Our Mission
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                At Red Door Management, we're committed to providing exceptional property management services 
                that maximize your investment returns while maintaining the highest standards of tenant satisfaction. 
                Our comprehensive approach ensures your properties are well-maintained, profitable, and positioned 
                for long-term success.
              </p>
            </div>

            <div className="bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6 tracking-wide">
                Why Choose Red Door Management?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#ab0000] font-medium mb-3">Local Expertise</h3>
                  <p className="text-white/70">
                    Deep knowledge of the Arizona market with years of experience in property management.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#ab0000] font-medium mb-3">Full-Service Solutions</h3>
                  <p className="text-white/70">
                    From tenant screening to maintenance coordination, we handle every aspect of property management.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#ab0000] font-medium mb-3">Technology-Driven</h3>
                  <p className="text-white/70">
                    Modern tools and systems for efficient communication and transparent reporting.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#ab0000] font-medium mb-3">Proven Results</h3>
                  <p className="text-white/70">
                    Track record of maximizing rental income while maintaining high occupancy rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}