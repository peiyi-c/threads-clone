import useGetUserThreads from "../../hooks/useGetUserThreads";
import FeedPosts from "../FeedPosts/FeedPosts";

const UserThreads = () => {
  const { isLoading, threads } = useGetUserThreads();
  if (!isLoading) return <FeedPosts threads={threads} />;
};

export default UserThreads;
