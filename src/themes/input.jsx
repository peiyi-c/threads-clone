const inputStyle = {
  variants: {
    standard: (props) => ({
      field: {
        p: "0",
        border: "none",
        bg: "transparent",
        fontSize: "15px",
        color: "inherit",
        _placeholder: {
          color: props.colorMode === "light" ? "#999999" : "#777777",
        },
        _active: {
          border: "none",
        },
        _focus: {
          border: "none",
          boxShadow: "none",
        },
        _autofill: {
          border: "none",
          boxShadow: "none",
        },
      },
    }),
  },
};

export default inputStyle;
