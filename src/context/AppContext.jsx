import { createContext, useContext } from "react";

const AppContext = createContext();

export const useAppStore = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const value = { title: "Title from context" };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
