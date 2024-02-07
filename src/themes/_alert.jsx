const alertStyle = {
  variants: {
    //  override existing variants
    subtle: {
      container: {
        background: "#000000",
        color: "#FFFFFF",
        _dark: {
          background: "#FFFFFF",
          color: "#000000",
        },
      },
      title: {
        display: "none",
      },
      icon: {
        width: "0",
      },
      description: {
        color: "#FFFFFF",
        fontWeight: "600",
        _dark: {
          color: "#000000",
        },
      },
    },
  },
};

export default alertStyle;
