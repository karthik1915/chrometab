import React, { createContext, useContext, useState } from "react";

interface AppStateContextType {
  state: boolean;
  toggleState: () => void;
}
interface MyComponentProps {
  children: React.ReactNode;
}

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined
);

export const AppStateProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [state, setState] = useState<boolean>(false);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  return (
    <AppStateContext.Provider value={{ state, toggleState }}>
      {children}
    </AppStateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
