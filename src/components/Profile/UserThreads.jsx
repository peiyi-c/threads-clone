import useGetUserThreads from "../../hooks/useGetUserThreads";
import { FeedPostSkeleton } from "../FeedPosts/FeedPost";
import FeedPosts from "../FeedPosts/FeedPosts";

const UserThreads = () => {
  const { isLoading, threads } = useGetUserThreads();
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
  if (!isLoading) return <FeedPosts threads={threads} />;
};

export default UserThreads;
