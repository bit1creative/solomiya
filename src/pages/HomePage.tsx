import { Link } from 'react-router-dom';

import { HeroSection, IssuesSection } from 'Components/pages/Home';

export const HomePage = () => (
  <div className="flex snap-y flex-col gap-4 pb-4">
    <HeroSection />
    <Link to="/" className="my-2 block text-center font-yuni-black text-3xl">
      Read more
    </Link>
    <IssuesSection />
  </div>
);
