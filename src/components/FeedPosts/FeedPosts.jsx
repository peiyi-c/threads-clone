/* eslint-disable react/prop-types */
import FeedPost from "./FeedPost";

const FeedPosts = ({ threads }) => {
  return (
    <>
      {threads.map((thread) => (
        <FeedPost key={thread.id} thread={thread} />
      ))}
    </>
  );
};

export default FeedPosts;
