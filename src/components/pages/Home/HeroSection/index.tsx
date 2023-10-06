import { useGetIssue } from 'Hooks/useGetIssue';

import { SlideShow } from './SlideShow';

export const HeroSection = () => {
  const issue = useGetIssue();

  return (
    <section className="snap-start">
      <div className="w-full px-6 pt-24">
        <SlideShow key={`slideshow-${issue}`} />
      </div>
      <div className="text-balance mt-6 px-4 text-center font-nice-regular text-3xl lg:mt-6 lg:px-20 lg:text-6xl lg:leading-[4rem]">
        <h2>
          Solomiya is an artists-run independent magazine exploring and showcasing Ukrainian cultural and artistic
          scene.
        </h2>
      </div>
    </section>
  );
};
