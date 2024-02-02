import useGetUserReplies from "../../hooks/useGetUserReplies";
import FeedPosts from "../FeedPosts/FeedPosts";

const UserReplies = () => {
  const { isLoading, replied } = useGetUserReplies();
  if (!isLoading && replied) return <FeedPosts threads={replied} />;
};

export default UserReplies;
