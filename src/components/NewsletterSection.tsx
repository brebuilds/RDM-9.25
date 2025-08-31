export function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-16 lg:py-24">
      <div className="container-fluid text-center">
        <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight text-balance">
              Your Trusted Partner in Comprehensive<br className="hidden sm:block" />
              Property Management Solutions
            </h2>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto text-balance">
              Stay updated with our latest projects, industry insights, and exclusive offers.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-2xl mx-auto gap-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-6 py-4 bg-white/5 border border-[#ab0000]/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#ab0000] focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#ab0000] text-white px-8 py-4 rounded-full hover:bg-[#8a0000] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ab0000]/30 font-medium tracking-wide whitespace-nowrap"
            >
              Stay Connected
            </button>
          </form>

          <p className="text-white/50 text-sm">
            We respect your privacy and never share your information.
          </p>
        </div>
      </div>
    </section>
  );
}