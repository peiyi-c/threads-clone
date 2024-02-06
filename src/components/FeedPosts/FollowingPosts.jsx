import useGetFeedThreads from "../../hooks/useGetFeedThreads";
import { FeedPostSkeleton } from "./FeedPost";
import FeedPosts from "./FeedPosts";

const FollowingPosts = () => {
  const { isLoading, threads } = useGetFeedThreads();

  if (isLoading)
    return (
      <>
        {Array(Math.floor(Math.random() * 12))
          .fill(0)
          .map((num, index) => (
            <FeedPostSkeleton key={index} />
          ))}
      </>
    );
  if (!isLoading) return <FeedPosts threads={threads} />;
};

export default FollowingPosts;
