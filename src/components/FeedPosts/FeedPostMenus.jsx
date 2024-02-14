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
  useDisclosure,
} from "@chakra-ui/react";
import { More, Repost, Reposted } from "../../assets/logos";
import FeedPostMoreSelfAlert from "./FeedPostMoreSelfAlert";
import useFollowUser from "../../hooks/useFollowUser";
import useRepostPost from "../../hooks/useRepostPost";
import PropTypes from "prop-types";

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
          <More handleClick={handleClick} />
        </GridItem>

        {/*  Menu List */}
        <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={1}>
          <Menu closeOnSelect={true} size={"sm"}>
            <MenuButton ref={buttonRef} opacity={0} aria-hidden></MenuButton>
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
FeedPostMoreSelf.propTypes = {
  thread: PropTypes.object,
  reply: PropTypes.object,
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
        <More handleClick={handleClick} />
      </GridItem>

      {/*  Menu List */}
      <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={1}>
        <Menu closeOnSelect={true} size={"sm"}>
          <MenuButton ref={buttonRef} opacity={0} aria-hidden></MenuButton>
          <MenuList minW="0" p={2} w={"fit-content"}>
            <MenuItem hidden aria-hidden></MenuItem>
            {isFollowing && (
              <>
                <MenuItem onClick={handleFollowUser}>Unfollow</MenuItem>
                <MenuDivider />
              </>
            )}

            <MenuItem>
              <Text>Mute</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Text>Hide</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
};
FeedPostMoreOther.propTypes = {
  post: PropTypes.object,
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
      w={"2rem"}
    >
      {/* More Menu Icon */}
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={1}
        rowEnd={1}
        zIndex={"dropdown"}
      >
        {isReposted ? (
          <Reposted handleClick={handleClick} />
        ) : (
          <Repost handleClick={handleClick} />
        )}
      </GridItem>

      {/*  Menu List */}
      <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={1}>
        <Menu closeOnSelect={true} size={"sm"}>
          <MenuButton ref={buttonRef} opacity={0} aria-hidden></MenuButton>
          <MenuList minW="0" p={2} w={"fit-content"}>
            <MenuItem hidden aria-hidden></MenuItem>
            {isReposted ? (
              <MenuItem onClick={handleRepostPost}>
                <Text>Remove</Text>
              </MenuItem>
            ) : (
              <MenuItem
                onClick={handleRepostPost}
                isDisabled={user?.uid === userProfile?.uid}
              >
                <Text>Repost</Text>
              </MenuItem>
            )}
            <MenuDivider />
            <MenuItem isDisabled={user?.uid === userProfile?.uid}>
              <Text>Quote</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
};
FeedPostRepost.propTypes = {
  post: PropTypes.object,
  type: PropTypes.string,
  userProfile: PropTypes.object,
  user: PropTypes.object,
};
