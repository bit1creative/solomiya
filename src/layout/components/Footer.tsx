import { Link } from 'react-router-dom';

import { useGetIssue } from 'Hooks/useGetIssue';

export const Footer = () => {
  const issue = useGetIssue();

  return (
    <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-2 bg-white text-center font-yuni-black text-2xl lg:mt-12 lg:grid-cols-5 lg:py-4 lg:text-6xl lg:leading-[4rem]">
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
