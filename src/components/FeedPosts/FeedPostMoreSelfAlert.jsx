import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  Button,
  Divider,
  AlertDialogBody,
  Text,
} from "@chakra-ui/react";
import useDeleteThread from "../../hooks/useDeleteThread";
import useDeleteReply from "../../hooks/useDeleteReply";
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";

const FeedPostMoreSelfAlert = ({
  thread,
  reply,
  onCloseMenuAlert,
  isOpenMenuAlert,
}) => {
  const { handleDeleteThread } = useDeleteThread();
  const { handleDeleteReply } = useDeleteReply();
  const { subText } = useColors();
  const handleDelete = async () => {
    if (thread) {
      await handleDeleteThread(thread);
    }
    if (reply) {
      await handleDeleteReply(reply);
    }
    onCloseMenuAlert();
  };

  return (
    <AlertDialog
      size={"xs"}
      motionPreset="slideInBottom"
      onClose={onCloseMenuAlert}
      isOpen={isOpenMenuAlert}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader textAlign={"center"}>Delete post?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody textAlign={"center"}>
          <Text color={subText}>
            If you delete this post, you won&apos;t be able to restore it.
          </Text>
        </AlertDialogBody>
        <Divider orientation="horizontal" />
        <AlertDialogFooter justifyContent={"space-around"} py={"6px"}>
          <Button
            onClick={onCloseMenuAlert}
            variant={"line"}
            fontWeight={"normal"}
          >
            Cancel
          </Button>
          <Button variant={"line"} onClick={handleDelete} color={"#ff3040"}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

FeedPostMoreSelfAlert.propTypes = {
  thread: PropTypes.object,
  reply: PropTypes.object,
  onCloseMenuAlert: PropTypes.func,
  isOpenMenuAlert: PropTypes.func,
};
export default FeedPostMoreSelfAlert;
