import { Container } from "@chakra-ui/react";
import FeedPosts from "../FeedPosts/FeedPosts";
export const Main = () => {
  return (
    <main>
      <Container maxW={["520px", "620px"]}>
        <FeedPosts />
      </Container>
    </main>
  );
};
