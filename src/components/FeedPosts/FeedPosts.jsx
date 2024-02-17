import FeedPost from "./FeedPost";
import PropTypes from "prop-types";

const FeedPosts = ({ threads }) => {
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
