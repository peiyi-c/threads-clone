import { Text } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import PropTypes from "prop-types";

const FeedPosts = ({ threads }) => {
  if (!threads.length)
    return (
      <Text textAlign={"center"} mt={5}>
        No posts yet.
      </Text>
    );
  return (
    <>
      {threads.map((thread) => (
        <FeedPost key={thread.id} thread={thread} />
      ))}
    </>
  );
};
FeedPosts.propTypes = {
  threads: PropTypes.array,
};

export default FeedPosts;
