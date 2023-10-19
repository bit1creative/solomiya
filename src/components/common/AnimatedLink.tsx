import { useEffect, useRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import gsap from 'gsap';

interface AnimatedLinkProps extends LinkProps {
  isReactLink?: boolean;
}

export const AnimatedLink = ({ isReactLink = true, ...props }: AnimatedLinkProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const underlinedRef = useRef<HTMLDivElement | null>(null);

  const overrideProps = {
    ...props,
    reloadDocument: !isReactLink
  } satisfies LinkProps;

  useEffect(() => {
    let playAnimation: () => void;
    let playReverseAnimation: () => void;

    const underlined = underlinedRef.current;
    const wrapper = wrapperRef.current;

    if (underlined && wrapper) {
      const animate = gsap.fromTo(
        underlinedRef.current,
        { width: 0 },
        {
          width: '100%',
          paused: true
        }
      );

      playAnimation = () => animate.play();
      playReverseAnimation = () => animate.reverse();

      wrapper.addEventListener('mouseenter', playAnimation);
      wrapper.addEventListener('mouseleave', playReverseAnimation);
    }

    return () => {
      if (underlined && wrapper) {
        wrapper.removeEventListener('mouseenter', playAnimation);
        wrapper.removeEventListener('mouseleave', playReverseAnimation);
      }
    };
  }, [wrapperRef, underlinedRef]);

  return (
    <div ref={wrapperRef} className="inline w-max">
      <Link {...overrideProps} />
      <div ref={underlinedRef} className="mx-auto block h-1 w-0 bg-black lg:h-3" />
    </div>
  );
};
