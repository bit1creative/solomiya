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
    buyButtonText: 'Stay Tuned!',
    isThirdPartyReseller: false,
    url: '/issue/4/newsletter'
  }
};

export const BuyIssueSection = () => {
  const issue = useGetIssue();

  const { isAvailable, buyButtonText, url, isThirdPartyReseller } =
    IssuesAvailabilityMap[issue as keyof typeof IssuesAvailabilityMap];

  return (
    <div className="mx-auto w-max">
      <div className="block text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl">
        {isAvailable ? (
          // <AnimatedLink to={url} target="_blank" rel="noopener noreferrer">
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
