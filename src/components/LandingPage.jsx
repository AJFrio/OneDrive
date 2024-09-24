import React, { useEffect } from 'react'
import { useColorContext } from '../context/ColorContext'
import Input from './Input'

function LandingPage() {
  const { colors } = useColorContext();

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="flex items-center justify-left h-screen w-screen">
      <h1 
        className="text-7xl font-bold items-center text-center m-14 p-10 rounded-lg shadow-lg"
        style={{ 
          color: colors.secondary,
          backgroundColor: colors.primary,
        }}
      >
        Let's get you a ride... <br /> Without fucking your wallet
      </h1>
      <Input />
    </div>
  )
}

export default LandingPage