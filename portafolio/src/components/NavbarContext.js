// src/context/NavbarContext.js
import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar debe ser utilizado dentro de un NavbarProvider');
  }
  return context;
};

export const NavbarProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('About');

  return (
    <NavbarContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </NavbarContext.Provider>
  );
};
