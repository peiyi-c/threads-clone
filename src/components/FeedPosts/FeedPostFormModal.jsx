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
} from "@chakra-ui/react";
import { AttachMedia, Poll, Tag } from "../../assets/logos";
import { useLayoutEffect, useRef, useState } from "react";
import FeedPostFormModalAlert from "./FeedPostFormModalAlert";
import useAuthStore from "../../store/authStore";

const FeedPostFormModal = ({ onClosePost, isOpenPost }) => {
  const [value, setValue] = useState("");
  const textRef = useRef(null);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { user } = useAuthStore();

  const MIN_TEXTAREA_HEIGHT = 16;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useLayoutEffect(() => {
    if (value) {
      textRef.current.style.height = "inherit";
      textRef.current.style.height = `${Math.max(
        textRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [value]);

  const handleClosePost = () => {
    onOpen(); // open Alert
  };
  return (
    <>
      <Modal
        isCentered
        isOpen={isOpenPost}
        onClose={handleClosePost}
        motionPreset="slideInBottom"
        size={"lg"}
        variant={"form"}
      >
        <ModalOverlay />
        <form>
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
                  name=""
                  src=""
                />
                <Text as={"span"} fontSize={"15px"} fontWeight={"bold"}>
                  {user && user?.username}
                </Text>
                <Textarea
                  ref={textRef}
                  value={value}
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
                />
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
                  cursor={"pointer"}
                >
                  <AttachMedia />
                  <Tag />
                  <Poll />
                </HStack>
                <Avatar
                  m={"6px 0 0 12px"}
                  gridColumnStart={1}
                  gridColumnEnd={2}
                  gridRowStart={4}
                  gridRowEnd={5}
                  size="xs"
                  name=""
                  src=""
                />
                <Text
                  mt={"0.5rem"}
                  size={"xs"}
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  gridRowStart={4}
                  gridRowEnd={5}
                  alignSelf={"center"}
                  opacity={0.25}
                >
                  Add to thread
                </Text>
              </Grid>
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent={"space-between"}>
              <Text as={"span"} color={useColorModeValue("#999999", "#777777")}>
                Your followers can reply
              </Text>
              <Button size={"sm"} variant={"solid"} type="button" ml={"auto"}>
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
