/* eslint-disable react/prop-types */
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
  useColorModeValue,
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

const FeedPostComment = ({
  onCloseComment,
  isOpenComment,
  thread,
  userProfile,
}) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const textRef = useRef();

  const { onOpen, isOpen, onClose } = useDisclosure();
  const { user } = useAuthStore();
  const { handleImgChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { isUpdating, handleThreadReply } = useReplyThread();

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
    if (selectedFile) {
      setImages([...images, { id: crypto.randomUUID(), path: selectedFile }]);
      setSelectedFile(null);
    }
  }, [setSelectedFile, selectedFile, images]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleCloseComment = () => {
    // If text, open Alert Modal. If !text, close comment Modal.
    text || images ? onOpen() : onCloseComment();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleThreadReply(thread.id, text, images);
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
              {/* Original Thread Post */}
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
                  name={userProfile?.username}
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
                    {timeAgo(thread.createdAt)}
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
                  <Text>{thread.text}</Text>
                  {thread.mediaURLs && (
                    <Box my={"12px"} cursor={"pointer"}>
                      <FeedPostSlider
                        images={thread.mediaURLs}
                        isEdit={false}
                      />
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
              {/* New Thread Comment Field */}
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
              <Text as={"span"} color={useColorModeValue("#999999", "#777777")}>
                Your followers can reply
              </Text>
              <Button
                isLoading={isUpdating}
                size={"sm"}
                variant={"solid"}
                type="submit"
                ml={"auto"}
                isDisabled={!text || !images}
                _disabled={{
                  bg: useColorModeValue("#000000", "#FFFFFF"),
                  color: useColorModeValue("#FFFFFF", "#000000"),
                  opacity: 0.25,
                  _hover: {
                    bg: useColorModeValue("#000000", "#FFFFFF"),
                    color: useColorModeValue("#FFFFFF", "#000000"),
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
