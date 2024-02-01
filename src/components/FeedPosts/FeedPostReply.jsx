/* eslint-disable react/prop-types */
import {
  Grid,
  Avatar,
  Text,
  Box,
  Flex,
  Divider,
  HStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import FeedPostSlider from "./FeedPostSlider";
import FeedPostComment from "./FeedPostComment";
import { UnLike, Repost, Reply, Share, Like } from "../../assets/logos";
import useGetReplyReplies from "../../hooks/useGetReplyReplies";
import useGetProfileById from "../../hooks/useGetProfileById";
import useLikeReply from "../../hooks/useLikeReply";
import { timeAgo } from "../../utils/timeAgo";
import { AvatarGroup1, AvatarGroup2, AvatarGroup3 } from "./AvatarGroup";
import { FeedPostMenuOther, FeedPostMenuSelf } from "./FeedPostMenu";
import useAuthStore from "../../store/authStore";

const FeedPostReply = ({ reply }) => {
  const { isLoading, userProfile } = useGetProfileById(reply.createdBy);
  const { isLiked, likes, handleLikeReply } = useLikeReply(reply);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { replies } = useGetReplyReplies(reply.id);
  const { user } = useAuthStore();
  const threadLength =
    reply.replies && reply.replies?.length > 0 ? reply.replies.length : "";

  return (
    <>
      <Grid
        my={3}
        templateColumns={"48px minmax(0, 1fr)"}
        templateRows={"21px repeat(max-content, 3)"}
        columnGap={"0.65rem"}
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
              {timeAgo(reply.createdAt)}
            </Text>

            {/* more button */}
            {user && user.uid === reply.createdBy && (
              <FeedPostMenuSelf reply={reply} />
            )}
            {user && user.uid !== reply.createdBy && (
              <FeedPostMenuOther reply={reply} />
            )}
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
          {/* reply text */}
          <Text>{reply.text}</Text>

          {/* reply images */}
          {reply.mediaURLs && (
            <Box my={2} gridColumnStart={2} gridColumnEnd={3} gridRowStart={2}>
              <FeedPostSlider images={reply.mediaURLs} isEdit={false} />
            </Box>
          )}

          {/* reply like, reply, repost, share button */}
          <HStack my={"12px"}>
            <Button onClick={handleLikeReply} variant={"ghost"} size={"sm"}>
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
        {reply.replies && reply.replies.length > 0 && (
          <Flex
            my={"12px"}
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

        {/* reply repliers avatar */}
        <Flex
          justifyContent={"center"}
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={4}
          gridRowEnd={5}
        >
          {/* 1 reply */}
          {reply.repliedBy && reply.repliedBy.length === 1 && (
            <AvatarGroup1 repliedBy={reply.repliedBy} />
          )}
          {/* 2 replies */}
          {reply.repliedBy && reply.repliedBy.length === 2 && (
            <AvatarGroup2 repliedBy={reply.repliedBy} />
          )}
          {/* 3-10 replies */}
          {reply.repliedBy && reply.repliedBy.length >= 3 && (
            <AvatarGroup3 repliedBy={reply.repliedBy} />
          )}
        </Flex>

        {/* reply replies and likes count */}
        <Text
          ml={2}
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={4}
          gridRowEnd={5}
          alignSelf={"center"}
          opacity={0.5}
        >
          <Text as={"span"} cursor={"pointer"}>
            {threadLength}{" "}
            {reply.replies && reply.replies?.length > 1
              ? "replies · "
              : reply.replies?.length > 0
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

      {/* subreplies */}
      {replies &&
        replies.map((reply) => (
          <Box key={reply.id} pl={5}>
            <FeedPostReply reply={reply} />
          </Box>
        ))}

      {/* reply reply modal */}
      {isOpen && (
        <FeedPostComment
          onCloseComment={onClose}
          isOpenComment={isOpen}
          reply={reply}
          userProfile={userProfile}
        />
      )}
    </>
  );
};

export default FeedPostReply;
