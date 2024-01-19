import CircularProgress from '@mui/material/CircularProgress';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

import GlobalModals from '../GlobalModals';
import Menu from '../Menu';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const profileLoading = false;

  if (profileLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <GlobalModals />
      <div className="relative h-full w-full flex justify-stretch items-stretch overflow-auto">
        <Menu />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;