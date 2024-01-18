import { mode } from "@chakra-ui/theme-tools";
const switchStyle = {
  baseStyle: (props) => ({
    container: {},
    thumb: {
      bg: "#ffffff",
      _checked: {
        bg: mode("#ffffff", "#000000")(props),
      },
    },
    track: {
      bg: mode("#DBDFE4", "#323639")(props),
      _checked: {
        bg: mode("#000000", "#ffffff")(props),
      },
    },
  }),
};

export default switchStyle;
