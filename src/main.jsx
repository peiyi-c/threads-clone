import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";
import menuStyle from "./themes/menu.jsx";

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
    header: {
      bg: mode("#ffffffd9", "#101010d9")(props),
    },
    footer: {
      bg: mode("#ffffffd9", "#101010d9")(props),
    },
  }),
};

const config = {
  initialColorMode:
    JSON.stringify(localStorage.getItem("chakra-ui-color-mode")) || "system",
  useSystemColorMode: true,
};

const components = {
  Menu: { ...menuStyle },
};

const theme = extendTheme({
  config,
  styles,
  components,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
