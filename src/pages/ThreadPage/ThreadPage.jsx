/* eslint-disable react/prop-types */
import FeedPost from "../../components/FeedPosts/FeedPost";
import useGetThreadReplies from "../../hooks/useGetThreadReplies";
import { useLocation } from "react-router-dom";
import useGetThreadById from "../../hooks/useGetThreadById";
import FeedPostReply from "../../components/FeedPosts/FeedPostReply";

const ThreadPage = () => {
  const { pathname } = useLocation();
  const threadId = pathname.slice(pathname.indexOf("/post/") + "/post/".length);
  const { isLoading, thread } = useGetThreadById(threadId);
  const { replies } = useGetThreadReplies(threadId);

  return (
    <>
      {/* Thread Post */}
      {!isLoading && <FeedPost thread={thread} />}
      {/* Thread Replies */}
      {replies &&
        replies.map((reply) => <FeedPostReply key={reply.id} reply={reply} />)}
    </>
  );
};
export default ThreadPage;
