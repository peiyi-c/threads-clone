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
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { Reply, UnLike, Like } from "../../assets/logos";
import FeedPostSlider from "./FeedPostSlider";
import { timeAgo } from "../../utils/timeAgo";
import useGetProfileById from "../../hooks/useGetProfileById";
import useLikeThread from "../../hooks/useLikeThread";
import FeedPostComment from "./FeedPostComment";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContentContext } from "../../contexts/contentContext";
import { AvatarGroup1, AvatarGroup2, AvatarGroup3 } from "./AvatarGroup";
import {
  FeedPostMoreSelf,
  FeedPostMoreOther,
  FeedPostRepost,
  FeedPostProfileName,
  FeedPostShare,
} from "./FeedPostMenus";
import useAuthStore from "../../store/authStore";
import PropTypes from "prop-types";
import FeedQuote from "./FeedQuote";
import useColors from "../../hooks/useColors";

const FeedPost = ({ thread }) => {
  const { isLoading, userProfile } = useGetProfileById(thread?.createdBy);
  const { isLiked, likes, handleLikeThread } = useLikeThread(thread);
  const navigate = useNavigate();
  const { setContent } = useContext(ContentContext);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { user } = useAuthStore();

  const repliedByLength = thread?.repliedBy?.length;
  const replyLength =
    thread?.replies && thread?.replies.length > 0 ? thread.replies.length : "";
  const showDot = replyLength && likes > 0;
  const { imageBorder } = useColors();

  const openThreadPage = () => {
    setContent("thread");
    navigate(`/@${userProfile.username}/post/${thread.id}`);
  };
  if (thread && !isLoading)
    return (
      <>
        <Grid
          my={"12px"}
          templateColumns={"48px minmax(0, 1fr)"}
          templateRows={"21px 19px repeat(3, max-content)"}
        >
          {/* thread author avatar */}

          <Link to={`/@${userProfile.username}`}>
            <Avatar
              gridColumnStart={1}
              gridColumnEnd={2}
              gridRowStart={1}
              gridRowEnd={3}
              size="md"
              src={userProfile?.profilePicURL}
            />
          </Link>

          {/* thread author name */}
          <HStack justifyContent={"space-between"}>
            <FeedPostProfileName userProfile={userProfile} />

            <HStack>
              {/* thread created at */}
              <Text as={"span"} opacity={0.5}>
                {timeAgo(thread.createdAt)}
              </Text>

              {/* more button */}
              {user && user.uid === thread.createdBy && (
                <FeedPostMoreSelf thread={thread} />
              )}
              {user && user.uid !== thread.createdBy && (
                <FeedPostMoreOther post={thread} />
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
            {/* thread text */}
            <Text>{thread.text}</Text>

            {/* thread images */}
            {thread.mediaURLs && (
              <Box
                my={"12px"}
                cursor={"pointer"}
                position={"relative"}
                zIndex={0}
              >
                <FeedPostSlider images={thread.mediaURLs} isEdit={false} />
              </Box>
            )}
            {/* quote */}
            {thread?.quoting && (
              <Box
                my={2}
                p={"0.5rem 1.15rem"}
                border={`${imageBorder} solid 1px`}
                borderRadius={"18px"}
                gridColumnStart={2}
                gridRowStart={3}
              >
                <FeedQuote
                  postId={thread.quoting.postId}
                  createdBy={thread.quoting.createdBy}
                />
              </Box>
            )}

            {/* buttons */}
            <HStack my={0.5} gridRowStart={thread?.quoting ? 3 : 4}>
              {/*  (un)like button */}
              <Button onClick={handleLikeThread} variant={"ghost"} size={"sm"}>
                {isLiked ? <Like /> : <UnLike />}
              </Button>
              {/*  reply button */}
              <Button onClick={onOpen} variant={"ghost"} size={"sm"}>
                <Reply />
              </Button>
              {/* repost button */}
              <FeedPostRepost
                post={thread}
                type={"threads"}
                user={user}
                userProfile={userProfile}
              />
              {/* share button */}
              <FeedPostShare post={thread} type={"post"} />
            </HStack>
          </Box>

          {/* thread line */}
          {replyLength && (
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
            {repliedByLength === 1 && (
              <AvatarGroup1 repliedBy={thread.repliedBy} />
            )}
            {/* 2 replies */}
            {repliedByLength === 2 && (
              <AvatarGroup2 repliedBy={thread.repliedBy} />
            )}
            {/* 3-10 replies */}
            {repliedByLength >= 3 && (
              <AvatarGroup3 repliedBy={thread.repliedBy} />
            )}
          </Flex>

          {/* thread replies and likes count */}
          <Text
            ml={2}
            gridColumnStart={2}
            gridColumnEnd={3}
            gridRowStart={4}
            alignSelf={"center"}
            opacity={0.5}
          >
            <Text as={"span"} cursor={"pointer"} onClick={openThreadPage}>
              {replyLength}{" "}
              {replyLength > 1 ? "replies" : replyLength > 0 ? "reply" : ""}
            </Text>
            {showDot && " · "}
            <Text as={"span"} cursor={"pointer"}>
              {likes || ""} {likes > 1 && "likes"}
              {likes === 1 && "like"}
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

FeedPost.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default FeedPost;

export const FeedPostSkeleton = () => {
  return (
    <>
      <Grid
        my={"12px"}
        templateColumns={"48px minmax(0, 1fr)"}
        templateRows={"21px 19px max-content max-content"}
      >
        {/* thread author avatar */}
        <SkeletonCircle
          size={"36px"}
          startColor="#00000026"
          endColor="#f3f5f733"
        />

        {/* thread author name */}
        <HStack justifyContent={"space-between"}>
          <Skeleton
            fadeDuration={4}
            startColor="#00000026"
            endColor="#f3f5f733"
          >
            <Text as={"span"} ml={2}>
              --------------
            </Text>
          </Skeleton>

          <Skeleton startColor="#00000026" endColor="#f3f5f733">
            {/* thread created at */}
            <Text as={"span"}>-----</Text>
          </Skeleton>
        </HStack>

        <Box
          mt={-17}
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={3}
          gridRowEnd={4}
          mb={2}
        >
          {/* thread text */}
          <SkeletonText
            mt="4"
            noOfLines={2}
            spacing={1}
            skeletonHeight={4}
            startColor="#00000026"
            endColor="#ffffff12"
          />
        </Box>
      </Grid>

      {/* thread button divider */}
      <Divider orientation="horizontal" variant={"standard"} />
    </>
  );
};
