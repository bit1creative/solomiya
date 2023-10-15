import { useParams } from 'react-router-dom';

import { AnimatedLink } from 'Components/common/AnimatedLink';
import { SectionTitle } from 'Components/common/SectionTitle';

export const AboutUsSection = () => {
  const { issue } = useParams();
  return (
    <section className="flex min-h-[calc(100dvh-40px)] flex-col items-center justify-center p-4 md:mx-10 lg:min-h-full lg:p-14 xl:gap-y-4 xl:p-32">
      <SectionTitle title={'About Us'} />
      <div className="font-nice-regular text-4xl lg:text-center xl:text-6xl">
        <span className="italic">
          Ivanna Kozachenko, Vsevolod Kazarin, Andrii Ushytskyi, Sebastian Wells and Kollektiv Scrollan{' '}
        </span>
        are working to make this magazine exist.
      </div>
      <AnimatedLink
        className="my-4 block text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl"
        to={`/issue/${issue}/contact-us`}
      >
        Contact Us
      </AnimatedLink>
      <img className="mx-auto max-w-[80vw] lg:max-w-[60vw]" src={'/images/about-us.jpg'} loading="lazy" />
    </section>
  );
};
