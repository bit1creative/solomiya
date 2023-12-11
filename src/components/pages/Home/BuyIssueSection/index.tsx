import { AnimatedLink } from 'Components/common/AnimatedLink';
import { useGetIssue } from 'Hooks/useGetIssue';

const IssuesAvailabilityMap = {
  1: {
    isAvailable: false,
    isPreorder: false,
    internationalUrl: ''
  },
  2: {
    isAvailable: true,
    isPreorder: false,
    internationalUrl: 'https://shiftbooks.de/en/produkt/solomiya-2/'
  },
  3: {
    isAvailable: true,
    isPreorder: true,
    internationalUrl: 'https://shiftbooks.de/en/produkt/solomiya-3/'
  }
};

export const BuyIssueSection = () => {
  const issue = useGetIssue();

  const isIssueAvailable = IssuesAvailabilityMap[issue as keyof typeof IssuesAvailabilityMap]?.isAvailable ?? false;
  const isIssuePreorder = IssuesAvailabilityMap[issue as keyof typeof IssuesAvailabilityMap]?.isPreorder ?? false;

  return (
    <div className="mx-auto w-max">
      <div className="block text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl">
        {isIssueAvailable ? (
          <AnimatedLink
            to={IssuesAvailabilityMap[issue as keyof typeof IssuesAvailabilityMap].internationalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isIssuePreorder ? 'Pre-order' : 'Buy issue'}
          </AnimatedLink>
        ) : (
          <p className="select-none">SOLD OUT</p>
        )}
      </div>
    </div>
  );
};
