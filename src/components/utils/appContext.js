import React, { useContext, useState, createContext } from "react";

const SectionVisibilityContext = createContext();

export function useSectionVisibility() {
  return useContext(SectionVisibilityContext);
}

export function SectionVisibilityProvider({ children }) {
  const [isVisibleSection1, setIsVisibleSection1] = useState("");
  const [isVisibleSection2, setIsVisibleSection2] = useState("");
  const [isVisibleSection3, setIsVisibleSection3] = useState("");
  const [isVisibleSection4, setIsVisibleSection4] = useState("");
  const [isVisibleSection5, setIsVisibleSection5] = useState("");
  const [isVisibleSection6, setIsVisibleSection6] = useState("");

  return (
    <SectionVisibilityContext.Provider
      value={{
        isVisibleSection1,
        setIsVisibleSection1,
        isVisibleSection2,
        setIsVisibleSection2,
        isVisibleSection3,
        setIsVisibleSection3,
        isVisibleSection4,
        setIsVisibleSection4,
        isVisibleSection5,
        setIsVisibleSection5,
        isVisibleSection6,
        setIsVisibleSection6,
      }}
    >
      {children}
    </SectionVisibilityContext.Provider>
  );
}
