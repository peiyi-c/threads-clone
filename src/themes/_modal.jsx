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
    form: (props) => ({
      header: {
        backgroundColor: {
          base: mode("#ffffff", "#181818")(props),
          md: "transparent",
        },
        borderRadius: { md: "18px" },
        color: { base: mode("#000000", "#ffffff")(props), md: "#ffffff" },
        fontSize: "16px",
      },
      dialogContainer: {},
      dialog: {
        h: { base: "100vh", md: "auto" },
        w: { base: "100vw" },
        maxW: { md: "38.75rem" },
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
    }),
    image: {
      header: {
        bg: "#000000",
        borderRadius: 0,
      },
      dialogContainer: {},
      dialog: {
        h: "100vh",
        w: "100vw",
        backgroundColor: "transparent",
        "--modal-shadow": "none",
      },
      closeButton: {
        position: "absolute",
        left: "0.75rem",
        m: "2rem",
        width: "44px",
        height: "44px",
        color: "#ffffff",
        bg: "#070707",
        borderRadius: "50%",
      },
      body: {
        bg: "#000000",
        borderRadius: 0,
      },
      footer: {
        bg: "#000000",
        borderRadius: 0,
      },
    },
    followers: (props) => ({
      header: {
        px: 0,
        backgroundColor: mode("#ffffff", "#181818")(props),
        borderRadius: { base: "0", sm: "18px 18px 0 0" },
        color: mode("#000000", "#ffffff")(props),
        fontSize: "16px",
      },
      dialogContainer: {},
      dialog: {
        h: { base: "100vh", sm: "auto" },
        w: { base: "100vw" },
        maxW: { md: "35rem" },
        backgroundColor: "transparent",
        "--modal-shadow": "none",
      },
      body: {
        p: 0,
        borderRadius: { base: "0", sm: "0 0 18px 18px" },
      },
      footer: {
        p: 0,
        borderRadius: { base: "0", sm: "0 0 18px 18px" },
      },
    }),
  },
};

export default modalStyle;
