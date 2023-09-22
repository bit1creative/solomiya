import { useLayoutEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import SplitType from 'split-type';

import { useIssueMatch } from 'Hooks/useIssueMatch';
import { useMainColor } from 'Hooks/useTheme';
import tailwindConfig from 'tailwind.config';

interface Props {
  onCloseMenu: () => void;
}

export const Menu = ({ onCloseMenu }: Props) => {
  const mainColor = useMainColor();
  const { issue } = useParams();
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const underlinesRef = useRef<HTMLElement[]>([]);
  const menuItemsRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const split = new SplitType(menuItemsRef.current, {
      types: 'chars'
    });
    const chars = split.chars;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        gsap
          .timeline()
          .to(bgRef.current, {
            background: tailwindConfig.theme.extend.colors[mainColor],
            duration: 1,
            ease: 'power3.out'
          })
          .fromTo(
            chars,
            {
              y: -100,
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
          )
          .fromTo(
            underlinesRef.current,
            {
              scaleX: 0
            },
            {
              scaleX: 1,
              duration: 0.7,
              ease: 'power4.out'
            }
          );
      });

      mm.add('(max-width: 1024px)', () => {
        gsap
          .timeline()
          .to(bgRef.current, {
            background: tailwindConfig.theme.extend.colors[mainColor],
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
          )
          .fromTo(
            underlinesRef.current,
            {
              scaleX: 0
            },
            {
              scaleX: 1,
              duration: 0.7,
              ease: 'power4.out'
            }
          );
      });
    }, rootRef);

    return () => {
      return ctx.revert();
    };
  }, [mainColor]);

  return (
    <div ref={rootRef} className="h-full">
      <div
        ref={bgRef}
        className="flex h-full flex-col items-end justify-center overflow-hidden px-2 font-yuni-black text-8xl lg:flex-row lg:items-start lg:p-4 lg:text-lg-xl"
      >
        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:-scale-100 lg:[writing-mode:vertical-rl]"
          to="/"
          onClick={onCloseMenu}
        >
          home
        </Link>
        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:-scale-100 lg:[writing-mode:vertical-rl]"
          to={`/issue/${issue}/about-us`}
          onClick={onCloseMenu}
        >
          about
        </Link>
        {/* <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"
          to="/"
          onClick={onCloseMenu}
        >
          shop
        </Link> */}
        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:-scale-100 lg:[writing-mode:vertical-rl]"
          to={`/issue/${issue}/stockists`}
          onClick={onCloseMenu}
        >
          stockists
        </Link>
        <div
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="menu-item font-yuni-hair [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:-scale-100 lg:[writing-mode:vertical-rl]"
        >
          issues
        </div>
        <div className="menu-item flex space-x-4 lg:-mt-12 lg:flex-col lg:-space-y-2 lg:space-x-0 lg:text-lg-2xl">
          <div>
            <Link ref={(el) => menuItemsRef.current.push(el as HTMLElement)} to="/issue/2" onClick={onCloseMenu}>
              N°2
            </Link>
            <div
              ref={(el) => underlinesRef.current.push(el as HTMLElement)}
              className={`-mt-2 h-1 w-full bg-black lg:-mt-6 lg:h-3 ${useIssueMatch('2') ? '' : 'hidden'}`}
            />
          </div>
          <div>
            <Link ref={(el) => menuItemsRef.current.push(el as HTMLElement)} to="/" onClick={onCloseMenu}>
              N°1
            </Link>
            <div
              ref={(el) => underlinesRef.current.push(el as HTMLElement)}
              className={`-mt-2 h-1 w-full bg-black lg:-mt-6 lg:h-3 ${useIssueMatch('1') ? '' : 'hidden'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
