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
    buyButtonText: 'Pre-Order here!',
    isThirdPartyReseller: true,
    url: 'https://shiftbooks.de/en/produkt/solomiya-4/'
  }
};

export const BuyIssueSection = () => {
  const issue = useGetIssue();

  const { isAvailable, buyButtonText, url, isThirdPartyReseller } =
    IssuesAvailabilityMap[issue as keyof typeof IssuesAvailabilityMap];

  return (
    <div className="mx-auto w-max">
      <div className="block text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl">
        {/* TODO: they add requirenments here back and forth so here is such a mess, yeah..... */}
        {issue === 4 ? (
          <>
            For Ukraine:{' '}
            <AnimatedLink
              to={
                'https://docs.google.com/forms/d/e/1FAIpQLSeX8ZnpuKxumDZo9eaLuFTaHluMZYZi7d_V0S0fAEJdRPOQLg/viewform?usp=header'
              }
            >
              {buyButtonText}
            </AnimatedLink>
            <br />
            For All other countries:{' '}
            <AnimatedLink to={url} target="_blank" rel="noopener noreferrer">
              {buyButtonText}
            </AnimatedLink>
            <br />
            <AnimatedLink to="https://uehn.org/" isReactLink={false}>
              Ukrainian Environmental Humanities Network
            </AnimatedLink>
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
