import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

import ValuesSection from '@/components/sections/ValuesSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />

      <ValuesSection />
      <ExperienceSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
