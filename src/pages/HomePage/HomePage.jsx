import FeedPostForm from "../../components/FeedPosts/FeedPostForm";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import useGetFeedThreads from "../../hooks/useGetFeedThreads";
import useAuthStore from "../../store/authStore";

const HomePage = () => {
  const { isLoading, threads } = useGetFeedThreads();
  const { user } = useAuthStore();

  return (
    <section>
      {user && <FeedPostForm user={user} />}
      {!isLoading && <FeedPosts threads={threads} />}
    </section>
  );
};

export default HomePage;
