/* eslint-disable react/prop-types */
import { useRef } from "react";
import {
  GridItem,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  MenuDivider,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { More } from "../../assets/logos";
import FeedPostMenuSelfAlert from "./FeedPostMenuAlert";

export const FeedPostMenuSelf = ({ thread, user }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const buttonRef = useRef(null);
  const handleClick = () => {
    buttonRef.current.click();
  };

  return (
    <>
      <Grid
        gridTemplateColumns={"1fr"}
        gridTemplateRows={"1fr"}
        alignItems={"center"}
        justifyItems={"end"}
      >
        {/* More Menu Icon */}
        <GridItem
          colStart={1}
          colEnd={2}
          rowStart={1}
          rowEnd={1}
          zIndex={"dropdown"}
        >
          <Button variant={"ghost"} size={"sm"} onClick={handleClick}>
            <More />
          </Button>
        </GridItem>

        {/*  Menu List */}
        <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={1}>
          <Menu closeOnSelect={true} size={"sm"}>
            <MenuButton
              as={Button}
              ref={buttonRef}
              opacity={0}
              aria-hidden
            ></MenuButton>
            <MenuList minW="0" p={2} w={"fit-content"}>
              <MenuItem hidden aria-hidden></MenuItem>
              <MenuItem>
                <Text role="button" color={"#FF3040"} onClick={onOpen}>
                  Delete
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </GridItem>
      </Grid>
      {isOpen && (
        <FeedPostMenuSelfAlert
          thread={thread}
          onCloseMenuAlert={onClose}
          isOpenMenuAlert={isOpen}
        />
      )}
    </>
  );
};

export const FeedPostMenuOther = ({ thread, user }) => {
  const buttonRef = useRef(null);
  const handleClick = () => {
    buttonRef.current.click();
  };

  return (
    <Grid
      gridTemplateColumns={"1fr"}
      gridTemplateRows={"1fr"}
      alignItems={"center"}
      justifyItems={"end"}
    >
      {/* More Menu Icon */}
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={1}
        rowEnd={1}
        zIndex={"dropdown"}
      >
        <Button variant={"ghost"} size={"sm"} onClick={handleClick}>
          <More />
        </Button>
      </GridItem>

      {/*  Menu List */}
      <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={1}>
        <Menu closeOnSelect={true} size={"sm"}>
          <MenuButton
            as={Button}
            ref={buttonRef}
            opacity={0}
            aria-hidden
          ></MenuButton>
          <MenuList minW="0" p={2} w={"fit-content"}>
            <MenuItem hidden aria-hidden></MenuItem>
            <MenuItem>
              <Text role="button">Unfollow</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Text role="button">Mute</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Text role="button">Hide</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
};
