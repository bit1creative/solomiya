/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const issuesNumbersRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const split = new SplitType(menuItemsRef.current, {
      types: 'chars'
    });
    const chars = split.chars;
    const { chars: issuesNumbersChars } = new SplitType(issuesNumbersRef.current, {
      types: 'chars'
    });

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
            issuesNumbersChars,
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
            issuesNumbersChars,
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
    <div ref={rootRef} className="h-full w-full">
      <div
        ref={bgRef}
        className="flex h-full w-full select-none items-center justify-center overflow-hidden px-2 lg:block lg:p-4"
      >
        <div className="grid h-min w-full justify-end overflow-hidden text-end font-yuni-black text-8xl lg:grid-cols-5 lg:items-start lg:text-lg-heading">
          <Link
            ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
            className="block h-max [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:-scale-100 lg:[writing-mode:vertical-rl]"
            to="/"
            onClick={onCloseMenu}
          >
            home
          </Link>
          <Link
            ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
            className="block h-max [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:-scale-100 lg:[writing-mode:vertical-rl]"
            to={`/issue/${issue}/about-us`}
            onClick={onCloseMenu}
          >
            about
          </Link>
          <Link
            ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
            className="block h-max [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:-scale-100 lg:[writing-mode:vertical-rl]"
            to={`/issue/${issue}/stockists`}
            onClick={onCloseMenu}
          >
            stockists
          </Link>
          <div
            ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
            className="h-max font-yuni-hair [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:-scale-100 lg:[writing-mode:vertical-rl]"
          >
            issues
          </div>
          <div className="lg:text-lg-2xl flex h-max justify-end gap-x-4 text-center lg:-mt-20 lg:flex-col lg:gap-x-0">
            <div className="h-min w-max">
              <Link ref={(el) => issuesNumbersRef.current.push(el as HTMLElement)} to="/issue/2" onClick={onCloseMenu}>
                N°2
              </Link>
              <div
                ref={(el) => underlinesRef.current.push(el as HTMLElement)}
                className={`-mt-4 h-1 w-full bg-black lg:-mt-16 lg:h-3 ${useIssueMatch('2') ? '' : 'opacity-0'}`}
              />
            </div>
            <div className="h-min w-max lg:-mt-6">
              <Link ref={(el) => issuesNumbersRef.current.push(el as HTMLElement)} to="/" onClick={onCloseMenu}>
                N°1
              </Link>
              <div
                ref={(el) => underlinesRef.current.push(el as HTMLElement)}
                className={`-mt-4 h-1 w-full bg-black lg:-mt-16 lg:h-3 ${useIssueMatch('1') ? '' : 'opacity-0'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
