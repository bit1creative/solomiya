import { Link, useParams } from 'react-router-dom';

import { SectionTitle } from 'Components/common/SectionTitle';

export const AboutUsSection = () => {
  const { issue } = useParams();
  return (
    <section className="flex min-h-[calc(100dvh-40px)] flex-col items-center p-4">
      <SectionTitle title={'About Us'} />
      <div className="font-nice-regular text-4xl">
        <span className="italic">
          Ivanna Kozachenko, Vsevolod Kazarin , Andrii Ushytskyi, Sebastian Wells and Kollektiv Scrollan{' '}
        </span>
        are working to make this magazine exist.
      </div>
      <Link className="my-4 block text-center font-yuni-black text-5xl" to={`/issue/${issue}/contact-us`}>
        Contact Us
      </Link>
      <img src={'/public/images/about-us.jpg'} loading="lazy" />
    </section>
  );
};
