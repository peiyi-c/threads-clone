import {
  Avatar,
  Button,
  Flex,
  Text,
  Divider,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import FeedPostFormModal from "./FeedPostFormModal";
import FollowingPosts from "./FollowingPosts";
import SuggestedPosts from "./SuggestedPosts";
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";

const FeedPostForm = ({ user, setTab }) => {
  const { subText } = useColors();
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      {/* new thread cta */}
      <Flex
        h={{ base: "60px", md: "74px" }}
        display={{ base: "none", md: "flex" }}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Avatar mr={"8px"} size="md" name="" src={user && user.profilePicURL} />
        <Text onClick={onOpen} mr={"auto"} fontSize={"15px"} color={subText}>
          Start a thread...
        </Text>
        <Button size={"sm"} variant={"solid"} disabled>
          Post
        </Button>
      </Flex>
      <Divider
        display={{ base: "none", md: "flex" }}
        orientation="horizontal"
        variant={"standard"}
      />
      {isOpen ? (
        <FeedPostFormModal onClosePost={onClose} isOpenPost={isOpen} />
      ) : (
        ""
      )}
      {/* for you /  following */}
      <Tabs display={{ base: "block", md: "none" }} colorScheme="black">
        <TabList>
          <Tab fontSize={15} onClick={() => setTab("forYou")}>
            For you
          </Tab>
          <Tab fontSize={15} onClick={() => setTab("following")}>
            Following
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* For you */}
            <SuggestedPosts />
          </TabPanel>
          <TabPanel>
            {/* Following */}
            <FollowingPosts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

FeedPostForm.propTypes = {
  user: PropTypes.object,
  setTab: PropTypes.func,
};

export default FeedPostForm;
