import video from 'Assets/videos/hero-section-vid.png';

export const HeroSection = () => (
  <section className="snap-start">
    <div className="w-full px-6 pt-24">
      <img className="shadow-2xl" src={video} alt="solomiya-mag-overview" />
    </div>
    <div className="mt-6 px-4 text-center font-nice-regular text-3xl">
      <h2>
        Solomiya is an artists-run independent magazine exploring and showcasing Ukrainian cultural and artistic scene.
      </h2>
    </div>
  </section>
);
