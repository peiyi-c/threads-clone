/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Grid,
  HStack,
  Divider,
  Textarea,
  Button,
  Text,
  Avatar,
  useColorModeValue,
  Flex,
  useDisclosure,
  Input,
  // CloseButton,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { AttachMedia, Poll, Tag } from "../../assets/logos";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FeedPostFormModalAlert from "./FeedPostFormModalAlert";
import useAuthStore from "../../store/authStore";
import usePreviewImg from "../../hooks/usePreviewImg";
import FeedPostSlider from "./FeedPostSlider";
import useCreateThread from "../../hooks/useCreateThread";
import useColors from "../../hooks/useColors";

const FeedPostFormModal = ({ onClosePost, isOpenPost }) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const textRef = useRef();

  const { onOpen, isOpen, onClose } = useDisclosure();
  const { user } = useAuthStore();
  const { handleImgChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { handleCreatePost, isLoading } = useCreateThread();
  const { blackWhite, whiteBlack } = useColors();

  const MIN_TEXTAREA_HEIGHT = 16;

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

  const handleClosePost = () => {
    // If text, open Alert Modal. If !text, close this Modal.
    text || images ? onOpen() : onClosePost();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCreatePost(text, images);
    setText("");
    setImages([]);
    onClosePost();
  };

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpenPost}
        onClose={handleClosePost}
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
                  onClick={handleClosePost}
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
                  New thread
                </Text>
              </Grid>
            </ModalHeader>

            <ModalBody>
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
                  {user && user?.username}
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
                    placeholder={"Start a thread..."}
                    mb={2}
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
                  mt={"0.5rem"}
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
                <ModalBodySub user={user} edit={text.trim().length} />
              </Grid>
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent={"space-between"}>
              <Text as={"span"} color={useColorModeValue("#999999", "#777777")}>
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
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
      {isOpen ? (
        <FeedPostFormModalAlert
          onClosePostAlert={onClose}
          isOpenPostAlert={isOpen}
          onClosePost={onClosePost}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default FeedPostFormModal;

const ModalBodySub = ({ user, edit }) => {
  return (
    <>
      <Avatar
        m={"6px 0 0 12px"}
        size="xs"
        name={user.username}
        src={user.profilePicURL}
        opacity={edit ? "1" : "0.5"}
      />
      <Input
        isDisabled={!edit}
        mt={"0.5rem"}
        size={"xs"}
        variant={"standard"}
        alignSelf={"center"}
        opacity={edit ? "1" : "0.25"}
        placeholder={"Add to thread..."}
      />
    </>
  );
};

// const FeedPostComment = ({ user, MIN_TEXTAREA_HEIGHT }) => {
//   const [comment, setComment] = useState();
//   const commentRef = useRef();

//   useLayoutEffect(() => {
//     if (comment) {
//       commentRef.current.style.height = "inherit";
//       commentRef.current.style.height = `${Math.max(
//         commentRef.current.scrollHeight,
//         MIN_TEXTAREA_HEIGHT
//       )}px`;
//     }
//   }, [comment, MIN_TEXTAREA_HEIGHT]);

//   const handleInputChange = (e) => {
//     setComment(() => e.target.value);
//   };

//   return (
//     <ModalBody borderRadius={"0"} p={"0 24px"}>
//       <Grid
//         templateColumns={"48px minmax(0, 1fr) 25px"}
//         templateRows={"21px repeat(auto, max-content)"}
//         columnGap={"0.65rem"}
//       >
//         <Avatar
//           gridColumnStart={1}
//           gridColumnEnd={2}
//           gridRowStart={1}
//           gridRowEnd={3}
//           size="md"
//           name={user.username}
//           src={user.profilePicURL}
//         />

//         <Text as={"span"} fontSize={"15px"} fontWeight={"bold"}>
//           {user && user?.username}
//         </Text>
//         <CloseButton size={"sm"} />
//         <Textarea
//           ref={commentRef}
//           value={comment}
//           resize={"none"}
//           onChange={handleInputChange}
//           size={"sm"}
//           minHeight={MIN_TEXTAREA_HEIGHT}
//           overflowY={"hidden"}
//           variant={"standard"}
//           gridColumnStart={2}
//           gridColumnEnd={3}
//           gridRowStart={2}
//           placeholder={"Say More..."}
//         />
//         <Flex
//           pt={"33px"}
//           justifyContent={"center"}
//           gridColumnStart={1}
//           gridColumnEnd={2}
//           gridRowStart={2}
//           gridRowEnd={4}
//         >
//           <Divider orientation="vertical" variant={"vertical"} />
//         </Flex>
//         <HStack
//           mt={"0.5rem"}
//           columnGap={"0.75rem"}
//           gridColumnStart={2}
//           gridColumnEnd={3}
//           gridRowStart={3}
//           gridRowEnd={4}
//           cursor={"pointer"}
//         >
//           <AttachMedia />
//           <Tag />
//           <Poll />
//         </HStack>
//         <Flex
//           gridColumnStart={1}
//           gridColumnEnd={4}
//           gridRowStart={4}
//           gap={"1.2rem"}
//         >
//           <ModalBodySub user={user} edit={comment?.trim().length} />
//         </Flex>
//       </Grid>
//     </ModalBody>
//   );
// };
