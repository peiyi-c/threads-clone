/* eslint-disable react/prop-types */
import {
  Grid,
  Avatar,
  Text,
  Box,
  Flex,
  Divider,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import FeedPostSlider from "../../components/FeedPosts/FeedPostSlider";
import FeedPostComment from "../../components/FeedPosts/FeedPostComment";
import { UnLike, Repost, Reply, Share, Like, More } from "../../assets/logos";
import useGetProfileById from "../../hooks/useGetProfileById";
import useLikeReply from "../../hooks/useLikeReply";
import { timeAgo } from "../../utils/timeAgo";

const ThreadReply = ({ reply }) => {
  const { isLoading, userProfile } = useGetProfileById(reply.createdBy);
  const { isLiked, likes, handleLikeReply } = useLikeReply(reply);
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        my={3}
        templateColumns={"48px minmax(0, 1fr)"}
        templateRows={"21px repeat(max-content, 3)"}
        columnGap={"0.65rem"}
      >
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

        <HStack justifyContent={"space-between"}>
          {!isLoading && (
            <Text as={"span"} fontSize={"15px"} fontWeight={"bold"} ml={2}>
              {userProfile?.displayName}
            </Text>
          )}

          <HStack>
            <Text as={"span"} opacity={0.5}>
              {timeAgo(reply.createdAt)}
            </Text>
            <Button variant={"ghost"} size={"sm"}>
              <More />
            </Button>
          </HStack>
        </HStack>

        <Box>
          <Text
            resize={"none"}
            size={"sm"}
            minHeight={"max-content"}
            overflowY={"hidden"}
            variant={"standard"}
            gridColumnStart={2}
            gridColumnEnd={3}
            gridRowStart={2}
          >
            {reply.text}
          </Text>
          {reply.mediaURLs && (
            <Box my={2} gridColumnStart={2} gridColumnEnd={3} gridRowStart={2}>
              <FeedPostSlider images={reply.mediaURLs} isEdit={false} />
            </Box>
          )}
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

        <Flex
          pt={"33px"}
          justifyContent={"center"}
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={2}
          gridRowEnd={4}
        >
          <Divider orientation="vertical" variant={"vertical"} />
        </Flex>
        <Flex
          justifyContent={"center"}
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={4}
          gridRowEnd={5}
        >
          {/* 1-3 replies */}
          {/* <Avatar size="2xs" name="" src="" /> */}
          {/* 3-10 replies */}
          <Avatar
            size="2xs"
            name=""
            src=""
            position={"relative"}
            left={"3px"}
            border={`1.5px solid ${useColorModeValue(
              "#00000026",
              "#f3f5f726"
            )}`}
            outline={`0.5px solid ${useColorModeValue(
              "transparent",
              "#101010"
            )}`}
          />
          <Avatar
            size="xs"
            name=""
            src=""
            position={"relative"}
            right={"3px"}
            border={`1.5px solid ${useColorModeValue(
              "#00000026",
              "#f3f5f726"
            )}`}
            outline={`0.5px solid ${useColorModeValue(
              "transparent",
              "#101010"
            )}`}
            backgroundColor={useColorModeValue("")}
          />
        </Flex>
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
            {reply.replies && reply.replies?.length > 0 ? "replies · " : ""}{" "}
          </Text>{" "}
          <Text as={"span"} cursor={"pointer"}>
            {likes} {likes > 1 ? "likes" : "like"}
          </Text>
        </Text>
      </Grid>
      <Divider orientation="horizontal" variant={"standard"} />
      {isOpen && (
        <FeedPostComment
          onCloseComment={onClose}
          isOpenComment={isOpen}
          thread={reply}
          userProfile={userProfile}
        />
      )}
    </>
  );
};

export default ThreadReply;
