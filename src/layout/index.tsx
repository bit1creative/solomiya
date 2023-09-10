import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

import cross from 'Assets/icons/cross.svg';
import logo from 'Assets/logo.png';
import { useMainColor } from 'Hooks/useTheme';

import { Menu } from './components/Menu';

export const Layout = () => {
  const mainColor = useMainColor();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className={`relative min-h-screen w-screen overflow-hidden bg-${mainColor} p-5`} onClick={handleFrameClick}>
        <Dialog.Trigger className="absolute left-2 top-2 z-20">
          <img className="h-18 w-16" src={logo} alt="logo" />
        </Dialog.Trigger>
        <div className="z-0 h-max bg-white">
          <Outlet />
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed -inset-10 z-30 bg-white" />
        <Dialog.Content className="fixed inset-5 z-30">
          <Dialog.Close className="absolute -right-6 -top-6 z-50">
            <img src={cross} alt="close-btn" className="h-12 w-12" />
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
