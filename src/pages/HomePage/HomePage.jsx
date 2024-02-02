import { useState } from "react";
import FeedPostForm from "../../components/FeedPosts/FeedPostForm";
import useAuthStore from "../../store/authStore";
import { Box, Button, Text } from "@chakra-ui/react";
import FollowingPosts from "../../components/FeedPosts/FollowingPosts";
import SuggestedPosts from "../../components/FeedPosts/SuggestedPosts";
import Switch from "../../assets/logos";

const HomePage = () => {
  const [tab, setTab] = useState("forYou");
  const { user } = useAuthStore();

  const handleClick = () => {
    tab === "forYou" ? setTab("following") : setTab("forYou");
  };

  if (user)
    return (
      <section>
        {/* feeds under md */}
        <FeedPostForm user={user} setTab={setTab} />

        {/* feeds from md */}
        <Box display={{ base: "none", md: "block" }}>
          {tab === "forYou" && <SuggestedPosts />}
          {tab === "following" && <FollowingPosts />}
          {/* switch button */}
          <Button
            onClick={handleClick}
            position={"fixed"}
            bottom={"4rem"}
            left={"4vw"}
            variant={"cta"}
            size={"xlg"}
          >
            <Text mr={2}>{tab === "forYou" ? "Following" : "For You"}</Text>
            <Switch />
          </Button>
        </Box>
      </section>
    );
};

export default HomePage;
