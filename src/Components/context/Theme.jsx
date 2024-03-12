import React, { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);
const Theme = ({ children }) => {
  const [showSearch, setShowSearch] = useState(true);


  return (
    <ThemeContext.Provider value={{ showSearch,setShowSearch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
