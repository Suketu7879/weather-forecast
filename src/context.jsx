import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  const [data, setData] = useState({});

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}
