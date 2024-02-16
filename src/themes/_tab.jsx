const tabsStyle = {
  baseStyle: (props) => ({
    tab: {
      w: "100%",
    },
    tablist: {
      height: "48px",
      borderColorBottom:
        props.colorMode === "light" ? "#00000026" : "#f3f5f726",
    },
    tabpanels: {},
    tabpanel: {},
  }),
};

export default tabsStyle;
