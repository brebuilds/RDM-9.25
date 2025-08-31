// Production version of App.tsx for GoDaddy hosting
// Replace App.tsx with this file after setting up your images folder

import svgPaths from "./imports/svg-ezmggktr9o";

// Standard image imports for production (replace figma:asset imports)
import imgReddoortextCopy291E7C95413WPng from "./images/red-door-text-logo.png";
import imgReddoorlogo253E49B0F328WPng from "./images/red-door-logo.png";
import imgEdwardChapman from "./images/edward-chapman.png";
import imgBackground1 from "./images/taylor-wilson.png";
import imgBackground2 from "./images/hunter-kubica.png";
import imgBackground3 from "./images/summer-caskey.png";
import imgImage from "./images/why-choose-us.png";
import imgRsW600CgTrueWebp from "./images/project-1.png";
import img95E6B5Ae52F650D70Ca461A9Da851A64UncroppedScaledWithin13441008Webp from "./images/project-2.png";
import img4101EBelleviewStPhoenixAzBuildingPhoto318WJpg from "./images/project-3.png";
import imgFa6F3789F7Ce498C5F7Bac96Be3675E2UncroppedScaledWithin13441008Webp from "./images/project-4.png";
import imgBohoBefore1920WPng from "./images/before-image.png";
import imgBoho1920WJpg from "./images/after-image.png";
import imgRedDoorHeroImage429WPng from "./images/red-door-hero.png";
import imgReddoorlogo2Png from "./images/red-door-logo-footer.png";
import redDoorBackground from "./images/red-door-background.png";

import { Router } from './components/Router';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { MultiFamilyRentalsPage } from './components/MultiFamilyRentalsPage';
import { VacationRentalsPage } from './components/VacationRentalsPage';
import { Footer } from './components/Footer';

export default function App() {
  // Define team images with standard imports
  const teamImages = [
    imgEdwardChapman,  // Edward Chapman - Designated Broker
    imgBackground1,    // Taylor Wilson - Property Manager
    imgBackground2,    // Hunter Kubica - Director of Accounting  
    imgBackground3     // Summer Caskey - Accounting
  ];

  // Project images for homepage
  const projectImages = [
    imgRsW600CgTrueWebp,
    img95E6B5Ae52F650D70Ca461A9Da851A64UncroppedScaledWithin13441008Webp,
    img4101EBelleviewStPhoenixAzBuildingPhoto318WJpg,
    imgFa6F3789F7Ce498C5F7Bac96Be3675E2UncroppedScaledWithin13441008Webp
  ];

  // Render different pages based on current route
  const renderPage = (currentPage: string) => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            logoImg={imgReddoorlogo253E49B0F328WPng}
            backgroundImg={redDoorBackground}
            whyChooseUsImg={imgImage}
            projectImages={projectImages}
            beforeImg={imgBohoBefore1920WPng}
            afterImg={imgBoho1920WJpg}
            heroImg={imgRedDoorHeroImage429WPng}
          />
        );
      case 'about':
        return <AboutPage teamImages={teamImages} />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'multifamily':
        return <MultiFamilyRentalsPage />;
      case 'vacation':
        return <VacationRentalsPage />;
      default:
        return (
          <HomePage
            logoImg={imgReddoorlogo253E49B0F328WPng}
            backgroundImg={redDoorBackground}
            whyChooseUsImg={imgImage}
            projectImages={projectImages}
            beforeImg={imgBohoBefore1920WPng}
            afterImg={imgBoho1920WJpg}
            heroImg={imgRedDoorHeroImage429WPng}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Router defaultPage="home">
        {(currentPage, setCurrentPage) => (
          <>
            <Header 
              logoImg={imgReddoortextCopy291E7C95413WPng}
              svgPaths={svgPaths}
              currentPage={currentPage}
              onNavigate={setCurrentPage}
            />
            {renderPage(currentPage)}
            <Footer 
              logoImg={imgReddoorlogo2Png}
            />
          </>
        )}
      </Router>
    </div>
  );
}