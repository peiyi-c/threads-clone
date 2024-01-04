/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ContentContext = createContext();

export function ContentMessage({ children }) {
  const [content, setContent] = useState(null);
  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
}
