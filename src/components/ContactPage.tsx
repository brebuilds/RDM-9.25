import { useState } from 'react';
import contactImage from '../images/contact-image.png';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: [] as string[],
    message: ''
  });

  const services = [
    'Property Management Services',
    'Repositioning Services', 
    'Design & Implementation',
    'Short or Long Term Rentals',
    'Acquisition & Disposition',
    'Investment Analysis',
    'Other'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-16 lg:py-24">
        <div className="container-fluid text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-[8px] lg:tracking-[12px] mb-8">
            CONTACT US
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ab0000] to-[#ff4444] mx-auto mb-8"></div>
          <p className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto text-balance">
            Ready to discuss your property management needs? Get in touch with our expert team.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-[#1a1a1a] rounded-2xl p-8 lg:p-12">
              <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-8 tracking-wide">
                LET'S DISCUSS YOUR PROPERTY NEEDS
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-[#666666] text-white px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#ab0000] transition-all"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-white/80 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-[#666666] text-white px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#ab0000] transition-all"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-[#666666] text-white px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#ab0000] transition-all"
                    required
                  />
                </div>

                {/* Services Interest */}
                <div>
                  <p className="text-white/80 mb-4">
                    I am interested in discussing... (select all that apply)
                  </p>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 bg-transparent border-2 border-white/40 rounded checked:bg-[#ab0000] checked:border-[#ab0000] focus:ring-2 focus:ring-[#ab0000] focus:ring-offset-0 transition-all mr-3"
                        />
                        <span className="text-white/80 group-hover:text-white transition-colors">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Or write your message below!
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full bg-[#666666] text-white px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#ab0000] transition-all resize-none"
                    placeholder="Tell us about your property management needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#ab0000] hover:bg-[#8b0000] text-white px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ab0000]/25 font-medium tracking-wide"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 bg-[#ab0000] rounded-2xl p-8 lg:p-12 text-white">
              {/* Logo */}
              <div className="text-center mb-8">
                <div className="bg-black/50 rounded-xl p-6 inline-block">
                  <div className="text-4xl font-bold tracking-[8px]">
                    RD
                  </div>
                  <div className="text-sm tracking-[3px] mt-2">
                    RED DOOR MANAGEMENT
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Hours</h3>
                <div className="h-px bg-white/30 mb-4"></div>
                <p className="text-white/90 leading-relaxed">
                  Monday - Friday 9:00 am til 5:00 pm<br />
                  Or online anytime!
                </p>
              </div>

              {/* Service Area */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Service area</h3>
                <div className="h-px bg-white/30 mb-4"></div>
                <p className="text-white/90">
                  Phoenix, AZ & Surrounding Areas
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact</h3>
                <div className="h-px bg-white/30 mb-4"></div>
                <div className="space-y-2">
                  <a 
                    href="tel:480-501-5151" 
                    className="block text-white/90 hover:text-white transition-colors"
                  >
                    480-501-5151
                  </a>
                  <a 
                    href="mailto:Red.Door.Management.AZ@gmail.com" 
                    className="block text-white/90 hover:text-white transition-colors break-all"
                  >
                    Red.Door.Management.AZ@gmail.com
                  </a>
                </div>
              </div>
            </div>
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