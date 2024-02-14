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
import PropTypes from "prop-types";

const FeedPostCommentAlert = ({
  onCloseCommentAlert,
  isOpenCommentAlert,
  onCloseComment,
}) => {
  const { pathname } = useLocation();
  const { setContent } = useContext(ContentContext);

  const handleDiscard = () => {
    onCloseComment();
    setContent(pathname.substring(1));
  };
  return (
    <AlertDialog
      size={"xs"}
      motionPreset="slideInBottom"
      onClose={onCloseCommentAlert}
      isOpen={isOpenCommentAlert}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader textAlign={"center"}>
          Discard reply?
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <Divider orientation="horizontal" />
        <AlertDialogFooter justifyContent={"space-around"} py={"6px"}>
          <Button
            onClick={onCloseCommentAlert}
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

FeedPostCommentAlert.propTypes = {
  onCloseCommentAlert: PropTypes.func.isRequired,
  isOpenCommentAlert: PropTypes.func.isRequired,
  onCloseComment: PropTypes.func.isRequired,
};

export default FeedPostCommentAlert;
