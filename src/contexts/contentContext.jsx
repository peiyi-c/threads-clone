import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ContentContext = createContext();

export function ContentMessage({ children }) {
  const [content, setContent] = useState(null);
  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
}
ContentMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
