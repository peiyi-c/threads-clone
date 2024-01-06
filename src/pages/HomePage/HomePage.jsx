import { Container } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <>
      <Container maxW={["520px", "620px"]}>
        <FeedPosts />
      </Container>
    </>
  );
};

export default HomePage;
