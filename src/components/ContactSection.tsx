import { useState } from 'react';

interface ContactSectionProps {
  heroImg: string;
}

export function ContactSection({ heroImg }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interests: [] as string[],
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const interestOptions = [
    'Property Management Services',
    'Repositioning Services',
    'Design & Implementation',
    'Short or Long Term Rentals',
    'Acquisition & Disposition',
    'Investment Analysis',
    'Other'
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-16 lg:py-24">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Form */}
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-[3px] lg:tracking-[5px] leading-tight text-balance">
                Let's Discuss Your Property Needs
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Ready to transform your property investment? Get in touch with our expert team for a personalized consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-3">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/20 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#ab0000] focus:bg-white/10 transition-all duration-300 backdrop-blur-sm placeholder-white/50"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-3">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-white/5 border border-white/20 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#ab0000] focus:bg-white/10 transition-all duration-300 backdrop-blur-sm placeholder-white/50"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-white/5 border border-white/20 rounded-xl text-white px-6 py-4 focus:outline-none focus:border-[#ab0000] focus:bg-white/10 transition-all duration-300 backdrop-blur-sm placeholder-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-4">
                  I am interested in discussing... (select all that apply)
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {interestOptions.map((option, index) => (
                    <label key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#ab0000]/30 transition-all duration-300 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.interests.includes(option)}
                        onChange={() => handleInterestChange(option)}
                        className="w-5 h-5 bg-white/10 border-2 border-white/30 rounded text-[#ab0000] focus:ring-[#ab0000] focus:ring-2"
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/20 rounded-xl text-white px-6 py-4 resize-none focus:outline-none focus:border-[#ab0000] focus:bg-white/10 transition-all duration-300 backdrop-blur-sm placeholder-white/50"
                  placeholder="Tell us more about your property needs and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#ab0000] text-white px-10 py-4 rounded-full hover:bg-[#8a0000] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ab0000]/40 font-semibold tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#890000] to-[#ab0000] p-8 lg:p-12 rounded-2xl shadow-2xl border border-[#ab0000]/30 space-y-8 lg:space-y-12 h-full">
              <div className="text-center">
                <img
                  src={heroImg}
                  alt="Red Door Hero"
                  className="w-full max-w-sm mx-auto h-48 lg:h-64 object-cover rounded-xl shadow-lg"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-xl lg:text-2xl tracking-wide">Business Hours</h3>
                  <div className="text-white/90 space-y-2">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </p>
                    <p className="text-[#ffeb3b] font-medium">Online Support Available 24/7</p>
                  </div>
                </div>

                <div className="h-px bg-white/30"></div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-xl lg:text-2xl tracking-wide">Service Area</h3>
                  <div className="text-white/90">
                    <p className="text-lg">Phoenix, Arizona</p>
                    <p>& Surrounding Metro Areas</p>
                  </div>
                </div>

                <div className="h-px bg-white/30"></div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-xl lg:text-2xl tracking-wide">Get in Touch</h3>
                  <div className="text-white/90 space-y-3">
                    <a href="tel:480-501-5151" className="flex items-center space-x-3 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-lg font-medium">480-501-5151</span>
                    </a>
                    <a href="mailto:Red.Door.Management.AZ@gmail.com" className="flex items-center space-x-3 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Red.Door.Management.AZ@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}