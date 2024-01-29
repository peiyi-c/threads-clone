/* eslint-disable react/prop-types */
import {
  Grid,
  Avatar,
  Text,
  Box,
  Flex,
  HStack,
  Button,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { More, Reply, Repost, Share, UnLike, Like } from "../../assets/logos";
import FeedPostSlider from "./FeedPostSlider";
import { timeAgo } from "../../utils/timeAgo";
import useGetProfileById from "../../hooks/useGetProfileById";
import useLikeThread from "../../hooks/useLikeThread";
import FeedPostComment from "./FeedPostComment";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContentContext } from "../../contexts/contentContext";
import { AvatarGroup2, AvatarGroup3 } from "./AvatarGroup";

const FeedPost = ({ thread }) => {
  const { isLoading, userProfile } = useGetProfileById(thread?.createdBy);
  const { isLiked, likes, handleLikeThread } = useLikeThread(thread);
  const navigate = useNavigate();
  const { content, setContent } = useContext(ContentContext);
  const { onOpen, isOpen, onClose } = useDisclosure();

  const threadLength =
    thread.replies && thread.replies?.length > 0 ? thread.replies.length : "";

  const openThreadPage = () => {
    if (content === "thread" || !content) {
      return;
    } else {
      setContent("thread");
      navigate(`/@${userProfile.username}/post/${thread.id}`);
    }
  };

  return (
    <>
      <Grid
        my={"12px"}
        templateColumns={"48px minmax(0, 1fr)"}
        templateRows={"21px 19px max-content max-content"}
      >
        {/* thread author avatar */}
        {!isLoading && (
          <Avatar
            gridColumnStart={1}
            gridColumnEnd={2}
            gridRowStart={1}
            gridRowEnd={3}
            size="md"
            name={userProfile?.username}
            src={userProfile?.profilePicURL}
          />
        )}
        {/* thread author name */}
        <HStack justifyContent={"space-between"}>
          {!isLoading && (
            <Text as={"span"} fontSize={"15px"} fontWeight={"bold"} ml={2}>
              {userProfile?.displayName}
            </Text>
          )}

          <HStack>
            {/* thread created at */}
            <Text as={"span"} opacity={0.5}>
              {timeAgo(thread.createdAt)}
            </Text>

            {/* more button */}
            <Button variant={"ghost"} size={"sm"}>
              <More />
            </Button>
          </HStack>
        </HStack>

        <Box
          ml={2}
          mt={-17}
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={3}
          gridRowEnd={4}
        >
          {/* thread text */}
          <Text>{thread.text}</Text>

          {/* thread images */}
          {thread.mediaURLs && (
            <Box my={"12px"} cursor={"pointer"}>
              <FeedPostSlider images={thread.mediaURLs} isEdit={false} />
            </Box>
          )}

          {/* thread like, reply, repost, share button */}
          <HStack my={0.5}>
            <Button onClick={handleLikeThread} variant={"ghost"} size={"sm"}>
              {isLiked ? <Like /> : <UnLike />}
            </Button>
            <Button onClick={onOpen} variant={"ghost"} size={"sm"}>
              <Reply />
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              <Repost />
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              <Share />
            </Button>
          </HStack>
        </Box>

        {/* thread line */}
        {thread.replies && thread.replies.length > 0 && (
          <Flex
            mt={"18px"}
            mb={"6px"}
            gridColumnStart={1}
            gridColumnEnd={2}
            gridRowStart={3}
            gridRowEnd={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Divider orientation="vertical" variant={"vertical"} />
          </Flex>
        )}
        {/* thread repliers avatar */}
        <Flex
          justifyContent={"center"}
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={4}
          gridRowEnd={5}
        >
          {/* 1 reply */}
          {thread.replies && thread.replies.length === 1 && (
            <Avatar size="xs" src="" />
          )}
          {/* 2 replies */}
          {thread.replies && thread.replies.length === 2 && <AvatarGroup2 />}
          {/* 3-10 replies */}
          {thread.replies && thread.replies.length >= 3 && <AvatarGroup3 />}
        </Flex>

        {/* thread replies and likes count */}
        <Text
          ml={2}
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={4}
          gridRowEnd={5}
          alignSelf={"center"}
          opacity={0.5}
        >
          <Text as={"span"} cursor={"pointer"} onClick={openThreadPage}>
            {threadLength}{" "}
            {thread.replies && thread.replies?.length > 1
              ? "replies · "
              : thread.replies?.length > 0
              ? "reply · "
              : ""}
          </Text>{" "}
          <Text as={"span"} cursor={"pointer"}>
            {likes && likes > 0 ? likes : ""}{" "}
            {likes > 1 ? "likes" : likes > 0 ? "like" : ""}
          </Text>
        </Text>
      </Grid>

      {/* thread button divider */}
      <Divider orientation="horizontal" variant={"standard"} />

      {/* thread reply modal */}
      {isOpen && (
        <FeedPostComment
          onCloseComment={onClose}
          isOpenComment={isOpen}
          thread={thread}
          userProfile={userProfile}
        />
      )}
    </>
  );
};

export default FeedPost;
