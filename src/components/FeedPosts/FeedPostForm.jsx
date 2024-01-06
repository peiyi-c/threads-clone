/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Flex,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Grid,
  Input,
  HStack,
} from "@chakra-ui/react";
import { AttachMedia, Poll, Tag, VerticalLine } from "../../assets/logos";

const FeedPostForm = () => {
  const color = useColorModeValue("#999999", "#777777");
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        h={{ base: "60px", md: "74px" }}
        display={{ base: "none", md: "flex" }}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Avatar mr={"8px"} size="md" name="" src="" />
        <Text onClick={onOpen} mr={"auto"} fontSize={"15px"} color={color}>
          Start a thread...
        </Text>
        <Button size={"sm"} variant={"solid"} disabled>
          Post
        </Button>
      </Flex>
      {isOpen ? (
        <>
          <FeedPostFormModal onClose={onClose} isOpen={isOpen} />
          {/* <FeedPostFormModalHeader onClose={onClose} isOpen={isOpen} /> */}
        </>
      ) : null}
    </>
  );
};
const FeedPostFormModalHeader = ({ isOpen, onClose }) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInTop"
      variant={"title"}
    >
      <ModalContent>
        <ModalHeader>New thread</ModalHeader>
      </ModalContent>
    </Modal>
  );
};
const FeedPostFormModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"lg"}
        variant={"form"}
      >
        <ModalOverlay />
        <form>
          <ModalContent>
            <ModalHeader display={{ md: "none" }}>
              <Grid
                templateColumns={"minmax(64px,100px) 1fr minmax(64px,100px)"}
                alignItems={"center"}
              >
                <Button
                  onClick={onClose}
                  variant={"line"}
                  fontWeight={"normal"}
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
                templateRows={"21px 19px max-content max-content"}
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
                <Text as={"span"} fontSize={"15px"} fontWeight={"bold"} ml={2}>
                  username
                </Text>
                <Input
                  type="text"
                  size={"xs"}
                  variant={"standard"}
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  placeholder={"Start a thread..."}
                />
                <VerticalLine h={32} />
                <HStack
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  gridRowStart={3}
                  gridRowEnd={4}
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
                <Input
                  type="text"
                  size={"xs"}
                  variant={"standard"}
                  gridColumnStart={2}
                  gridColumnEnd={3}
                  gridRowStart={4}
                  gridRowEnd={5}
                  alignSelf={"center"}
                  opacity={0.5}
                  placeholder={"Add to thread"}
                />
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
    </>
  );
};
export default FeedPostForm;
