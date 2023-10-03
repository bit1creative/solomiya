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
          repeat: -1
        })
        .fromTo(slideShowImgRefs.current, { opacity: 0 }, { opacity: 1, stagger: 0.5, duration: 0.1 })
        .to(slideShowImgRefs.current, { opacity: 0, duration: 0.1 }, '+=1');
    }, rootRef);

    return () => {
      return ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative h-[200px]">
      {images.map((imageSrc: string) => (
        <img
          key={imageSrc}
          ref={(el) => slideShowImgRefs.current.push(el as HTMLElement)}
          className="absolute left-1/2 h-[200px] -translate-x-1/2 opacity-0 shadow-2xl"
          src={`/images/${imageSrc}`}
        />
      ))}
    </div>
  );
};
