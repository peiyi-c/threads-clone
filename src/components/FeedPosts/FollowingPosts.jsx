import useGetFeedThreads from "../../hooks/useGetFeedThreads";
import FeedPosts from "./FeedPosts";

const FollowingPosts = () => {
  const { isLoading, threads } = useGetFeedThreads();
  if (!isLoading) return <FeedPosts threads={threads} />;
};

export default FollowingPosts;
