import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { useGetIssue } from 'Hooks/useGetIssue';

import { SlideShowDataMap } from './slideshow.data';

export const SlideShow = () => {
  const issue = useGetIssue();
  const images = SlideShowDataMap.get(`issue-${issue}`);

  const rootRef = useRef(null);
  const slideShowImgRefs = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 1
        })
        .add('start')
        .delay(1)
        .fromTo(slideShowImgRefs.current, { opacity: 0 }, { opacity: 1, stagger: 1, duration: 0.1 }, 'start')
        .to(
          slideShowImgRefs.current,
          { filter: 'drop-shadow(0 25px 50px rgb(0 0 0 / 0.25))', stagger: 1, duration: 0.1 },
          '<'
        )
        .to(slideShowImgRefs.current, { filter: 'none', stagger: 1, duration: 0 }, '<1')
        .to(slideShowImgRefs.current, { opacity: 0, duration: 0.1 }, 'start1');
    }, rootRef);

    return () => {
      return ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative h-[200px] md:h-[300px] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]">
      {images.map((imageSrc: string, index: number) => (
        <img
          key={imageSrc}
          ref={(el) => index && slideShowImgRefs.current.push(el as HTMLElement)}
          className="absolute left-1/2 h-full w-auto -translate-x-1/2 object-contain opacity-0 first:opacity-100 first:drop-shadow-2xl"
          src={`/images/${imageSrc}`}
          alt=""
        />
      ))}
    </div>
  );
};
