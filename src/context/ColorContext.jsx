import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColorContext = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState({
    primary: '#fb8122',
    secondary: '#1d2228',
    accent: '#e1e2e2',
  });

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};