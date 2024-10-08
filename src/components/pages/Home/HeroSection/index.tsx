import { useGetIssue } from 'Hooks/useGetIssue';

import { SlideShow } from './SlideShow';

export const HeroSection = () => {
  const issue = useGetIssue();

  return (
    <section className="snap-start">
      <div className="w-full px-6 pt-16">
        <SlideShow key={`slideshow-${issue}`} />
      </div>
      <div className="mt-6 px-4 text-center font-nice-regular text-3xl md:px-10 lg:mt-6 lg:px-20 lg:text-5xl xl:text-6xl">
        <h2>
          Solomiya is an artist-run independent magazine exploring and showcasing the Ukrainian cultural and artistic
          scene.
        </h2>
      </div>
    </section>
  );
};
