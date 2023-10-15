import { Link, ScrollRestoration } from 'react-router-dom';

import { HeroSection, IssuesSection } from 'Components/pages/Home';
import { Footer } from 'Layout/components/Footer';

export const HomePage = () => (
  <div className="flex snap-y flex-col gap-4">
    <ScrollRestoration />
    <HeroSection />
    <Link to="about" relative="path" className="block text-center font-yuni-black text-4xl lg:text-6xl">
      Read more
    </Link>
    <IssuesSection />
    <Footer />
  </div>
);
