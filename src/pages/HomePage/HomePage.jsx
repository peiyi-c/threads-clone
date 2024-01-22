import FeedPostForm from "../../components/FeedPosts/FeedPostForm";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
const HomePage = () => {
  const { isLoading, threads } = useGetFeedPosts();
  return (
    <section>
      <FeedPostForm />
      {!isLoading && <FeedPosts threads={threads} />}
    </section>
  );
};

export default HomePage;
