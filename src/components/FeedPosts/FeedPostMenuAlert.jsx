/* eslint-disable react/prop-types */
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
  useColorModeValue,
} from "@chakra-ui/react";
import useDeleteThread from "../../hooks/useDeleteThread";

const FeedPostMenuSelfAlert = ({
  thread,
  onCloseMenuAlert,
  isOpenMenuAlert,
}) => {
  const { handleDeleteThread } = useDeleteThread();

  const handleDelete = async () => {
    await handleDeleteThread(thread);
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
          <Text color={useColorModeValue("#999999", "#777777")}>
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

export default FeedPostMenuSelfAlert;
