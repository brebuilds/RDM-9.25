import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  logoImg: string;
  svgPaths: any;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ logoImg, svgPaths, currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const EmailIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 30">
      <path d={svgPaths.pc586380} fill="white" />
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 21 30">
      <path d={svgPaths.p4f8280} fill="white" />
    </svg>
  );

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Contact', page: 'contact' },
    { label: 'Multifamily Rentals', page: 'multifamily' },
    { label: 'Vacation Rentals', page: 'vacation' }
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-gradient-to-b from-[#181818]/95 to-[#181818]/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container-fluid">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Phone - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:480.501.1515" 
              className="bg-transparent border border-[#ab0000] text-white px-6 py-3 rounded-full hover:bg-[#ab0000] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ab0000]/25 font-medium tracking-wide"
            >
              480.501.1515
            </a>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center max-w-[150px]">
            <img 
              src={logoImg} 
              alt="Red Door Management" 
              className="h-4 lg:h-6 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleNavigation('home')}
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="mailto:walter@familycfo.net" 
              className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Email us"
            >
              <EmailIcon />
            </a>
            <a 
              href="https://web.whatsapp.com/send" 
              className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden lg:block border-t border-white/20">
          <nav className="py-4">
            <div className="flex justify-center">
              <div className="flex items-center gap-12">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.page)}
                    className={`text-white font-medium tracking-wide transition-all duration-300 hover:text-[#ab0000] hover:scale-105 relative group ${
                      currentPage === item.page ? 'text-[#ab0000]' : ''
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#ab0000] transition-all duration-300 ${
                      currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full text-left text-white font-medium tracking-wide transition-colors hover:text-[#ab0000] py-2 ${
                    currentPage === item.page ? 'text-[#ab0000]' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile phone number */}
              <div className="pt-4 border-t border-white/20">
                <a 
                  href="tel:480.501.1515" 
                  className="block bg-transparent border border-[#ab0000] text-white px-6 py-3 rounded-full hover:bg-[#ab0000] transition-colors text-center font-medium"
                >
                  480.501.1515
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}