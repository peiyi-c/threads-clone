import FeedPostForm from "../../components/FeedPosts/FeedPostForm";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import useGetFeedThreads from "../../hooks/useGetFeedThreads";
const HomePage = () => {
  const { isLoading, threads } = useGetFeedThreads();
  return (
    <section>
      <FeedPostForm />
      {!isLoading && <FeedPosts threads={threads} />}
    </section>
  );
};

export default HomePage;
