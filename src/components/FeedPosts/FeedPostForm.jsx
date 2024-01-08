/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Flex,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import FeedPostFormModal from "./FeedPostFormModal";

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
        <FeedPostFormModal onClosePost={onClose} isOpenPost={isOpen} />
      ) : (
        ""
      )}
    </>
  );
};

export default FeedPostForm;
