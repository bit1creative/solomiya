import { Link } from 'react-router-dom';

export const AboutUsSection = () => (
  <section className="flex min-h-[calc(100dvh-40px)] flex-col items-center p-4">
    <h3 className="my-4 text-center font-yuni-hair text-5xl">About Us</h3>
    <div className="font-nice-regular text-4xl">
      <span className="italic">
        Ivanna Kozachenko, Vsevolod Kazarin , Andrii Ushytskyi, Sebastian Wells and Kollektiv Scrollan{' '}
      </span>
      are working to make this magazine exist.
    </div>
    <Link className="my-4 block text-center font-yuni-black text-5xl" to="/contact-us">
      Contact Us
    </Link>
    <img src={'/public/images/about-us.jpg'} loading="lazy" />
  </section>
);
