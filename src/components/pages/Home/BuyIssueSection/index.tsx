import { AnimatedLink } from 'Components/common/AnimatedLink';
import { useGetIssue } from 'Hooks/useGetIssue';

const IssuesAvailabilityMap = {
  1: false,
  2: true
};

export const BuyIssueSection = () => {
  const issue = useGetIssue();

  const isIssueAvailable = IssuesAvailabilityMap[issue as keyof typeof IssuesAvailabilityMap];

  return (
    <div className="mx-auto w-max">
      <div className="block text-center font-yuni-black text-5xl lg:text-6xl xl:text-7xl">
        {isIssueAvailable ? (
          <AnimatedLink to="www.google.com" target="_blank" rel="noopener noreferrer">
            Buy issue
          </AnimatedLink>
        ) : (
          <p className="select-none">SOLD OUT</p>
        )}
      </div>
    </div>
  );
};
