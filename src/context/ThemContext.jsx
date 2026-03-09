import React, { createContext, useState } from 'react'

export const ThemContext = createContext();

const ThemProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };


  return (
    <div>
      <ThemContext.Provider value={{ darkMode, toggleTheme }} >
        {children}
      </ThemContext.Provider>
    </div>
  )
}

export default ThemProvider