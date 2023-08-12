import { Link } from 'react-router-dom';

import video from 'Assets/videos/hero-section-vid.png';

export const HeroSection = () => (
  <div className="snap-start">
    <div className="w-full px-6 pt-16">
      <img className="shadow-2xl" src={video} alt="solomiya-mag-overview" />
    </div>
    <div className="mt-6 px-4 text-center font-nice-regular text-3xl">
      <p>
        Solomiya is an artists-run independent magazine exploring and showcasing Ukrainian cultural and artistic scene.
      </p>
      <Link to="/" className="my-2 block font-yuni-black">
        Read more
      </Link>
    </div>
  </div>
);
