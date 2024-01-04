import { mode } from "@chakra-ui/theme-tools";
const menuStyle = {
  baseStyle: (props) => ({
    button: {
      fontWeight: 600,
      bg: mode("transparent", "transparent")(props),
      color: mode("#000000", "#ffffff")(props),
      _hover: {
        bg: "transparent",
      },
    },
    list: {
      py: 2,
      px: 0,
      borderRadius: "xl",
      border: "none",
      background: mode("#ffffff", "#181818")(props),
      boxShadow: "md",
      _dark: {
        "--menu-bg": "#181818",
      },
    },
    item: {
      color: mode("#000000", "#ffffff")(props),
    },

    divider: {
      my: "1.5",
      borderColor: mode("#00000026", "#4D4D4D")(props),
      borderBottom: "1.5px solid",
    },
  }),
};

export default menuStyle;
