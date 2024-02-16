import { Text } from "@chakra-ui/react";
import useGetUserReplies from "../../hooks/useGetUserReplies";
import { FeedPostSkeleton } from "../FeedPosts/FeedPost";
import FeedPosts from "../FeedPosts/FeedPosts";
import useColors from "../../hooks/useColors";

const UserReplies = () => {
  const { isLoading, replied } = useGetUserReplies();
  const displayReplied = !isLoading && replied;
  const { subText } = useColors();

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
        <Text textAlign={"center"} mt={5} color={subText}>
          No replies yet.
        </Text>
      )}
    </>
  );
};

export default UserReplies;
