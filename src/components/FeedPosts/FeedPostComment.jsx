import {
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Avatar,
  Box,
  Textarea,
  Flex,
  Divider,
  HStack,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import FeedPostSlider from "./FeedPostSlider";
import { AttachMedia, Poll, Tag } from "../../assets/logos";
import { timeAgo } from "../../utils/timeAgo";
import useAuthStore from "../../store/authStore";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import usePreviewImg from "../../hooks/usePreviewImg";
import FeedPostCommentAlert from "./FeedPostCommentAlert";
import useReplyThread from "../../hooks/useReplyThread";
import useReplyReply from "../../hooks/useReplyReply";
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";

const FeedPostComment = ({
  onCloseComment,
  isOpenComment,
  thread,
  reply,
  userProfile,
}) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const textRef = useRef();

  const { onOpen, isOpen, onClose } = useDisclosure();
  const { user } = useAuthStore();
  const { handleImgChange, selectedFile, setSelectedFile, type } =
    usePreviewImg();
  const { isUpdating, handleFeedPostReply } = useReplyThread();
  const { isCommenting, handleReplyReply } = useReplyReply();
  const { blackWhite, whiteBlack, subText } = useColors();

  const MIN_TEXTAREA_HEIGHT = 12;

  useLayoutEffect(() => {
    if (text) {
      textRef.current.style.height = "inherit";
      textRef.current.style.height = `${Math.max(
        textRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [text]);

  useEffect(() => {
    if (selectedFile && type) {
      setImages([
        ...images,
        { id: crypto.randomUUID(), path: selectedFile, type },
      ]);
      setSelectedFile(null);
    }
  }, [setSelectedFile, selectedFile, images, type]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleCloseComment = () => {
    // If text, open Alert Modal. If !text, close comment Modal.
    text || images ? onOpen() : onCloseComment();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (thread) {
      await handleFeedPostReply(thread.id, text, images);
    } else if (reply) {
      await handleReplyReply(reply.id, text, images);
    }
    setText("");
    setImages([]);
    onCloseComment();
  };

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpenComment}
        onClose={handleCloseComment}
        motionPreset="scale"
        size={"lg"}
        variant={"form"}
      >
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>
              <Grid
                templateColumns={"minmax(64px,100px) 1fr minmax(64px,100px)"}
                alignItems={"center"}
              >
                <Button
                  onClick={handleCloseComment}
                  variant={"line"}
                  fontWeight={"normal"}
                  display={{ md: "none" }}
                  textAlign={"left"}
                  pl={0}
                >
                  Cancel
                </Button>
                <Text
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  as={"span"}
                  justifySelf={"center"}
                >
                  Reply
                </Text>
              </Grid>
            </ModalHeader>

            <ModalBody>
              {/* Original Thread Post / Thread Reply */}
              <Grid
                my={"12px"}
                templateColumns={"48px minmax(0, 1fr)"}
                templateRows={"21px 19px max-content max-content"}
              >
                <Avatar
                  gridColumnStart={1}
                  gridColumnEnd={2}
                  gridRowStart={1}
                  gridRowEnd={3}
                  size="md"
                  src={userProfile?.profilePicURL}
                />

                <HStack justifyContent={"space-between"}>
                  <Text
                    as={"span"}
                    fontSize={"15px"}
                    fontWeight={"bold"}
                    ml={2}
                  >
                    {userProfile.displayName}
                  </Text>

                  <Text as={"span"} opacity={0.5}>
                    {thread && timeAgo(thread.createdAt)}
                    {reply && timeAgo(reply.createdAt)}
                  </Text>
                </HStack>

                <Box
                  ml={2}
                  mt={-19}
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  gridRowStart={3}
                  gridRowEnd={4}
                >
                  <Text>
                    {thread && thread.text}
                    {reply && reply.text}
                  </Text>
                  {thread && thread.mediaURLs && (
                    <Box my={"12px"} cursor={"pointer"}>
                      <FeedPostSlider
                        images={thread.mediaURLs}
                        isEdit={false}
                      />
                    </Box>
                  )}
                  {reply && reply.mediaURLs && (
                    <Box my={"12px"} cursor={"pointer"}>
                      <FeedPostSlider images={reply.mediaURLs} isEdit={false} />
                    </Box>
                  )}
                </Box>

                <Flex
                  mt={"18px"}
                  mb={"6px"}
                  gridColumnStart={1}
                  gridColumnEnd={2}
                  gridRowStart={3}
                  gridRowEnd={4}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Divider orientation="vertical" variant={"vertical"} />
                </Flex>

                <Flex
                  justifyContent={"center"}
                  gridColumnStart={1}
                  gridColumnEnd={2}
                  gridRowStart={4}
                  gridRowEnd={5}
                ></Flex>
              </Grid>
              {/* New Thread Reply Field */}
              <Grid
                templateColumns={"48px minmax(0, 1fr)"}
                templateRows={"21px repeat(max-content, 3)"}
                columnGap={"0.65rem"}
              >
                <Avatar
                  gridColumnStart={1}
                  gridColumnEnd={2}
                  gridRowStart={1}
                  gridRowEnd={3}
                  size="md"
                  name={user.username}
                  src={user.profilePicURL}
                />
                <Text as={"span"} fontSize={"15px"} fontWeight={"bold"}>
                  {user.displayName}
                </Text>
                <Box>
                  <Textarea
                    ref={textRef}
                    value={text}
                    resize={"none"}
                    onChange={handleInputChange}
                    size={"sm"}
                    minHeight={MIN_TEXTAREA_HEIGHT}
                    overflowY={"hidden"}
                    variant={"standard"}
                    gridColumnStart={2}
                    gridColumnEnd={3}
                    gridRowStart={2}
                    placeholder={`Reply to ${userProfile.displayName}...`}
                  />
                  {images && (
                    <Box gridColumnStart={2} gridColumnEnd={3} gridRowStart={2}>
                      <FeedPostSlider
                        images={images}
                        setImages={setImages}
                        isEdit={true}
                      />
                    </Box>
                  )}
                </Box>

                <Flex
                  pt={"33px"}
                  justifyContent={"center"}
                  gridColumnStart={1}
                  gridColumnEnd={2}
                  gridRowStart={2}
                  gridRowEnd={4}
                >
                  <Divider orientation="vertical" variant={"vertical"} />
                </Flex>

                <HStack
                  mt={2.5}
                  columnGap={"0.75rem"}
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  gridRowStart={3}
                  gridRowEnd={4}
                >
                  <FormLabel
                    htmlFor="image"
                    m={0}
                    cursor={"pointer"}
                    _active={{
                      transform: "scale(0.85)",
                      transition: "transform 0.11s ease-in",
                    }}
                  >
                    <AttachMedia />
                  </FormLabel>
                  <Tag />
                  <Poll />
                </HStack>
                <Input
                  type="file"
                  id="image"
                  hidden
                  onChange={handleImgChange}
                />
              </Grid>
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent={"space-between"}>
              <Text as={"span"} color={subText}>
                Your followers can reply
              </Text>
              <Button
                isLoading={thread ? isUpdating : reply ? isCommenting : ""}
                size={"sm"}
                variant={"solid"}
                type="submit"
                ml={"auto"}
                isDisabled={!text || !images}
                _disabled={{
                  bg: blackWhite,
                  color: whiteBlack,
                  opacity: 0.25,
                  _hover: {
                    bg: blackWhite,
                    color: whiteBlack,
                    opacity: 0.25,
                    cursor: "not-allowed",
                  },
                }}
              >
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
      {isOpen ? (
        <FeedPostCommentAlert
          onCloseCommentAlert={onClose}
          isOpenCommentAlert={isOpen}
          onCloseComment={onCloseComment}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default FeedPostComment;

FeedPostComment.propTypes = {
  onCloseComment: PropTypes.func.isRequired,
  isOpenComment: PropTypes.bool.isRequired,
  thread: PropTypes.object,
  reply: PropTypes.object,
  userProfile: PropTypes.object,
};
