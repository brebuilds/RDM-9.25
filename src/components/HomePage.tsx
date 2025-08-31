import { HeroSection } from './HeroSection';
import { ServicesOverviewSection } from './ServicesOverviewSection';
import { NewsletterSection } from './NewsletterSection';
import { WhyChooseUsSection } from './WhyChooseUsSection';
import { PhoenixAreaSection } from './PhoenixAreaSection';
import { ProjectsSection } from './ProjectsSection';
import { BeforeAfterSection } from './BeforeAfterSection';
import { ContactSection } from './ContactSection';

interface HomePageProps {
  logoImg: string;
  backgroundImg: string;
  whyChooseUsImg: string;
  projectImages: string[];
  beforeImg: string;
  afterImg: string;
  heroImg: string;
}

export function HomePage({
  logoImg,
  backgroundImg,
  whyChooseUsImg,
  projectImages,
  beforeImg,
  afterImg,
  heroImg
}: HomePageProps) {
  return (
    <>
      <HeroSection 
        logoImg={logoImg}
        backgroundImg={backgroundImg}
      />
      <ServicesOverviewSection />
      <NewsletterSection />
      <WhyChooseUsSection 
        backgroundImg={whyChooseUsImg}
      />
      <PhoenixAreaSection />
      <ProjectsSection 
        projectImages={projectImages}
      />
      <BeforeAfterSection 
        beforeImg={beforeImg}
        afterImg={afterImg}
      />
      <ContactSection 
        heroImg={heroImg}
      />
    </>
  );
}