import { useState } from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import MapChart from './components/Map'
import { ColorProvider, useColorContext } from './context/ColorContext'
import { AuthProvider } from './context/AuthContext'
import { ContentProvider } from './context/ContentContext'
import './App.css'

function AppContent() {
  const { colors } = useColorContext();
  
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: colors.secondary }}>
      <Header />
      <main className="flex-grow">
        <LandingPage />
        <div style={{ height: '200vh' }}></div>
      </main>
    </div>
  )
}

function App() {
  return (
    <ColorProvider>
      <AuthProvider>
        <ContentProvider>
          <AppContent />
        </ContentProvider>
      </AuthProvider>
    </ColorProvider>
  )
}

export default App
