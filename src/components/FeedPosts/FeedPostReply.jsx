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
import { UnLike, Reply, Like } from "../../assets/logos";
import useGetReplyReplies from "../../hooks/useGetReplyReplies";
import useGetProfileById from "../../hooks/useGetProfileById";
import useLikeReply from "../../hooks/useLikeReply";
import { timeAgo } from "../../utils/timeAgo";
import AvatarGroups from "./AvatarGroup";
import {
  FeedPostMoreOther,
  FeedPostMoreSelf,
  FeedPostRepost,
  FeedPostProfileName,
  FeedPostShare,
} from "./FeedPostMenus";
import useAuthStore from "../../store/authStore";
import PropTypes from "prop-types";
import { useState } from "react";
import FeedPostActivity from "./FeedPostActivity";

const FeedPostReply = ({ reply }) => {
  const { isLoading, userProfile } = useGetProfileById(reply.createdBy);
  const { isLiked, likes, handleLikeReply } = useLikeReply(reply);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [showSubReply, setShowSubReply] = useState(false);
  const { replies } = useGetReplyReplies(reply.id);
  const { user } = useAuthStore();

  const repliedByLength = reply?.repliedBy?.length;
  const replyLength = reply?.replies?.length || "";

  if (reply && !isLoading)
    return (
      <>
        <Grid
          my={3}
          templateColumns={"48px minmax(0, 1fr)"}
          templateRows={"21px repeat(max-content, 3)"}
          columnGap={"0.65rem"}
        >
          {/* thread author avatar */}
          <Avatar
            gridColumnStart={1}
            gridColumnEnd={2}
            gridRowStart={1}
            gridRowEnd={3}
            size="md"
            name={userProfile?.username}
            src={userProfile?.profilePicURL}
          />

          {/* thread author name */}
          <HStack justifyContent={"space-between"}>
            <FeedPostProfileName userProfile={userProfile} />

            <HStack>
              {/* thread created at */}
              <Text as={"span"} opacity={0.5}>
                {timeAgo(reply.createdAt)}
              </Text>

              {/* more button */}
              {user && user.uid === reply.createdBy && (
                <FeedPostMoreSelf reply={reply} />
              )}
              {user && user.uid !== reply.createdBy && (
                <FeedPostMoreOther post={reply} />
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
              <Box
                my={2}
                gridColumnStart={2}
                gridColumnEnd={3}
                gridRowStart={2}
                position={"relative"}
                zIndex={0}
              >
                <FeedPostSlider images={reply.mediaURLs} isEdit={false} />
              </Box>
            )}

            {/* buttons */}
            <HStack my={"12px"}>
              {/*  (un)like button */}
              <Button onClick={handleLikeReply} variant={"ghost"} size={"sm"}>
                {isLiked ? <Like /> : <UnLike />}
              </Button>
              {/*  reply button */}
              <Button onClick={onOpen} variant={"ghost"} size={"sm"}>
                <Reply />
              </Button>
              {/* repost button */}
              <FeedPostRepost
                post={reply}
                type={"replies"}
                user={user}
                userProfile={userProfile}
              />
              {/* share button */}
              <FeedPostShare post={reply} type={"reply"} />
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
            {repliedByLength ? (
              <AvatarGroups
                count={repliedByLength}
                repliedBy={reply.repliedBy}
              />
            ) : (
              ""
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
            <Text
              as={"span"}
              cursor={"pointer"}
              onClick={() => setShowSubReply((prev) => !prev)}
            >
              {replyLength}{" "}
              {replyLength > 1 ? "replies" : replyLength > 0 ? "reply" : ""}
            </Text>

            <FeedPostActivity
              likes={likes}
              post={reply}
              userProfile={userProfile}
            />
          </Text>
        </Grid>
        {/* thread button divider */}
        <Divider orientation="horizontal" variant={"standard"} />

        {/* subreplies */}
        {replies &&
          showSubReply &&
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

FeedPostReply.propTypes = {
  reply: PropTypes.object.isRequired,
};

export default FeedPostReply;
