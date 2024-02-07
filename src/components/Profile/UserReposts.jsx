import { Text, useColorModeValue } from "@chakra-ui/react";
import useGetUserReposts from "../../hooks/useGetUserReposts";
import { FeedPostSkeleton } from "../FeedPosts/FeedPost";
import FeedPosts from "../FeedPosts/FeedPosts";

const UserReposts = () => {
  const { isLoading, reposts } = useGetUserReposts();
  const displayReposts = !isLoading && reposts;
  const color = useColorModeValue("#000000", "#F3F5F7");
  if (isLoading)
    return (
      <>
        {Array(Math.floor(Math.random() * 3))
          .fill(0)
          .map((num, index) => (
            <FeedPostSkeleton key={index} />
          ))}
      </>
    );
  return (
    <>
      {displayReposts ? (
        <FeedPosts threads={reposts} />
      ) : (
        <Text textAlign={"center"} mt={5} color={color}>
          No reposts yet.
        </Text>
      )}
    </>
  );
};

export default UserReposts;
