import React, { useContext, useState, createContext } from "react";

const SectionVisibilityContext = createContext();

export function useSectionVisibility() {
  return useContext(SectionVisibilityContext);
}

export function SectionVisibilityProvider({ children }) {
  const [section1Visibility, setSection1Visibility] = useState("");
  const [section2Visibility, setSection2Visibility] = useState("");
  const [section3Visibility, setSection3Visibility] = useState("");
  const [section4Visibility, setSection4Visibility] = useState("");
  const [section5Visibility, setSection5Visibility] = useState("");
  const [section6Visibility, setSection6Visibility] = useState("");

  return (
    <SectionVisibilityContext.Provider
      value={{
        section1Visibility,
        setSection1Visibility,
        section2Visibility,
        setSection2Visibility,
        section3Visibility,
        setSection3Visibility,
        section4Visibility,
        setSection4Visibility,
        section5Visibility,
        setSection5Visibility,
        section6Visibility,
        setSection6Visibility,
      }}
    >
      {children}
    </SectionVisibilityContext.Provider>
  );
}
