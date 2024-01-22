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
  useColorModeValue,
} from "@chakra-ui/react";
import { More, Reply, Repost, Share, UnLike } from "../../assets/logos";
import FeedPostSlider from "./FeedPostSlider";
import { timeAgo } from "../../utils/timeAgo";
import useGetProfileById from "../../hooks/useGetProfileById";

const FeedPost = ({ thread }) => {
  const { isLoading, userProfile } = useGetProfileById(thread.createdBy);

  return (
    <>
      <Grid
        my={"12px"}
        templateColumns={"48px minmax(0, 1fr)"}
        templateRows={"21px 19px max-content max-content"}
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
              {userProfile.displayName}
            </Text>
          )}

          <HStack>
            <Text as={"span"} opacity={0.5}>
              {timeAgo(thread.createdAt)}
            </Text>
            <Button variant={"ghost"} size={"sm"}>
              <More />
            </Button>
          </HStack>
        </HStack>

        <Box
          ml={2}
          mt={-19}
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={3}
          gridRowEnd={4}
        >
          <Text>{thread.text}</Text>
          {thread.mediaURLs && (
            <Box my={"12px"} cursor={"pointer"}>
              <FeedPostSlider images={thread.mediaURLs} isEdit={false} />
            </Box>
          )}

          <HStack my={"12px"}>
            <Button variant={"ghost"} size={"sm"}>
              <UnLike />
            </Button>
            <Button variant={"ghost"} size={"sm"}>
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
            {thread.repliedBy ? thread.repliedBy?.length : 0}{" "}
            {thread.repliedBy && thread.repliedBy?.length > 0
              ? "replies"
              : "reply"}
          </Text>{" "}
          {" · "}
          <Text as={"span"} cursor={"pointer"}>
            {thread.likedBy ? thread.likedBy?.length : 0}{" "}
            {thread.likedBy && thread.likedBy?.length > 0 ? "likes" : "like"}
          </Text>
        </Text>
      </Grid>
      <Divider orientation="horizontal" variant={"standard"} />
    </>
  );
};

export default FeedPost;
