import { createContext, useState } from "react";

export const GlobalContext = createContext({
  bodyModal: { show: false, payload: "" },
  setBodyModal: undefined,
});

export function GlobalProvider({ children }) {
  const [bodyModal, setBodyModal] = useState({ show: false, payload: "" });

  return (
    <GlobalContext.Provider value={{bodyModal, setBodyModal}}>
      {children}
    </GlobalContext.Provider>
  );
}
