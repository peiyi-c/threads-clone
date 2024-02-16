import { Text } from "@chakra-ui/react";
import useGetUserReposts from "../../hooks/useGetUserReposts";
import { FeedPostSkeleton } from "../FeedPosts/FeedPost";
import FeedPosts from "../FeedPosts/FeedPosts";
import useColors from "../../hooks/useColors";

const UserReposts = () => {
  const { isLoading, reposts } = useGetUserReposts();
  const displayReposts = !isLoading && reposts;
  const { subText } = useColors();
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
        <Text textAlign={"center"} mt={5} color={subText}>
          No reposts yet.
        </Text>
      )}
    </>
  );
};

export default UserReposts;
