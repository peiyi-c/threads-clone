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
import { More, Repost, Reposted } from "../../assets/logos";
import FeedPostMoreSelfAlert from "./FeedPostMoreSelfAlert";
import useFollowUser from "../../hooks/useFollowUser";
import useRepostPost from "../../hooks/useRepostPost";

export const FeedPostMoreSelf = ({ thread, reply }) => {
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
        <FeedPostMoreSelfAlert
          reply={reply}
          thread={thread}
          onCloseMenuAlert={onClose}
          isOpenMenuAlert={isOpen}
        />
      )}
    </>
  );
};

export const FeedPostMoreOther = ({ post }) => {
  // post is thread or reply
  const buttonRef = useRef(null);
  const { handleFollowUser, isFollowing } = useFollowUser(post.createdBy);

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
            {isFollowing && (
              <>
                <MenuItem onClick={handleFollowUser}>
                  <Text role="button">Unfollow</Text>
                </MenuItem>
                <MenuDivider />
              </>
            )}

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

export const FeedPostRepost = ({ post, type, userProfile, user }) => {
  const buttonRef = useRef(null);
  const { handleRepostPost, isReposted } = useRepostPost(post, type);

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
          {isReposted ? <Reposted /> : <Repost />}
        </Button>
      </GridItem>

      {/*  Menu List */}
      <GridItem w={"36px"} colStart={1} colEnd={2} rowStart={1} rowEnd={1}>
        <Menu closeOnSelect={true} size={"sm"}>
          <MenuButton
            as={Button}
            ref={buttonRef}
            opacity={0}
            aria-hidden
          ></MenuButton>
          <MenuList minW="0" p={2} w={"fit-content"}>
            <MenuItem hidden aria-hidden></MenuItem>

            <MenuItem onClick={handleRepostPost}>
              {isReposted ? (
                <Button h={"20px"} variant={"ghost"} color={"#FF3040"}>
                  Remove
                </Button>
              ) : (
                <Button
                  h={"20px"}
                  variant={"ghost"}
                  isDisabled={user?.uid === userProfile?.uid}
                >
                  Repost
                </Button>
              )}
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Button
                isDisabled={user?.uid === userProfile?.uid}
                h={"20px"}
                variant={"ghost"}
              >
                Quote
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
};
