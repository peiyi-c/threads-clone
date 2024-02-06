import FeedPost, { FeedPostSkeleton } from "./FeedPost";
import useGetSuggestedThreads from "../../hooks/useGetSuggestedThreads";

const SuggestedPosts = () => {
  const { isLoading, suggestedThreads } = useGetSuggestedThreads();

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
  if (!isLoading && suggestedThreads)
    return (
      <>
        {suggestedThreads.map((thread) => (
          <FeedPost thread={thread} key={thread.id} />
        ))}
      </>
    );
};

export default SuggestedPosts;
