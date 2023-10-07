import { Link } from 'react-router-dom';

import { HeroSection, IssuesSection } from 'Components/pages/Home';
import { Footer } from 'Layout/components/Footer';

export const HomePage = () => (
  <div className="flex snap-y flex-col gap-4 pb-4">
    <HeroSection />
    <Link to="/" className="my-2 block text-center font-yuni-black text-3xl lg:my-16 lg:text-8xl">
      Read more
    </Link>
    <IssuesSection />
    <Footer />
  </div>
);
