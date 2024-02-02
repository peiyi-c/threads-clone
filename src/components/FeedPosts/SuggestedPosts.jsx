import FeedPost from "./FeedPost";
import useGetSuggestedThreads from "../../hooks/useGetSuggestedThreads";

const SuggestedPosts = () => {
  const { isLoading, suggestedThreads } = useGetSuggestedThreads();

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
