/* eslint-disable react/prop-types */
import FeedPost from "./FeedPost";

const FeedPosts = ({ threads }) => {
  return (
    <>
      {threads.map((thread, index) => (
        <FeedPost key={index} thread={thread} />
      ))}
    </>
  );
};

export default FeedPosts;
