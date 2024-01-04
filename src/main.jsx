import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";

const menuTheme = {
  list: {
    borderRadius: "16px",
    border: "none",
    boxShadow: "md",
    p: "6",
    bg: "white",
    py: 2,
    px: 0,
    borderColor: "none",
  },
  item: {
    color: "#000000",
  },
  divider: {
    mt: "1.5rem",
    mb: "1.5rem",
    borderColor: "#00000026",
    opacity: "1",
  },
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FFFFFF", "#101010")(props),
      color: mode("#000000", "#F3F5F7")(props),
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-seri",
      fontSize: "0.9375rem",
      fontWeight: 400,
      lineHeight: 1.3333,
    },
    button: {
      fontWeight: 600,
      _hover: {
        bg: "transparent",
      },
    },
    components: {
      Menu: menuTheme,
    },
  }),
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
