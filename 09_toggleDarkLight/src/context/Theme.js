import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext(
    // In previous project we don't pass any value but in this we can pass in default values
    {
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ThemeProvider = ThemeContext.Provider

// custom hook -> helps in access values/ property
export default function useTheme () {
    return useContext(ThemeContext)
}

// In this file we are creating the context, providing the context and at the same time using useContext.

// we are doing the same thing that we have used in 08_miniContext. Just in this file we have creating everything in a single file.