import React from 'react';
import { NavBar } from '../Navbar';
import { ToastContainer } from 'react-toastify';

export const MainLayout = ({ children }) => {
  return (
    <>
      <ToastContainer/>
        <NavBar />
        <div>{children}</div>
    </>
  );
};
