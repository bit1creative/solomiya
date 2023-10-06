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
          { boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', stagger: 1, duration: 0.1 },
          '<'
        )
        .to(slideShowImgRefs.current, { boxShadow: 'none', stagger: 1, duration: 0 }, '<1')
        .to(slideShowImgRefs.current, { opacity: 0, duration: 0.1 }, 'start1');
    }, rootRef);

    return () => {
      return ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative h-[200px] lg:h-[800px]">
      {images.map((imageSrc: string, index: number) => (
        <img
          key={imageSrc}
          ref={(el) => index && slideShowImgRefs.current.push(el as HTMLElement)}
          className="absolute left-1/2 h-[200px] -translate-x-1/2 opacity-0 first:opacity-100 first:shadow-2xl lg:h-[700px]"
          src={`/images/${imageSrc}`}
        />
      ))}
    </div>
  );
};
