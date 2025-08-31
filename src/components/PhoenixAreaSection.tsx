import imgPhoenixAreaRedDoorServicesPage1401WPng from "../images/phoenix-area.png";

interface PhoenixAreaSectionProps {
  backgroundImg?: string;
}

export function PhoenixAreaSection({ backgroundImg }: PhoenixAreaSectionProps) {
  // Use the imported Phoenix background image
  const phoenixBackground = backgroundImg || imgPhoenixAreaRedDoorServicesPage1401WPng;

  return (
    <section className="relative overflow-hidden">
      {/* Background Image - displayed naturally without overlays */}
      <div 
        className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${phoenixBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </section>
  );
}