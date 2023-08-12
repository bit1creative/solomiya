import { useLayoutEffect, useRef } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface Props {
  closeDialog: () => void;
}

export const Menu = ({ closeDialog }: Props) => {
  const rootRef = useRef(null);
  const circleRef = useRef(null);
  const { pathname } = useLocation();

  const matchIssuePath = (issue: string) => {
    const matchingPath = `/issue/${issue}`;
    const match = matchPath(pathname, matchingPath);
    return match;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(circleRef.current, { scale: 0, duration: 0.7, ease: 'power4.out' });
    }, rootRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed left-1/2 top-1/2 z-40 h-[calc(100%-40px)] w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 bg-main-issue-1"
    >
      <div
        ref={circleRef}
        className="absolute left-1/2 top-1/2 aspect-square h-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
      <div className="flex h-full flex-col items-end justify-center px-2 font-yuni-black text-8xl">
        <Link to="/" onClick={closeDialog}>
          home
        </Link>
        <Link to="/" onClick={closeDialog}>
          about
        </Link>
        <Link to="/" onClick={closeDialog}>
          shop
        </Link>
        <Link to="/" onClick={closeDialog}>
          stockists
        </Link>
        <Link to="/" onClick={closeDialog} className="font-yuni-hair">
          issues
        </Link>

        <div className="flex space-x-4">
          <Link to="/issue/2" onClick={closeDialog} className={`${matchIssuePath('2') ? 'pr-4 italic ' : ''}`}>
            N°2
          </Link>

          <Link to="/" onClick={closeDialog} className={`${matchIssuePath('1') ? 'pr-4 italic' : ''}`}>
            N°1
          </Link>
        </div>
      </div>
    </div>
  );
};
