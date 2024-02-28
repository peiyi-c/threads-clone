import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  Grid,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";
import { FeedPostProfileName } from "./FeedPostMenus";
import { timeAgo } from "../../utils/timeAgo";
import {
  Back,
  Next,
  Quote,
  Repost,
  UnLike,
  LikeAct,
  RepostAct,
  QuoteAct,
} from "../../assets/logos";
import { Link, useNavigate } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import useGetProfileById from "../../hooks/useGetProfileById";
import { ActivityStyle } from "../Activity/ActivityStyle";
import useAuthStore from "../../store/authStore";
import { useState } from "react";

const FeedPostActivity = ({ likes, post, userProfile }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [activity, setActivity] = useState("all");

  const { imageBorder, whiteBlack } = useColors();
  const likedByUsers = post?.likedBy || [];
  const repostedByUsers = post?.repostedBy || [];
  const quotedByUsers = post?.quotedBy || [];
  const reposts = repostedByUsers?.length || 0;
  const quotes = quotedByUsers?.length || 0;

  const showViewAcitvity = likes === 0 && (reposts > 0 || quotes > 0);
  const showDot = post?.replies?.length > 0 && (likes || showViewAcitvity);

  const style = {
    back: {
      position: "absolute",
      left: "30px",
      cursor: "pointer",
    },
    post: {
      card: {
        width: "90%",
        padding: "0.5rem 1.15rem",
        border: `${imageBorder} solid 1px`,
        borderRadius: "18px",
      },
      heading: {
        fontWeight: 600,
        fontSize: "16px",
      },
      gridBox: {
        margin: "12px 0",
      },
      avatar: {
        h: "1.5rem",
        w: "1.5rem",
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        gridRowEnd: 3,
      },
      text: {
        gridColumnStart: 1,
        gridColumnEnd: 4,
        gridRowStart: 2,
        gridRowEnd: 4,
      },
    },
    count: {
      width: "85%",
      cursor: "pointer",
    },
    countName: {
      fontSize: "15px",
      fontWeight: "bold",
    },
    countNum: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    next: {
      transform: "rotate(180deg)",
    },
    hrWrapper: {
      width: "85%",
      display: "flex",
      justifyContent: "flex-end",
    },
    hr: {
      width: "calc(100% - 30px)",
    },
  };

  const handleBack = () => {
    activity === "all" ? onClose() : setActivity("all");
  };

  return (
    <>
      {showDot && " · "}
      <Text
        onClick={onOpen}
        as={"span"}
        cursor={"pointer"}
        _active={{ color: whiteBlack }}
      >
        {likes || ""} {likes > 1 ? "likes" : likes === 1 ? "like" : ""}
        {showViewAcitvity ? "view post activity" : ""}
      </Text>
      {isOpen && post && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="scale"
          size={"sm"}
          variant={"postActivity"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Box onClick={handleBack} style={style.back}>
                <Back w={20} h={20} />
              </Box>
              <span style={style.post.heading}>Post activity</span>
            </ModalHeader>

            <ModalBody>
              {/* post card */}
              <Box style={style.post.card}>
                <Grid
                  style={style.post.gridBox}
                  templateColumns={"24px minmax(0, 1fr)"}
                  templateRows={"21px 19px max-content max-content"}
                >
                  {/* thread author avatar */}
                  <Avatar
                    style={style.post.card.avatar}
                    size={"1.5rem"}
                    src={userProfile?.profilePicURL}
                  />

                  {/* thread author name */}
                  <HStack justifyContent={"space-between"}>
                    <Link to={`/@${userProfile.username}`}>
                      <FeedPostProfileName userProfile={userProfile} />
                    </Link>
                    {/* thread created at */}
                    <Text as={"span"} opacity={0.5}>
                      {timeAgo(post.createdAt)}
                    </Text>
                  </HStack>
                  <Box style={style.post.text}>
                    {/* thread text */}
                    <Text mt={2}>
                      {post.text.length < 50
                        ? post.text
                        : post.text.slice(0, 50) + "..."}
                    </Text>
                  </Box>
                </Grid>
              </Box>

              {/* likes count */}
              {likes && activity === "all" ? (
                <>
                  <HStack
                    style={style.count}
                    onClick={() => setActivity("like")}
                  >
                    <UnLike />
                    <span style={style.countName}>Likes</span>
                    <span style={style.countNum}>
                      {likes && likes}{" "}
                      <Button variant={"link"} size={"24px"} style={style.next}>
                        <Next />
                      </Button>
                    </span>
                  </HStack>
                  {/* divider */}
                  <Box style={style.hrWrapper}>
                    <Divider
                      style={style.hr}
                      orientation="horizontal"
                      variant={"standard"}
                    />
                  </Box>
                </>
              ) : (
                ""
              )}

              {/* reposts count */}
              {reposts && activity === "all" ? (
                <>
                  <HStack
                    style={style.count}
                    onClick={() => setActivity("repost")}
                  >
                    <Box w={5} position={"relative"} right={1.5}>
                      <Repost />
                    </Box>
                    <span style={style.countName}>Reposts</span>
                    <span style={style.countNum}>
                      {reposts}{" "}
                      <Button variant={"link"} size={"24px"} style={style.next}>
                        <Next />
                      </Button>
                    </span>
                  </HStack>
                  {/* divider */}
                  <Box style={style.hrWrapper}>
                    <Divider
                      style={style.hr}
                      orientation="horizontal"
                      variant={"standard"}
                    />
                  </Box>
                </>
              ) : (
                ""
              )}

              {/* quotes count */}
              {quotes && activity === "all" ? (
                <>
                  <HStack
                    style={style.count}
                    onClick={() => setActivity("quote")}
                  >
                    <Quote />
                    <span style={style.countName}>Quotes</span>
                    <span style={style.countNum}>
                      {quotes}{" "}
                      <Button variant={"link"} size={"24px"} style={style.next}>
                        <Next />
                      </Button>
                    </span>
                  </HStack>
                  {/* divider */}
                  <Box style={style.hrWrapper}>
                    <Divider
                      style={style.hr}
                      orientation="horizontal"
                      variant={"standard"}
                    />
                  </Box>
                </>
              ) : (
                ""
              )}

              {/* like users */}
              {likedByUsers &&
                (activity === "all" || activity === "like") &&
                likedByUsers
                  .filter((_, idx) => idx < 10)
                  .map((userId) => (
                    <FeedPostActivityUserCard
                      key={userId}
                      profileId={userId}
                      type={"like"}
                    />
                  ))}
              {/* repost users */}
              {repostedByUsers &&
                activity === "repost" &&
                repostedByUsers
                  .filter((_, idx) => idx < 10)
                  .map((userId) => (
                    <FeedPostActivityUserCard
                      key={userId}
                      profileId={userId}
                      type={"repost"}
                    />
                  ))}
              {/* quote users */}
              {quotedByUsers &&
                activity === "quote" &&
                quotedByUsers
                  .filter((_, idx) => idx < 10)
                  .map((userId) => (
                    <FeedPostActivityUserCard
                      key={userId}
                      profileId={userId}
                      type={"quote"}
                    />
                  ))}
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default FeedPostActivity;

FeedPostActivity.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired,
};

const FeedPostActivityUserCard = ({ profileId, type }) => {
  const { isLoading, userProfile } = useGetProfileById(profileId);
  const { handleFollowUser, isFollowing } = useFollowUser(profileId);
  const { user } = useAuthStore();
  const { whiteBlack, subText } = useColors();
  const navigate = useNavigate();
  const borderColor = useColorModeValue("#f5f5f5", "#101010");

  const handleForward = () => {
    navigate(`/@${userProfile?.username}`);
  };

  const iconSwitch = (type) => {
    switch (type) {
      case "like":
        return LikeAct;
      case "repost":
        return RepostAct;
      case "quote":
        return QuoteAct;
      default:
        return LikeAct;
    }
  };

  if (!isLoading && userProfile)
    return (
      <HStack w={"85%"} alignItems={"flex-start"}>
        {/* user image */}
        <Avatar
          onClick={handleForward}
          size={"sm"}
          src={userProfile?.profilePicURL}
          outline={`0.25px solid ${borderColor}`}
          cursor={"pointer"}
        >
          <AvatarBadge
            boxSize="1.45em"
            border="1.75px solid #FFFFFF"
            style={ActivityStyle[type]}
          >
            <Icon as={iconSwitch(type)} w={10} h={10} />
          </AvatarBadge>
        </Avatar>
        <VStack ml={2} flex={1}>
          <HStack w={"full"} mb={1}>
            <VStack
              flex={1}
              alignItems={"flex-start"}
              gap={0}
              onClick={handleForward}
              cursor={"pointer"}
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
            {userProfile.uid !== user.uid && (
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

FeedPostActivityUserCard.propTypes = {
  profileId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
