import { mode } from "@chakra-ui/theme-tools";
const modalStyle = {
  baseStyle: (props) => ({
    header: {
      bg: mode("#ffffff", "#181818")(props),
      borderRadius: "18px",
    },
    overlay: {
      bg: "#00000066",
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
      borderRadius: "18px",
    },
  }),
  variants: {
    title: {
      header: {
        padding: 0,
        color: "#fff",
        textAlign: "center",
        bg: "transparent",
      },
      dialogContainer: {
        bg: "transparent",

        margin: 0,
      },
      dialog: {
        bg: "transparent",
        "--modal-shadow": "none",
      },
      body: {},
      footer: {},
    },
    form: {
      header: {
        borderRadius: { md: "18px" },
      },
      dialogContainer: {},
      dialog: {
        h: { base: "100vh", md: "auto" },
        w: { base: "100vw" },
        maxW: { md: "32rem" },
        borderRadius: { md: "18px" },
      },
      body: {
        borderRadius: { md: "18px" },
      },
      footer: {
        borderRadius: { md: "18px" },
      },
    },
  },
};

export default modalStyle;
