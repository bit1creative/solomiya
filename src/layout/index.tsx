import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

import cross from 'Assets/icons/cross.svg';
import logo from 'Assets/logo.png';

import { Menu } from './components/Menu';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFrameClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setIsMenuOpen(true);
    }
  };

  return (
    <Dialog.Root open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
      <div className="h-screen overflow-hidden bg-main-issue-1" onClick={handleFrameClick}>
        <Dialog.Trigger>
          <img className="absolute left-2 top-2 z-20 h-14 w-12" src={logo} alt="logo" />
        </Dialog.Trigger>
        <div className="absolute left-1/2 top-1/2 z-0 h-[calc(100%-40px)] w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 bg-white">
          <Outlet />
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed -inset-10 z-30 bg-white" />
        <Dialog.Content>
          <Dialog.Close className="absolute -right-1 -top-1 z-50">
            <img src={cross} alt="close-btn" className="h-12 w-12" />
          </Dialog.Close>
          <Menu closeDialog={() => setIsMenuOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
