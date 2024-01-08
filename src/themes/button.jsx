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
  },
};

export default buttonStyle;
