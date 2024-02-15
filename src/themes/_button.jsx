const buttonStyle = {
  variants: {
    //  override existing variants
    solid: (props) => ({
      bg: props.colorMode === "light" ? "#000000" : "#FFF",
      color: props.colorMode === "light" ? "#FFF" : "#000000",
      _hover: {
        bg: props.colorMode === "light" ? "#000000" : "#FFF",
      },
      h: "36px",
      borderRadius: "18px",
      padding: "10px 16px",
    }),
    ghost: (props) => ({
      bg: "transparent",
      color: "inherit",
      transition: "background 0.3s ease-out",
      _hover: {
        bg: props.colorMode === "light" ? "#0000000d" : "#ffffff1a",
      },
      borderRadius: "100%",
      padding: 0,
    }),
    // create new variants
    line: {
      bg: "transparent",
      color: "inherit",
      _hover: {
        bg: "transparent",
      },
      border: "unset",
      borderColor: "transparent",
      borderRadius: 0,
      padding: 0,
    },
    square: (props) => ({
      bg: props.colorMode === "light" ? "#000000" : "#FFF",
      color: props.colorMode === "light" ? "#FFF" : "#000000",
      _hover: {
        bg: props.colorMode === "light" ? "#000000" : "#FFF",
      },
      borderColor: props.colorMode === "light" ? "#000000" : "#FFF",
      h: "34px",
      borderRadius: "10px",
      p: "0 16px",
    }),
    squareOutline: (props) => ({
      bg: props.colorMode === "light" ? "#FFF" : "#000",
      color: props.colorMode === "light" ? "#000" : "#FFF",
      _hover: {
        bg: props.colorMode === "light" ? "#FFF" : "#000",
      },
      border: "1px solid",
      borderColor: props.colorMode === "light" ? "#00000026" : "#f3f5f726",
      h: "34px",
      borderRadius: "10px",
      p: "0 16px",
    }),
    auth: (props) => ({
      p: "16px",
      bg: props.colorMode === "light" ? "#000000" : "#FFFFFF",
      color: props.colorMode === "light" ? "#FFFFFF" : "#000000",
      borderRadius: "10px",
      _hover: {
        bg: props.colorMode === "light" ? "#000000" : "#FFFFFF",
        color: props.colorMode === "light" ? "#FFFFFF" : "#000000",
      },
    }),
    cta: (props) => ({
      p: "18px 24px",
      fontSize: "16px",
      lineHeight: "21px",
      bg: props.colorMode === "light" ? "#FFFFFF" : "#000000",
      color: props.colorMode === "light" ? "#000000" : "#FFFFFF",
      border: "1px solid",
      borderColor: props.colorMode === "light" ? "#0000000a" : "#ffffff0a",
      borderRadius: "100px",
      transform: "scale(0.95)",
      transition: "transform 0.3s ease-in",
      _hover: {
        bg: props.colorMode === "light" ? "#FFFFFF" : "#000000",
        color: props.colorMode === "light" ? "#000000" : "#FFFFFF",
        transform: "scale(1)",
      },
      boxShadow: "0 8px 24px 0 #00000014",
    }),
    image: {
      bg: "#070707",
      padding: 0,
      color: "inherit",

      cursor: "pointer",
      border: "unset",
      borderRadius: "50%",
      transform: "scale(0.95)",

      transition: "transform 0.5s ease-in",
      _hover: {
        transform: "scale(1)",
      },
      _disabled: {
        opacity: 0,
        cursor: "not-allowed",
      },
    },
  },
};

export default buttonStyle;
