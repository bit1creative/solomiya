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
  const { issue = 4 } = useParams();
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
    });

    return () => {
      return ctx.revert();
    };
  }, [mainColor]);

  return (
    <div
      ref={bgRef}
      className="flex h-full w-full select-none items-center justify-center overflow-hidden px-2 lg:block lg:p-4 lg:pb-0"
    >
      <div className="grid h-min w-full max-w-limit justify-end text-end font-yuni-black text-menu lg:h-full lg:grid-cols-6 lg:text-center lg:text-menu-lg xl:mx-auto xl:text-menu-xl">
        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="block h-max lg:-scale-100 lg:[writing-mode:vertical-rl]"
          to={`/issue/${issue}`}
          onClick={onCloseMenu}
        >
          home
        </Link>

        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="block h-max lg:-scale-100 lg:[writing-mode:vertical-rl]"
          to={`/issue/${issue}/about`}
          onClick={onCloseMenu}
        >
          about
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="block h-max lg:-scale-100 lg:[writing-mode:vertical-rl]"
          to="https://solomiyastudio.com"
          onClick={onCloseMenu}
        >
          studio
        </Link>

        <Link
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="block h-max lg:-scale-100 lg:[writing-mode:vertical-rl]"
          to={`/issue/${issue}/stockists`}
          onClick={onCloseMenu}
        >
          stockists
        </Link>

        <div
          ref={(el) => menuItemsRef.current.push(el as HTMLElement)}
          className="h-max self-end font-yuni-hair lg:-scale-100 lg:self-start lg:justify-self-center lg:[writing-mode:vertical-rl] xl:justify-self-end"
        >
          issues
        </div>

        <div className="no-scrollbar mt-3 flex flex-row-reverse gap-5 overflow-y-hidden overflow-x-scroll lg:-mt-1 lg:flex-col lg:gap-8 lg:overflow-x-auto lg:overflow-y-scroll xl:-mt-10 xl:gap-2">
          <div className="w-max lg:mt-3 xl:mt-0">
            <Link
              className="block"
              ref={(el) => issuesNumbersRef.current.push(el as HTMLElement)}
              to="/issue/4"
              onClick={onCloseMenu}
            >
              N°4
            </Link>
            <div
              ref={(el) => underlinesRef.current.push(el as HTMLElement)}
              className={`-mt-4 h-1 w-full bg-black lg:mt-4 lg:h-3 xl:-mt-8 ${useIssueMatch('4') ? '' : 'opacity-0'}`}
            />
          </div>
          <div className="w-max">
            <Link
              className="block"
              ref={(el) => issuesNumbersRef.current.push(el as HTMLElement)}
              to="/issue/3"
              onClick={onCloseMenu}
            >
              N°3
            </Link>
            <div
              ref={(el) => underlinesRef.current.push(el as HTMLElement)}
              className={`-mt-4 h-1 w-full bg-black lg:mt-4 lg:h-3 xl:-mt-8 ${useIssueMatch('3') ? '' : 'opacity-0'}`}
            />
          </div>
          <div className="w-max">
            <Link
              className="block"
              ref={(el) => issuesNumbersRef.current.push(el as HTMLElement)}
              to="/issue/2"
              onClick={onCloseMenu}
            >
              N°2
            </Link>
            <div
              ref={(el) => underlinesRef.current.push(el as HTMLElement)}
              className={`-mt-4 h-1 w-full bg-black lg:mt-4 lg:h-3 xl:-mt-8 ${useIssueMatch('2') ? '' : 'opacity-0'}`}
            />
          </div>
          <div className="w-max">
            <Link
              className="block"
              ref={(el) => issuesNumbersRef.current.push(el as HTMLElement)}
              to="/issue/1"
              onClick={onCloseMenu}
            >
              N°1
            </Link>
            <div
              ref={(el) => underlinesRef.current.push(el as HTMLElement)}
              className={`-mt-4 h-1 w-full bg-black lg:mt-4 lg:h-3 xl:-mt-8 ${useIssueMatch('1') ? '' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
