import { Link, matchPath, useLocation } from 'react-router-dom';

export const Menu = () => {
  const { pathname } = useLocation();

  const matchIssuePath = (issue: string) => {
    const matchingPath = `/issue/${issue}`;
    const match = matchPath(pathname, matchingPath);
    return match;
  };

  return (
    <div className="flex h-full flex-col items-end justify-center px-2 font-yuni-black text-8xl">
      <Link to="/">home</Link>
      <Link to="/">about</Link>
      <Link to="/">shop</Link>
      <Link to="/">stockists</Link>
      <Link to="/" className="font-yuni-hair">
        issues
      </Link>
      <div className="flex space-x-4">
        <Link to="/issue/2" className={`${matchIssuePath('2') ? 'pr-4 italic ' : ''}`}>
          N°2
        </Link>
        <Link to="/" className={`${matchIssuePath('1') ? 'pr-4 italic' : ''}`}>
          N°1
        </Link>
      </div>
    </div>
  );
};
