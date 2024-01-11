const dividerStyle = {
  variants: {
    standard: (props) => ({
      width: "80%",
      borderStyle: "solid",
      borderRadius: 2,
      borderBottomWidth: "1.8px",
      opacity: 1,
      bg: props.colorMode === "light" ? "#dadde1" : "#f3f5f726",
      color: props.colorMode === "light" ? "#dadde1" : "#f3f5f726",
    }),
    vertical: (props) => ({
      width: "1px",
      // height: "97%",
      borderStyle: "solid",
      borderRadius: 2,
      borderBottomWidth: "1.8px",
      opacity: 1,
      bg: props.colorMode === "light" ? "#e5e5e5" : "#333638",
      color: props.colorMode === "light" ? "#e5e5e5" : "#333638",
    }),
  },
};

export default dividerStyle;
