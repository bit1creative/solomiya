import { Link } from 'react-router-dom';

import { useGetIssue } from 'Hooks/useGetIssue';
import { useMainColor } from 'Hooks/useTheme';

export const Footer = () => {
  const mainColor = useMainColor();
  const issue = useGetIssue();

  return (
    <div
      className={`grid grid-cols-3 gap-x-4 gap-y-2 border-0 border-t-[1.5rem] border-solid border-${mainColor} bg-white text-center font-yuni-black text-2xl`}
    >
      <div className="sr-only bg-main-issue-1" />
      <div className="sr-only bg-main-issue-2" />
      <a href="https://instagram.com/solomiyamag?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <span>Newsletter</span>
      <Link to={`/issue/${issue}/contact-us`}>Contact</Link>
      <span>Legals</span>
      <span>Privacy Policy</span>
    </div>
  );
};
