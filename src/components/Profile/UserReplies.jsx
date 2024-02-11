import { Text, useColorModeValue } from "@chakra-ui/react";
import useGetUserReplies from "../../hooks/useGetUserReplies";
import { FeedPostSkeleton } from "../FeedPosts/FeedPost";
import FeedPosts from "../FeedPosts/FeedPosts";

const UserReplies = () => {
  const { isLoading, replied } = useGetUserReplies();
  const displayReplied = !isLoading && replied;
  const color = useColorModeValue("#000000", "#F3F5F7");
  if (isLoading)
    return (
      <>
        {Array(Math.floor(Math.random() * 6))
          .fill(0)
          .map((num, index) => (
            <FeedPostSkeleton key={index} />
          ))}
      </>
    );
  return (
    <>
      {displayReplied ? (
        <FeedPosts threads={replied} />
      ) : (
        <Text textAlign={"center"} mt={5} color={color}>
          No replies yet.
        </Text>
      )}
    </>
  );
};

export default UserReplies;
