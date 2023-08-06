import { Outlet } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

import cross from 'Assets/icons/cross.svg';
import logo from 'Assets/logo.png';

import { Menu } from './components/Menu';

export const Layout = () => (
  <Dialog.Root>
    <div className="h-screen overflow-hidden bg-main-issue-1">
      <Dialog.Trigger>
        <img className="absolute left-2 top-2 z-50 h-14 w-12" src={logo} alt="logo" />
      </Dialog.Trigger>
      <div className="absolute left-1/2 top-1/2 z-0 h-[calc(100%-40px)] w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 bg-white">
        <Outlet />
      </div>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-screen bg-white" />
      <Dialog.Content className="fixed left-1/2 top-1/2 h-[calc(100%-40px)] w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 bg-main-issue-1">
        <Dialog.Close className="absolute -right-6 -top-6">
          <img src={cross} alt="close-btn" className="h-12 w-12" />
        </Dialog.Close>
        <Menu />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
