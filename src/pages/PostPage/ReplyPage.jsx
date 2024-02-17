import { useLocation } from "react-router-dom";
import useGetReplyById from "../../hooks/useGetReplyById";
import FeedPostReply from "../../components/FeedPosts/FeedPostReply";
import useGetReplyReplies from "../../hooks/useGetReplyReplies";

const ReplyPage = () => {
  const { pathname } = useLocation();
  const replyId = pathname.slice(
    pathname.indexOf("/reply/") + "/reply/".length
  );
  const { isLoading, reply } = useGetReplyById(replyId);
  const { replies } = useGetReplyReplies(replyId);
  console.log(replies);
  return (
    <>
      {/* Reply Post & Reply Replies */}
      {!isLoading && <FeedPostReply reply={reply} />}
    </>
  );
};

export default ReplyPage;
