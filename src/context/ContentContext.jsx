import React, { createContext, useContext, useState } from 'react';

const ContentContext = createContext();

export const useContentContext = () => useContext(ContentContext);

export const ContentProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRide, setSelectedRide] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  const value = {
    currentPage,
    setCurrentPage,
    selectedRide,
    setSelectedRide,
    userLocation,
    setUserLocation,
    destination,
    setDestination,
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};