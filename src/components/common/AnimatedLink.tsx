import { useRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface AnimatedLinkProps extends LinkProps {
  isReactLink?: boolean;
}

export const AnimatedLink = ({ isReactLink = true, ...props }: AnimatedLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const overrideProps = {
    ...props,
    reloadDocument: !isReactLink,
    className: `${
      props.className || ''
    } relative bg-gradient-to-r from-black to-black bg-[length:0%_3px] hover:bg-[length:100%_3px] bg-no-repeat bg-bottom transition-all duration-300`,
    ref: linkRef
  } satisfies LinkProps;

  return <Link {...overrideProps}>{props.children}</Link>;
};
