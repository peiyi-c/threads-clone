import { Grid, Avatar, Text, Box, HStack, Skeleton } from "@chakra-ui/react";
import FeedPostSlider from "./FeedPostSlider";
import { timeAgo } from "../../utils/timeAgo";
import { FeedPostProfileName } from "./FeedPostMenus";
import useGetThreadById from "../../hooks/useGetThreadById";
import useGetReplyById from "../../hooks/useGetReplyById";
import PropTypes from "prop-types";
import useGetProfileById from "../../hooks/useGetProfileById";

const FeedQuote = ({ postId, createdBy }) => {
  const { thread } = useGetThreadById(postId);
  const { reply } = useGetReplyById(postId);
  const { isLoading, userProfile } = useGetProfileById(createdBy);

  const likes = thread?.likedBy?.length || "";
  const replies = thread?.replies?.length || "";
  const showDot = replies && likes > 0;

  const post = thread || reply;
  if (isLoading || !post)
    return <Skeleton h={"5rem"} borderRadius={"18px"}></Skeleton>;

  if (!isLoading && post)
    return (
      <Grid
        my={"12px"}
        templateColumns={"24px minmax(0, 1fr)"}
        templateRows={"21px 19px max-content max-content"}
      >
        {/* thread author avatar */}
        <Avatar
          h={"1.5rem"}
          w={"1.5rem"}
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={1}
          gridRowEnd={3}
          size={"1.5rem"}
          src={userProfile?.profilePicURL}
        />

        {/* thread author name */}
        <HStack justifyContent={"space-between"}>
          <FeedPostProfileName userProfile={userProfile} />

          {/* thread created at */}
          <Text as={"span"} opacity={0.5}>
            {timeAgo(post.createdAt)}
          </Text>
        </HStack>

        <Box
          gridColumnStart={1}
          gridColumnEnd={4}
          gridRowStart={3}
          gridRowEnd={4}
        >
          {/* thread text */}
          <Text mt={2}>{post.text}</Text>
          {/* thread images */}
          {post.mediaURLs && (
            <Box
              my={"12px"}
              cursor={"pointer"}
              position={"relative"}
              zIndex={0}
            >
              <FeedPostSlider images={post.mediaURLs} isEdit={false} />
            </Box>
          )}
        </Box>

        {/* thread replies and likes count */}
        <Text
          gridColumnStart={1}
          gridColumnEnd={3}
          gridRowStart={4}
          gridRowEnd={5}
          alignSelf={"center"}
          opacity={0.5}
        >
          <Text as={"span"}>
            {replies} {replies > 1 ? "replies" : replies > 0 ? "reply" : ""}
          </Text>
          {showDot && " · "}
          <Text as={"span"}>
            {likes} {likes > 1 ? "likes" : likes > 0 ? "like" : ""}
          </Text>
        </Text>
      </Grid>
    );
};
FeedQuote.propTypes = {
  postId: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
};

export default FeedQuote;
