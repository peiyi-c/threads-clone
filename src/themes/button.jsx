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
  },
};

export default buttonStyle;
