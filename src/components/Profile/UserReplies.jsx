import useGetUserReplies from "../../hooks/useGetUserReplies";
import { FeedPostSkeleton } from "../FeedPosts/FeedPost";
import FeedPosts from "../FeedPosts/FeedPosts";

const UserReplies = () => {
  const { isLoading, replied } = useGetUserReplies();
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
  if (!isLoading && replied) return <FeedPosts threads={replied} />;
};

export default UserReplies;
