interface FooterProps {
  logoImg: string;
}

export function Footer({ logoImg }: FooterProps) {
  const footerLinks = {
    services: [
      { label: 'Property Management', href: '#management' },
      { label: 'Design & Renovation', href: '#design' },
      { label: 'Investment Analysis', href: '#investment' },
      { label: 'Vacation Rentals', href: '#vacation' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Licensing', href: '#licensing' }
    ]
  };

  return (
    <>
      {/* Red Banner */}
      

      {/* Main Footer */}
      <footer className="bg-gradient-to-b from-[#181818] to-[#0f0f0f] py-12 lg:py-16">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2 space-y-6">
              <img
                src={logoImg}
                alt="Red Door Management"
                className="h-16 lg:h-20 w-auto object-contain"
              />
              <p className="text-white/70 leading-relaxed max-w-md">
                Your trusted partner for comprehensive property management solutions in Phoenix, Arizona. 
                We transform properties and maximize investments through strategic management and innovative design.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ab0000] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ab0000] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/70 hover:text-[#ab0000] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/70 hover:text-[#ab0000] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center lg:text-left">
                <a
                  href="tel:602-432-1380"
                  className="text-white font-medium px-6 py-3 rounded-full border border-white/20 hover:border-[#ab0000] hover:text-[#ab0000] transition-all duration-300"
                >
                  602-432-1380
                </a>
                <div className="text-white/70">
                  <p>Phoenix, AZ & Surrounding Areas</p>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-6">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-white/50 text-sm mt-8 pt-6 border-t border-white/10">
              <p>&copy; {new Date().getFullYear()} Red Door Management. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}