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
import useLogout from "../../hooks/useLogout";

const HeaderMenu = () => {
  const buttonRef = useRef(null);
  const handleClick = () => {
    buttonRef.current.click();
  };
  const { toggleColorMode } = useColorMode();
  const { logout } = useLogout();

  return (
    <Grid
      gridTemplateColumns={"1fr"}
      gridTemplateRows={"1fr"}
      alignItems={"center"}
      justifyItems={"end"}
    >
      {/* Hamburger Menu Icon */}
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={1}
        rowEnd={1}
        zIndex={"dropdown"}
      >
        <MenuIcon handleClick={handleClick} />
      </GridItem>

      {/*  Menu List */}
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
              <Text
                onClick={() => logout()}
                w={"full"}
                textAlign={"center"}
                role="button"
              >
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
