import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import { useIssueMatch } from 'Hooks/useIssueMatch';

interface Props {
  closeDialog: () => void;
}

export const Menu = ({ closeDialog }: Props) => {
  const rootRef = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(circleRef.current, { scale: 0, duration: 0.6, delay: 0.2 })
        .from('#menu-item', { xPercent: 150, stagger: 0.2 }, '-=.5');
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      <div
        ref={circleRef}
        className="absolute left-1/2 top-1/2 aspect-square h-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
      <div className="flex h-full flex-col items-end justify-center overflow-hidden px-2 font-yuni-black text-8xl">
        <Link id="menu-item" to="/" onClick={closeDialog}>
          home
        </Link>
        <Link id="menu-item" to="/" onClick={closeDialog}>
          about
        </Link>
        <Link id="menu-item" to="/" onClick={closeDialog}>
          shop
        </Link>
        <Link id="menu-item" to="/" onClick={closeDialog}>
          stockists
        </Link>
        <Link id="menu-item" to="/" onClick={closeDialog} className="font-yuni-hair">
          issues
        </Link>

        <div id="menu-item" className="flex space-x-4">
          <Link to="/issue/2" onClick={closeDialog} className={`${useIssueMatch('2') ? 'pr-4 italic ' : ''}`}>
            N°2
          </Link>

          <Link to="/" onClick={closeDialog} className={`${useIssueMatch('1') ? 'pr-4 italic' : ''}`}>
            N°1
          </Link>
        </div>
      </div>
    </div>
  );
};
