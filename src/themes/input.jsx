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
    search: (props) => ({
      field: {
        h: { base: "42px", md: "70px" },
        fontSize: "15px",
        color: "inherit",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: props.colorMode === "light" ? "#CED0D4" : "#3E4042",
        bg: props.colorMode === "light" ? "#fafafa" : "#0a0a0a",
        _placeholder: {
          color: props.colorMode === "light" ? "#999999" : "#777777",
        },
        _active: {},
        _focus: {
          boxShadow: "#00000014 0px 12px 24px 0px",
        },
      },
    }),
    auth: (props) => ({
      field: {
        p: "16px",
        h: "full",
        bg: "#f5f5f5",
        fontSize: "15px",
        border: "1px solid transparent",
        borderRadius: "12px",
        _placeholder: {
          color: props.colorMode === "light" ? "#999999" : "#777777",
        },
        _active: {
          border: "1px solid",
          borderColor: props.colorMode === "light" ? "#00000026" : "#4D4D4D",
        },
        _focus: {
          border: "1px solid",
          borderColor: props.colorMode === "light" ? "#00000026" : "#4D4D4D",
        },
      },
    }),
  },
};

export default inputStyle;
