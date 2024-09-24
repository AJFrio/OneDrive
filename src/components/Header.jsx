import React from 'react'
import { useColorContext } from '../context/ColorContext'
import { useAuthContext } from '../context/AuthContext'

function Header() {
  const { colors } = useColorContext();
  const { isLoggedIn, login, logout } = useAuthContext();

  return (
    <header style={{backgroundColor: colors.primary}} className="p-4 flex justify-between items-center w-full top-0 left-0">
      <h1 style={{color: colors.secondary}} className="text-2xl font-bold">ONEDRIVE</h1>
      <button 
        style={{
          backgroundColor: colors.secondary,
          color: colors.primary
        }}
        className="font-semibold py-2 px-4 rounded hover:opacity-80"
        onClick={isLoggedIn ? logout : login}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  )
}

export default Header