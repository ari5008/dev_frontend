import { createContext, useContext, useState } from "react";

export const SelectedDataContext = createContext();

export const SelectedDataProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState("");

  return (
    <SelectedDataContext.Provider value={{ selectedData, setSelectedData }} >
      {children}
    </SelectedDataContext.Provider>
  )
}

export const useSelectedData = () => useContext(SelectedDataContext);