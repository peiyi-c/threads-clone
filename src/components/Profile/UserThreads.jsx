import { Text, useColorModeValue } from "@chakra-ui/react";
import useGetUserThreads from "../../hooks/useGetUserThreads";
import { FeedPostSkeleton } from "../FeedPosts/FeedPost";
import FeedPosts from "../FeedPosts/FeedPosts";

const UserThreads = () => {
  const { isLoading, threads } = useGetUserThreads();
  const displayThreads = !isLoading && threads.length;
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
      {displayThreads ? (
        <FeedPosts threads={threads} />
      ) : (
        <Text textAlign={"center"} mt={5} color={color}>
          No threads yet.
        </Text>
      )}
    </>
  );
};

export default UserThreads;
