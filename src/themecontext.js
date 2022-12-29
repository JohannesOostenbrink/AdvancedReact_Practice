import React from 'react'; 

const ThemeContext = React.createContext();

export default ThemeContext;


export const ThemeProvider = ({ children }) => children;

export const useTheme = () => ({ theme: "light" });

