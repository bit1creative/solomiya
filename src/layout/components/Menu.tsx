import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SplitType from 'split-type';

import { useIssueMatch } from 'Hooks/useIssueMatch';
import tailwindConfig from 'tailwind.config';

interface Props {
  onCloseMenu: () => void;
}

export const Menu = ({ onCloseMenu }: Props) => {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const menuItemsRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const split = new SplitType(menuItemsRef.current, {
      types: 'chars'
    });
    const chars = split.chars;

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(bgRef.current, {
          background: tailwindConfig.theme.extend.colors['main-issue-1'],
          duration: 1,
          ease: 'power3.out'
        })
        .fromTo(
          chars,
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.7,
            ease: 'power4.out'
          },
          '-=.5'
        );
    }, rootRef);

    return () => {
      return ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="h-full">
      <div
        ref={bgRef}
        className="flex h-full flex-col items-end justify-center overflow-hidden px-2 font-yuni-black text-8xl"
      >
        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"
          to="/"
          onClick={onCloseMenu}
        >
          home
        </Link>
        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"
          to="/about-us"
          onClick={onCloseMenu}
        >
          about
        </Link>
        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"
          to="/"
          onClick={onCloseMenu}
        >
          shop
        </Link>
        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"
          to="/"
          onClick={onCloseMenu}
        >
          stockists
        </Link>
        <div
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item font-yuni-hair [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"
        >
          issues
        </div>
        <div className="menu-item flex space-x-4">
          <Link
            ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
            to="/issue/2"
            onClick={onCloseMenu}
            className={`${useIssueMatch('2') ? 'pr-4 italic ' : ''}`}
          >
            N°2
          </Link>

          <Link
            ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
            to="/"
            onClick={onCloseMenu}
            className={`${useIssueMatch('1') ? 'pr-4 italic' : ''}`}
          >
            N°1
          </Link>
        </div>
      </div>
    </div>
  );
};
