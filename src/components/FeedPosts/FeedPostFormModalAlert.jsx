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
} from "@chakra-ui/react";
import { useContext } from "react";
import { ContentContext } from "../../contexts/contentContext";
import { useLocation } from "react-router-dom";

const FeedPostFormModalAlert = ({
  onClosePostAlert,
  isOpenPostAlert,
  onClosePost,
}) => {
  const { pathname } = useLocation();
  const { setContent } = useContext(ContentContext);

  const handleDiscard = () => {
    onClosePost();
    setContent(pathname.substring(1));
  };

  return (
    <AlertDialog
      size={"xs"}
      motionPreset="slideInBottom"
      onClose={onClosePostAlert}
      isOpen={isOpenPostAlert}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader textAlign={"center"}>
          Discard thread?
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <Divider orientation="horizontal" />
        <AlertDialogFooter justifyContent={"space-around"} py={"6px"}>
          <Button
            onClick={onClosePostAlert}
            variant={"line"}
            fontWeight={"normal"}
          >
            Cancel
          </Button>
          <Button variant={"line"} onClick={handleDiscard} color={"#ff3040"}>
            Discard
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FeedPostFormModalAlert;
