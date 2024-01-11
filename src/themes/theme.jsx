import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import menuStyle from "./_menu.jsx";
import buttonStyle from "./_button.jsx";
import dividerStyle from "./_divider.jsx";
import modalStyle from "./_modal.jsx";
import inputStyle from "./_input.jsx";
import textareaStyle from "./_textarea.jsx";
import tabsStyle from "./_tab.jsx";

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
      w: "full",
      maxWidth: "1230px",
      bg: mode("#ffffffd9", "#101010d9")(props),
      zIndex: "sticky",
    },
    main: {
      w: "full",
      maxWidth: "1230px",
    },
    footer: {
      w: "full",
      maxWidth: "1230px",
      bg: { base: mode("#ffffffd9", "#101010d9")(props), md: "transparent" },
      zIndex: "sticky",
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
  Button: { ...buttonStyle },
  Divider: { ...dividerStyle },
  Modal: { ...modalStyle },
  Input: { ...inputStyle },
  Textarea: { ...textareaStyle },
  Tabs: { ...tabsStyle },
};

const theme = extendTheme({
  config,
  styles,
  components,
});

export default theme;
