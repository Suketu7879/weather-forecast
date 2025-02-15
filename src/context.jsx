import { createContext, useState } from "react";
import { sample } from "../sample";

// Create Context
export const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  const [data, setData] = useState(sample);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}
