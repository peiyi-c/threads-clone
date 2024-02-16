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
  Button,
  VStack,
  Flex,
  Box,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { More, Repost, Reposted } from "../../assets/logos";
import FeedPostMoreSelfAlert from "./FeedPostMoreSelfAlert";
import useFollowUser from "../../hooks/useFollowUser";
import useRepostPost from "../../hooks/useRepostPost";
import PropTypes from "prop-types";
import useColors from "../../hooks/useColors";
import useGetProfileById from "../../hooks/useGetProfileById";

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
      zIndex={0}
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

export const FeedPostProfileName = ({ userProfile, isLoading }) => {
  const buttonRef = useRef(null);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { userProfile: user } = useGetProfileById(
    userProfile?.followers[userProfile?.followers.length - 1] || "no-follower"
  );
  const { handleFollowUser, isFollowing } = useFollowUser(userProfile?.uid);
  const followersCount = user?.followers?.length || 0;

  const { subText } = useColors();
  if (!isLoading)
    return (
      <>
        <Text
          as={"span"}
          fontSize={"15px"}
          fontWeight={"bold"}
          ml={2}
          cursor={"pointer"}
          _hover={{
            textDecoration: "underline",
          }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {userProfile?.displayName}
        </Text>

        {/* Profile Information */}
        <Menu
          closeOnBlur={true}
          closeOnSelect={true}
          size={"sm"}
          isOpen={isOpen}
        >
          {isOpen && (
            <>
              <MenuButton
                ref={buttonRef}
                as={Button}
                opacity={0}
                aria-hidden
                position={"absolute"}
              ></MenuButton>
              <MenuList
                py={2}
                w={"fit-content"}
                mt={"-1rem"}
                boxShadow={"8px 8px 24px 4px #00000014"}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <MenuItem w={"20rem"} onMouseEnter={onOpen}>
                  <VStack
                    p={"16px 12px"}
                    alignItems={"flex-start"}
                    w={"full"}
                    gap={0}
                  >
                    <Flex
                      w={"full"}
                      flexDir={"row"}
                      justifyContent={"space-around"}
                      gap={0}
                    >
                      <Box w={"full"}>
                        <Text fontSize={"16px"}>{userProfile.displayName}</Text>
                        <Text fontWeight={"normal"}>
                          {userProfile.username}
                        </Text>
                      </Box>
                      <Box ml={"auto"}>
                        <Avatar size={"lg"} src={userProfile.profilePicURL} />
                      </Box>
                    </Flex>
                    <Box fontWeight={"normal"} mt={1}>
                      {userProfile.bioDescription}
                    </Box>
                    <HStack mt={2} color={subText}>
                      {user && <Avatar size={"xs"} src={user?.profilePicURL} />}
                      <Text as={"span"} fontWeight={"normal"}>
                        {followersCount}{" "}
                        {followersCount > 1 ? "followers" : "follower"}
                      </Text>
                    </HStack>
                    {/* Follow Button */}
                    <Button
                      onClick={handleFollowUser}
                      w={"full"}
                      variant={isFollowing ? "squareOutline" : "square"}
                      fontSize={"15px"}
                      mt={5}
                    >
                      {isFollowing ? "Unfollow" : "Follow"}
                    </Button>
                  </VStack>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </>
    );
};
FeedPostProfileName.propTypes = {
  userProfile: PropTypes.object,
  isLoading: PropTypes.bool,
};
