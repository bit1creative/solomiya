import { useParams } from 'react-router-dom';

import { AnimatedLink } from 'Components/common/AnimatedLink';
import { SectionTitle } from 'Components/common/SectionTitle';

export const AboutUsSection = () => {
  const { issue } = useParams();
  return (
    <section className="flex min-h-[calc(100dvh-40px)] flex-col items-center justify-center p-4 md:mx-10 lg:min-h-full lg:p-14 xl:gap-y-4 xl:p-32">
      <SectionTitle title={'About Us'} />
      <div className="text-center font-nice-regular text-2xl xl:text-5xl">
        For Solomiya Magazine, Ukraine is one of the very hearts of Europe&apos;s democratic societies. As an
        independent magazine founded in response to Russia&apos;s full-scale invasion of Ukraine, Solomiya is the result
        of an engaged, decolonial involvement of artists with their environment shaped by an unprecedented imperial
        aggression.
        <br></br>
        <br></br>
      </div>
      <div className="text-center font-nice-regular text-2xl xl:text-5xl">
        The magazine is a platform for both emerging and established Ukrainian creatives, using a wide range of forms of
        expression from visual arts to text that entail personal experiences, emotional observations and intellectual
        discourses. Solomiya offers its readers profound, diverse and subjective perspectives on current realities and
        complex social issues in Ukraine - and beyond.
        <br></br>
        <br></br>
      </div>
      <div className="text-center font-nice-regular text-2xl xl:text-5xl">
        Publishing annually and entirely in English, unconventional design and exceptional visual approaches are at the
        core of its creation process conducted in both Kyiv and Berlin. Solomiya is proud to be printed vegan, shipped
        worldwide and available in all major European capitals.
        <br></br>
        <br></br>
      </div>
      <SectionTitle title={'Editorial Team'} />
      <div className="text-center font-nice-regular text-2xl xl:text-5xl">
        The two founders&nbsp;
        <p className="inline">
          <a
            href={`mailto:vsevolod@solomiyamag.com`}
            className="font-nice-italic transition-all hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vsevolod Kazarin
          </a>
        </p>{' '}
        and&nbsp;
        <p className="inline">
          <a
            href={`mailto:sebastian@solomiyamag.com`}
            className="font-nice-italic transition-all hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sebastian Wells,
          </a>
        </p>{' '}
        both trained as photographers, cultural worker&nbsp;
        <p className="inline">
          <a
            href={`mailto:andrii@solomiyamag.com`}
            className="font-nice-italic transition-all hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrii Ushytskyi
          </a>{' '}
        </p>
        and curator&nbsp;
        <p className="inline">
          <a
            href={`mailto:ivanna@solomiyamag.com`}
            className="font-nice-italic transition-all hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ivanna Kozachenko
          </a>
        </p>{' '}
        form the editorial team of Solomiya Magazine.
        <br></br>
        <br></br>
      </div>
      <SectionTitle title={'Art Direction'} />
      <div className="text-center font-nice-regular text-2xl xl:text-5xl">
        <p className="inline">
          <a
            href={`https://kollektiv-scrollan.com`}
            className="font-nice-italic transition-all hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kollektiv Scrollan
          </a>
        </p>{' '}
        is a design studio based in Berlin. Their members, Anne-Lene Proff and Peter B&uuml;nnagel, develop the visual
        appearance of the magazine.
        <br></br>
        <br></br>
      </div>
      <SectionTitle title={'Publisher'} />
      <div className="text-center font-nice-regular text-2xl xl:text-5xl">
        <p className="inline">
          <a
            href={`https://www.shiftbooks.de`}
            className="font-nice-italic transition-all hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SHIFT BOOKS
          </a>
        </p>{' '}
        is a Berlin-based independent publisher run by Helena Melikov and Christian Dettler specialized in photography,
        contemporary art and social interest. SHIFT BOOKS are produced sustainably and printed vegan.
        <br></br>
        <br></br>
      </div>
      <SectionTitle title={'Partnerships'} />
      <div className="text-center font-nice-regular text-2xl xl:text-5xl">
        Our magazine productions would not have been possible without the support of the&nbsp;
        <p className="inline">
          <a
            href={`https://www.adk.de/`}
            className="font-nice-italic transition-all hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akademie der K&uuml;nste
          </a>
        </p>{' '}
        and the&nbsp;
        <p className="inline">
          <a
            href={`http://www.klausstemmler.de`}
            className="font-nice-italic transition-all hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klaus Stemmler Foundation.
          </a>
        </p>{' '}
        Help us with our mission, benefit from our network and feel free to contact us about possible partnerships. Or
        help us directly with a donation.
        <br></br>
        <br></br>
      </div>
      <div className="mx-auto w-max">
        <AnimatedLink
          className="my-4 block text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl"
          to={`/issue/${issue}/contact-us`}
        >
          Contact Us
        </AnimatedLink>
      </div>
      <div className="mx-auto w-max">
        <AnimatedLink
          className="my-4 block text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl"
          to={`/issue/${issue}/imprint`}
        >
          Donate
        </AnimatedLink>
      </div>
    </section>
  );
};
