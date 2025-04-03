
// import React, { createContext, useContext, useState } from "react";

// // Create the context
// const StateContext = createContext();

// // Initial state (currently unused but kept for future expansion)
// const initialState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };

// // Context Provider Component
// export const ContextProvider = ({ children }) => {
//   const [activeMenu, setActiveMenu] = useState(true);
// const [isClicked,setIsClicked]=useState(initialState);
// const [screenSize,setScreenSize]=useState(undefined)


// const handleClick=(clicked)=>{
//     setIsClicked({...initialState,[clicked]:true}
//     );
// }
//   return (
//     <StateContext.Provider
//       value={{
//         activeMenu,
//         setActiveMenu, 
//         isClicked,
//         setIsClicked,
//         handleClick,    
//         screenSize,
//         setScreenSize,

//       }}
//     >
//       {children}
//     </StateContext.Provider>
//   );
// };

// // Custom Hook to Use Context
// export const useStateContext = () => useContext(StateContext);
import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode') || '#03C9D7');
  const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') || 'Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', currentMode === 'Dark');
  }, [currentMode]);

  const setMode = (mode) => {
    setCurrentMode(mode);
    localStorage.setItem('themeMode', mode);
    document.documentElement.classList.toggle('dark', mode === 'Dark');
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
