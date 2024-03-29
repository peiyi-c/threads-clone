import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Grid,
  HStack,
  Textarea,
  Button,
  Text,
  Avatar,
  //useDisclosure,
  Input,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FeedQuote from "./FeedQuote";
import useAuthStore from "../../store/authStore";
import usePreviewImg from "../../hooks/usePreviewImg";
import FeedPostSlider from "./FeedPostSlider";
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";
import { AttachMedia } from "../../assets/logos";
import useUpdatePost from "../../hooks/useUpdatePost";

const FeedPostFormEditModal = ({ post, postType, onCloseEdit, isOpenEdit }) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const textareaRef = useRef(null);

  const { user } = useAuthStore();
  const { handleImgChange, selectedFile, setSelectedFile, type } =
    usePreviewImg();
  const { blackWhite, whiteBlack, subText } = useColors();

  const MIN_TEXTAREA_HEIGHT = 10;
  const { imageBorder } = useColors();

  const { handleUpdatePost, isLoading } = useUpdatePost();

  useEffect(() => {
    if (post.text) setText(post.text);
    if (post.mediaURLs) setImages(post.mediaURLs);
  }, [post.text, post.mediaURLs]);

  useLayoutEffect(() => {
    if (text) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [text]);

  useEffect(() => {
    if (selectedFile && type) {
      setImages([
        ...images,
        { id: crypto.randomUUID(), path: selectedFile, type: type },
      ]);
      setSelectedFile(null);
    }
  }, [setSelectedFile, selectedFile, images, type]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleCloseEdit = () => {
    // If text, open Alert Modal. If !text, close this Modal.
    onCloseEdit();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleUpdatePost(post, text, images, postType);
    setText("");
    setImages([]);
    onCloseEdit();
  };

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpenEdit}
        onClose={handleCloseEdit}
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
                  onClick={handleCloseEdit}
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
                  Edit {postType === "threads" ? "Thread" : "Reply"}
                </Text>
              </Grid>
            </ModalHeader>

            <ModalBody>
              <Grid
                templateColumns={"48px minmax(0, 1fr)"}
                templateRows={"21px repeat(3, max-content)"}
                columnGap={"0.65rem"}
              >
                <Avatar
                  gridColumnStart={1}
                  gridColumnEnd={2}
                  gridRowStart={1}
                  gridRowEnd={3}
                  size="md"
                  src={user.profilePicURL}
                />
                <Text as={"span"} fontSize={"15px"} fontWeight={"bold"}>
                  {user && user?.username}
                </Text>

                <Textarea
                  ref={textareaRef}
                  height={"max-content"}
                  value={text}
                  gridColumnStart={2}
                  gridRowStart={2}
                  resize={"none"}
                  size={"sm"}
                  onChange={handleInputChange}
                  overflowY={"hidden"}
                  variant={"standard"}
                  py={2}
                />

                {images && (
                  <Box
                    gridColumnStart={2}
                    gridColumnEnd={3}
                    gridRowStart={3}
                    mt={3}
                  >
                    <FeedPostSlider
                      images={images}
                      setImages={setImages}
                      isEdit={true}
                    />
                  </Box>
                )}
                <HStack
                  mt={"0.5rem"}
                  columnGap={"0.75rem"}
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  gridRowStart={4}
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
                </HStack>
                <Input
                  type="file"
                  id="image"
                  hidden
                  onChange={handleImgChange}
                />
                {/* if this post is a quote */}
                {post.quoting && (
                  <Box
                    my={2}
                    p={"0.5rem 1.15rem"}
                    border={`${imageBorder} solid 1px`}
                    borderRadius={"18px"}
                    gridColumnStart={2}
                    gridRowStart={5}
                  >
                    <FeedQuote
                      postId={post.quoting.postId}
                      createdBy={post.quoting.createdBy}
                    />
                  </Box>
                )}
              </Grid>
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent={"space-between"}>
              <Text as={"span"} color={subText}>
                Your followers can reply
              </Text>
              <Button
                isLoading={isLoading}
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
                Update
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

FeedPostFormEditModal.propTypes = {
  post: PropTypes.object.isRequired,
  postType: PropTypes.string,
  onCloseEdit: PropTypes.func,
  isOpenEdit: PropTypes.bool,
};

export default FeedPostFormEditModal;
