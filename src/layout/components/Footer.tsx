import { Link } from 'react-router-dom';

import { useGetIssue } from 'Hooks/useGetIssue';
import { useMainColor } from 'Hooks/useTheme';

export const Footer = () => {
  const mainColor = useMainColor();
  const issue = useGetIssue();

  return (
    <div
      className={`mt-6 border-${mainColor} -ml-[calc((100vw-1440px)/2)] w-screen border-0 border-t-[2.5rem] border-solid`}
    >
      <div className="sr-only border-main-issue-1" />
      <div className="sr-only border-main-issue-2" />
      <div
        className={`mx-auto grid max-w-[1440px] grid-cols-3 place-items-center gap-x-4 gap-y-2 bg-white text-center font-yuni-black text-2xl lg:grid-cols-5 lg:py-4 lg:text-6xl lg:leading-normal`}
      >
        <a href="https://instagram.com/solomiyamag?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <span>Newsletter</span>
        <Link to={`/issue/${issue}/contact-us`}>Contact</Link>
        <span>Legals</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};
