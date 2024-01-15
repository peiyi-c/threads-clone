import { mode } from "@chakra-ui/theme-tools";
const modalStyle = {
  baseStyle: (props) => ({
    header: {
      bg: mode("#ffffff", "#181818")(props),
      borderRadius: "18px",
    },
    overlay: {
      bg: "#56565699",
    },
    dialogContainer: {},
    dialog: {
      bg: mode("#ffffff", "#181818")(props),
      borderRadius: "18px",
    },
    body: {
      p: "24px",
      bg: mode("#ffffff", "#181818")(props),
      borderRadius: "18px",
    },
    footer: {
      bg: mode("#ffffff", "#181818")(props),
      boxShadow: "0 12px 24px 0 #00000014",
      borderRadius: "18px",
    },
  }),
  variants: {
    form: {
      header: {
        backgroundColor: { base: "#ffffff", md: "transparent" },
        borderRadius: { md: "18px" },
        color: { base: "#000000", md: "#ffffff" },
      },
      dialogContainer: {},
      dialog: {
        h: { base: "100vh", md: "auto" },
        w: { base: "100vw" },
        maxW: { md: "32rem" },
        backgroundColor: "transparent",
        "--modal-shadow": "none",
      },
      body: {
        py: 0,
        borderRadius: { md: "18px 18px 0 0" },
      },
      footer: {
        borderRadius: { md: "0 0 18px 18px" },
      },
    },
  },
};

export default modalStyle;
