import { ScrollRestoration } from 'react-router-dom';

import { AnimatedLink } from 'Components/common/AnimatedLink';
import { HeroSection, IssuesSection } from 'Components/pages/Home';
import { Footer } from 'Layout/components/Footer';

export const HomePage = () => (
  <div className="flex snap-y flex-col gap-4">
    <ScrollRestoration />
    <HeroSection />
    <div className="mx-auto w-max">
      <AnimatedLink
        to="about"
        relative="path"
        className="block text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl"
      >
        Read more
      </AnimatedLink>
    </div>
    <IssuesSection />
    <Footer />
  </div>
);
