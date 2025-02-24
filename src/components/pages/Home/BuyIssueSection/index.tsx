import { AnimatedLink } from 'Components/common/AnimatedLink';
import { useGetIssue } from 'Hooks/useGetIssue';

const IssuesAvailabilityMap = {
  1: {
    isAvailable: false,
    buyButtonText: 'Buy issue',
    isThirdPartyReseller: true,
    url: ''
  },
  2: {
    isAvailable: true,
    buyButtonText: 'Buy issue',
    isThirdPartyReseller: true,
    url: 'https://shiftbooks.de/en/produkt/solomiya-2/'
  },
  3: {
    isAvailable: true,
    buyButtonText: 'Buy issue',
    isThirdPartyReseller: true,
    url: 'https://shiftbooks.de/en/produkt/solomiya-3/'
  },
  4: {
    isAvailable: true,
    buyButtonText: 'Order here',
    isThirdPartyReseller: true,
    url: 'https://shiftbooks.de/en/produkt/solomiya-4/'
  }
};

export const BuyIssueSection = () => {
  const issue = useGetIssue();

  const { isAvailable, buyButtonText, url, isThirdPartyReseller } =
    IssuesAvailabilityMap[issue as keyof typeof IssuesAvailabilityMap];

  return (
    <div className="mx-auto w-full md:w-max">
      <div className="block break-words text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl">
        {/* they add requirenments here back and forth so here is such a mess, yeah..... */}
        {issue === 4 ? (
          <>
            <div className="mb-8">
              For Ukraine: <br className="md:hidden" />
              <AnimatedLink isReactLink={false} to={'https://solomiyashop.xyz/'}>
                {buyButtonText}
              </AnimatedLink>
            </div>
            <div className="my-8">
              For all other countries: <br className="md:hidden" />
              <AnimatedLink to={url} isReactLink={false}>
                {buyButtonText}
              </AnimatedLink>
            </div>
            <div className="mt-8">
              <AnimatedLink isReactLink={false} to="https://uehn.org/">
                Ukrainian Environmental
                <br className="md:hidden" /> Humanities Network
              </AnimatedLink>
            </div>
          </>
        ) : isAvailable ? (
          <AnimatedLink to={url} {...(isThirdPartyReseller && { target: '_blank', rel: 'noopener noreferrer' })}>
            {buyButtonText}
          </AnimatedLink>
        ) : (
          <p className="select-none">SOLD OUT</p>
        )}
      </div>
    </div>
  );
};
