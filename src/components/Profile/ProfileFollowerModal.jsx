import {
  Text,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  TabList,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalHeader,
  HStack,
  VStack,
  Avatar,
  Button,
  Divider,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import useGetProfileById from "../../hooks/useGetProfileById";
import useFollowUser from "../../hooks/useFollowUser";
import useColors from "../../hooks/useColors";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const ProfileFollowerModal = ({ userProfile }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const followersCount = userProfile?.followers?.length || 0;
  const followingsCount = userProfile?.followings?.length || 0;

  const showDot = followersCount > 1 && userProfile?.bioLink;
  const { subText } = useColors();
  const TABS = [
    { name: "Followers", number: followersCount },
    { name: "Followings", number: followingsCount },
  ];

  return (
    <>
      <Text
        as={"span"}
        onClick={onOpen}
        cursor={"pointer"}
        _hover={{
          textDecoration: "underline",
        }}
      >
        {followersCount} {followersCount > 1 ? "followers" : "follower"}
        {showDot && <Text as={"span"}> · </Text>}{" "}
      </Text>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="scale"
          size={"sm"}
          variant={"followers"}
        >
          <ModalOverlay />
          <ModalContent>
            <Tabs colorScheme="black">
              <ModalHeader pb={0}>
                {/* tab list */}
                <TabList>
                  {TABS.map((tab) => (
                    <Tab key={tab.name} flexDir={"column"}>
                      <Text fontSize={"16px"}>{tab.name}</Text>
                      <Text fontSize={"12px"} fontWeight={"normal"}>
                        {tab.number}
                      </Text>
                    </Tab>
                  ))}
                </TabList>
              </ModalHeader>
              <ModalBody
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <TabPanels>
                  <TabPanel py={0} minH={"7.25rem"}>
                    {/* profile followers */}
                    {followersCount ? (
                      <>
                        {userProfile.followers.map((follower, idx) => (
                          <FollowCard key={follower + idx} userId={follower} />
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                    {!followersCount && (
                      <Text
                        textAlign={"center"}
                        h={"6rem"}
                        m={5}
                        pt={5}
                        color={subText}
                      >
                        No followers yet.
                      </Text>
                    )}
                  </TabPanel>
                  <TabPanel py={0}>
                    {/* profile followings */}
                    {followingsCount ? (
                      <>
                        {userProfile.followings.map((following, idx) => (
                          <FollowCard
                            key={following + idx}
                            userId={following}
                          />
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                    {!followingsCount && (
                      <Text
                        textAlign={"center"}
                        h={"6rem"}
                        m={5}
                        pt={5}
                        color={subText}
                      >
                        No followings yet.
                      </Text>
                    )}
                  </TabPanel>
                </TabPanels>
              </ModalBody>
            </Tabs>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

ProfileFollowerModal.propTypes = {
  userProfile: PropTypes.object,
};

export default ProfileFollowerModal;

const FollowCard = ({ userId }) => {
  const { isLoading, userProfile } = useGetProfileById(userId);
  const { user } = useAuthStore();
  const { handleFollowUser, isFollowing } = useFollowUser(userId);
  const { borderColor, subText, whiteBlack } = useColors();
  const navigate = useNavigate();

  const handleForward = () => {
    navigate(`/@${userProfile?.username}`);
  };

  if (!isLoading)
    return (
      <HStack my={5} alignItems={"flex-start"}>
        {/* user image */}
        <Avatar
          onClick={handleForward}
          w={"36px"}
          h={"36px"}
          src={userProfile.profilePicURL}
          outline={`0.25px solid ${borderColor}`}
        />

        <VStack ml={2} flex={1}>
          <HStack w={"full"} mb={1}>
            <VStack
              flex={1}
              alignItems={"flex-start"}
              gap={0}
              onClick={handleForward}
            >
              {/* user display name */}
              <Text as={"span"} fontSize={"15px"} fontWeight={"bold"}>
                {userProfile.displayName}
              </Text>
              {/* user username */}
              <Text fontSize={"15px"} opacity={0.5}>
                {userProfile.username}
              </Text>
            </VStack>

            {/* follow button */}
            {user.uid !== userId && (
              <Button
                onClick={handleFollowUser}
                variant={"squareOutline"}
                minW={"6.5rem"}
                color={isFollowing ? subText : "inherit"}
                bg={isFollowing ? whiteBlack : "inherit"}
                _hover={{
                  bg: whiteBlack,
                }}
              >
                <Text p={"0 4px"} as={"span"} fontSize={"15px"}>
                  {isFollowing ? "Following" : "Follow"}
                </Text>
              </Button>
            )}
          </HStack>
          <Divider orientation="horizontal" />
        </VStack>
      </HStack>
    );
};

FollowCard.propTypes = {
  userId: PropTypes.string,
};
