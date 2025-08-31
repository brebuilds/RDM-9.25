import { useState } from 'react';

interface BeforeAfterSectionProps {
  beforeImg: string;
  afterImg: string;
}

export function BeforeAfterSection({ beforeImg, afterImg }: BeforeAfterSectionProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-black py-16 lg:py-24">
      <div className="container-fluid">
        <div className="text-center space-y-12 lg:space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-[8px] lg:tracking-[12px] leading-relaxed">
              THE RED DOOR DIFFERENCE
            </h2>
            <p className="text-lg lg:text-xl font-medium italic text-[#ab0000] tracking-[2px] lg:tracking-[3px]">
              INTERACTIVE BEFORE & AFTER
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
              See the transformation power of our renovation and design expertise. Drag the slider to reveal the dramatic improvements.
            </p>
          </div>

          {/* Before/After Image Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-80 sm:h-96 lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl border border-white/20">
              {/* Before Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${beforeImg})` }}
              >
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    BEFORE
                  </span>
                </div>
              </div>
              
              {/* After Image with clip */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{ 
                  backgroundImage: `url(${afterImg})`,
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
              >
                <div className="absolute bottom-4 right-4">
                  <span className="bg-[#ab0000]/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    AFTER
                  </span>
                </div>
              </div>

              {/* Slider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-300"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Slider Handle */}
                <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-6 bg-gray-600 rounded-full"></div>
                      <div className="w-1.5 h-6 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hidden Range Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                aria-label="Before and after comparison slider"
              />
            </div>
            
            {/* Slider Instructions */}
            <div className="text-center mt-6">
              <p className="text-white/60 text-sm">Drag the slider or click anywhere to compare</p>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="#portfolio"
              className="inline-flex items-center bg-[#ab0000] text-white px-10 py-5 rounded-full hover:bg-[#8a0000] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ab0000]/40 font-semibold tracking-wide group text-lg"
            >
              VIEW PORTFOLIO FOR MORE TRANSFORMATIONS
              <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}