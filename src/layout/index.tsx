import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

import cross from 'Assets/icons/cross.svg';
import logo from 'Assets/logo.png';
import { useMainColor } from 'Hooks/useTheme';

import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

export const Layout = () => {
  const mainColor = useMainColor();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useLocation();

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [pathname]);

  useEffect(() => {
    document.body.classList.add(`bg-${mainColor}`);
    return () => {
      document.body.classList.remove(`bg-${mainColor}`);
    };
  }, [mainColor]);

  const handleFrameClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setIsMenuOpen(true);
    }
  };

  return (
    <Dialog.Root open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
      <div className="sr-only bg-main-issue-1" />
      <div className="sr-only bg-main-issue-2" />
      <div className="sr-only bg-main-issue-3" />
      <div className="sr-only bg-main-issue-4" />
      <div
        className={`relative left-0 top-0 h-screen w-screen overflow-hidden bg-${mainColor} p-5 lg:p-10`}
        onClick={handleFrameClick}
      >
        <Dialog.Trigger className="absolute left-2 top-2 z-20 lg:left-4 lg:top-5">
          <img className="h-18 w-16 lg:h-28 lg:w-24" src={logo} alt="logo" />
        </Dialog.Trigger>
        <div
          ref={contentRef}
          className="no-scrollbar absolute bottom-5 left-5 right-5 top-5 z-0 h-[calc(100%-2.5rem)] overflow-y-scroll bg-white lg:bottom-10 lg:left-10 lg:right-10 lg:top-10 lg:h-[calc(100%-5rem)]"
        >
          <div className="mx-auto max-w-[1440px]">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed -inset-10 z-30 bg-white lg:-inset-20" />
        <Dialog.Content className="fixed inset-5 z-30 lg:inset-10">
          <Dialog.Close className="absolute -right-6 -top-6 z-50 lg:-right-12 lg:-top-12">
            <img src={cross} alt="close-btn" className="h-12 w-12 lg:h-24 lg:w-24" />
          </Dialog.Close>
          <Menu
            onCloseMenu={() => {
              setIsMenuOpen(false);
            }}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
