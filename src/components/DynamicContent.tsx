import { useState, useEffect } from 'react';

interface ContentData {
  section: string;
  title: string;
  subtitle: string;
  description: string;
  button_text: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image_path?: string;
  order_index: number;
}

interface CMSData {
  content: ContentData[];
  team: TeamMember[];
}

// Hook for loading CMS content
export function useCMSContent() {
  const [cmsData, setCmsData] = useState<CMSData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCMSData() {
      try {
        // Try to load from CMS API first, fallback to static content
        const response = await fetch('/cms-api.php?action=all');
        
        if (response.ok) {
          const data = await response.json();
          setCmsData(data);
        } else {
          // Fallback to default content if CMS is not available
          setCmsData(getDefaultContent());
        }
      } catch (err) {
        // CMS not available, use default content
        setCmsData(getDefaultContent());
        setError('Using default content - CMS not connected');
      } finally {
        setLoading(false);
      }
    }

    loadCMSData();
  }, []);

  return { cmsData, loading, error };
}

// Default fallback content
function getDefaultContent(): CMSData {
  return {
    content: [
      {
        section: 'hero',
        title: 'Professional Property Management Services',
        subtitle: 'Red Door Management',
        description: 'Expert property management solutions in Phoenix, Arizona. We handle everything from tenant screening to maintenance coordination.',
        button_text: 'Get Started'
      },
      {
        section: 'about',
        title: 'About Red Door Management',
        subtitle: 'Your Trusted Property Management Partner',
        description: 'With years of experience in the Phoenix real estate market, Red Door Management provides comprehensive property management services for both residential and commercial properties.',
        button_text: 'Learn More'
      },
      {
        section: 'services',
        title: 'Our Services',
        subtitle: 'Comprehensive Property Management Solutions',
        description: 'From multi-family rentals to vacation properties, we offer complete management services tailored to your needs.',
        button_text: 'View Services'
      },
      {
        section: 'contact',
        title: 'Contact Information',
        subtitle: '',
        description: 'Phone: (555) 123-4567\nEmail: info@reddoormanagement.com\nAddress: 123 Main St, Phoenix, AZ 85001',
        button_text: 'Contact Us'
      }
    ],
    team: [
      {
        id: 1,
        name: 'Edward Chapman',
        position: 'Designated Broker',
        bio: 'Edward brings over 15 years of real estate experience to Red Door Management.',
        order_index: 1
      },
      {
        id: 2,
        name: 'Taylor Wilson',
        position: 'Property Manager',
        bio: 'Taylor specializes in residential property management and tenant relations.',
        order_index: 2
      },
      {
        id: 3,
        name: 'Hunter Kubica',
        position: 'Director of Accounting',
        bio: 'Hunter oversees all financial aspects of property management operations.',
        order_index: 3
      },
      {
        id: 4,
        name: 'Summer Caskey',
        position: 'Accounting',
        bio: 'Summer handles day-to-day accounting and financial reporting.',
        order_index: 4
      }
    ]
  };
}

// Helper function to get content by section
export function getContentBySection(cmsData: CMSData | null, section: string): ContentData | null {
  if (!cmsData) return null;
  return cmsData.content.find(item => item.section === section) || null;
}

// Dynamic content component
interface DynamicTextProps {
  section: string;
  field: 'title' | 'subtitle' | 'description' | 'button_text';
  fallback: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export function DynamicText({ 
  section, 
  field, 
  fallback, 
  className = '',
  as: Component = 'div'
}: DynamicTextProps) {
  const { cmsData } = useCMSContent();
  const content = getContentBySection(cmsData, section);
  const text = content?.[field] || fallback;

  return <Component className={className}>{text}</Component>;
}

// Enhanced team section that uses CMS data
interface DynamicTeamSectionProps {
  staticTeamImages: string[];
  className?: string;
}

export function DynamicTeamSection({ staticTeamImages, className }: DynamicTeamSectionProps) {
  const { cmsData, loading } = useCMSContent();

  if (loading) {
    return (
      <div className={`flex justify-center items-center py-12 ${className}`}>
        <div className="text-white">Loading team information...</div>
      </div>
    );
  }

  const teamMembers = cmsData?.team || [];

  return (
    <div className={className}>
      <div className="container-fluid">
        <div className="text-center mb-12">
          <DynamicText 
            section="about" 
            field="title" 
            fallback="Our Team" 
            as="h2" 
            className="text-white mb-4"
          />
          <DynamicText 
            section="about" 
            field="subtitle" 
            fallback="Meet the professionals managing your properties" 
            as="p" 
            className="text-gray-300 max-w-2xl mx-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="text-center">
              <div className="mb-4">
                <img
                  src={member.image_path || staticTeamImages[index] || staticTeamImages[0]}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-white text-xl mb-2">{member.name}</h3>
              <p className="text-red-500 mb-3">{member.position}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}