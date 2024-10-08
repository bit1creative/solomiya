import { AnimatedLink } from 'Components/common/AnimatedLink';
import { useGetIssue } from 'Hooks/useGetIssue';
import { useMainColor } from 'Hooks/useTheme';

export const Footer = () => {
  const mainColor = useMainColor();
  const issue = useGetIssue();

  return (
    <div className={`mt-6 border-${mainColor} border-0 border-t-[1.25rem] border-solid lg:border-t-[2.5rem]`}>
      <div className="sr-only border-main-issue-1" />
      <div className="sr-only border-main-issue-2" />
      <div className="sr-only border-main-issue-3" />
      <div className="sr-only border-main-issue-4" />
      <div
        className={`mx-auto grid max-w-[1440px] grid-cols-3 place-items-center gap-x-4 gap-y-2 bg-white text-center font-yuni-black text-2xl md:text-3xl lg:grid-cols-5 lg:py-4 lg:text-6xl lg:leading-normal`}
      >
        <AnimatedLink
          isReactLink={false}
          to="https://instagram.com/solomiyamag?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </AnimatedLink>
        <AnimatedLink to={`/issue/${issue}/newsletter`}>Newsletter</AnimatedLink>
        <AnimatedLink to={`/issue/${issue}/contact-us`}>Contact</AnimatedLink>
        <AnimatedLink to={`/issue/${issue}/imprint`}>Imprint</AnimatedLink>
        <AnimatedLink to={`/issue/${issue}/privacy-policy`}>Privacy Policy</AnimatedLink>
      </div>
    </div>
  );
};
