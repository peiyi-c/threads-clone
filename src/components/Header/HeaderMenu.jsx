import { useRef } from "react";
import { Menu as MenuIcon } from "../../assets/logos";
import {
  Button,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const HeaderMenu = () => {
  const buttonRef = useRef(null);
  const handleClick = () => {
    buttonRef.current.click();
  };
  const { toggleColorMode } = useColorMode();

  return (
    <Grid
      gridTemplateColumns={"1fr"}
      gridTemplateRows={"1fr"}
      alignItems={"center"}
      justifyItems={"end"}
    >
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={1}
        rowEnd={1}
        zIndex={"dropdown"}
      >
        <MenuIcon handleClick={handleClick} />
      </GridItem>
      <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={1}>
        <Menu closeOnSelect={true} size={"sm"}>
          <MenuButton as={Button} ref={buttonRef} opacity={0} aria-hidden>
            Menu
          </MenuButton>
          <MenuList minW="0" w={"fit-content"}>
            <MenuItem hidden aria-hidden></MenuItem>
            <MenuItem onClick={toggleColorMode}>
              <Text w={"full"} textAlign={"center"}>
                Switch appearance
              </Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Text w={"full"} textAlign={"center"}>
                Log out
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
};

export default HeaderMenu;
