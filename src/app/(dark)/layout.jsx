import generateStylesheetObject from '@/Common/generateStylesheetsObject';
import Lines from '@/components/Common/Lines';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: 'Zia Ur Rehman',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
    ]),
  },
};

function Layout({ children }) {
  return (
    <body className="sub-bg">
      <Lines />
      <div>
        <main>{children}</main>
        <ToastContainer />

      </div>
    </body>
  );
}

export default Layout;
