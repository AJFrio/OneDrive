import React, { useState } from 'react';
import { useColorContext } from '../context/ColorContext';
import { useAuthContext } from '../context/AuthContext';
import LoginModal from './LoginModal';  // Add this import

function Header() {
  const { colors } = useColorContext();
  const { isLoggedIn, logout } = useAuthContext();
  const [showLoginModal, setShowLoginModal] = useState(false);  // Add state for modal visibility

  const handleLoginClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      setShowLoginModal(true);  // Show the modal
    }
  };

  return (
    <header style={{backgroundColor: colors.primary}} className="p-4 flex justify-between items-center w-full top-0 left-0">
      <h1 style={{color: colors.secondary}} className="text-2xl font-bold">ONEDRIVE</h1>
      <button 
        style={{
          backgroundColor: colors.secondary,
          color: colors.primary
        }}
        className="font-semibold py-2 px-4 rounded hover:opacity-80"
        onClick={handleLoginClick}  // Update onClick handler
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />  // Render the modal
      )}
    </header>
  )
}

export default Header