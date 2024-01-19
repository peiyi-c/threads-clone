import {
  Grid,
  Avatar,
  Text,
  Box,
  Flex,
  HStack,
  Button,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { More, Reply, Repost, Share, UnLike } from "../../assets/logos";
import FeedPostSlider from "./FeedPostSlider";

// test images
const images = [
  {
    id: 1,
    path: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    path: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    path: "https://picsum.photos/200/280",
  },
  {
    id: 4,
    path: "https://picsum.photos/200/220",
  },
];

const FeedPost = () => {
  return (
    <>
      <Grid
        my={"12px"}
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
        <HStack justifyContent={"space-between"}>
          <Text as={"span"} fontSize={"15px"} fontWeight={"bold"} ml={2}>
            username
          </Text>
          <HStack>
            <Text as={"span"} opacity={0.5}>
              1d
            </Text>
            <Button variant={"ghost"} size={"sm"}>
              <More />
            </Button>
          </HStack>
        </HStack>

        <Box
          ml={2}
          mt={-19}
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={3}
          gridRowEnd={4}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            facilis amet fuga dolore culpa officiis aliquid voluptates ratione
            doloremque veniam laudantium inventore recusandae tempore sit ipsam
            atque accusamus, repellat magnam!
          </Text>

          <Box my={"12px"} cursor={"pointer"}>
            <FeedPostSlider images={images} isEdit={false} />
          </Box>

          <HStack my={"12px"}>
            <Button variant={"ghost"} size={"sm"}>
              <UnLike />
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              <Reply />
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              <Repost />
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              <Share />
            </Button>
          </HStack>
        </Box>

        <Flex
          mt={"18px"}
          mb={"6px"}
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={3}
          gridRowEnd={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Divider orientation="vertical" variant={"vertical"} />
        </Flex>

        <Flex
          justifyContent={"center"}
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={4}
          gridRowEnd={5}
        >
          {/* 1-3 replies */}
          {/* <Avatar size="2xs" name="" src="" /> */}
          {/* 3-10 replies */}
          <Avatar
            size="2xs"
            name=""
            src=""
            position={"relative"}
            left={"3px"}
            border={`1.5px solid ${useColorModeValue(
              "#00000026",
              "#f3f5f726"
            )}`}
            outline={`0.5px solid ${useColorModeValue(
              "transparent",
              "#101010"
            )}`}
          />
          <Avatar
            size="xs"
            name=""
            src=""
            position={"relative"}
            right={"3px"}
            border={`1.5px solid ${useColorModeValue(
              "#00000026",
              "#f3f5f726"
            )}`}
            outline={`0.5px solid ${useColorModeValue(
              "transparent",
              "#101010"
            )}`}
            backgroundColor={useColorModeValue("")}
          />
        </Flex>
        <Text
          ml={2}
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={4}
          gridRowEnd={5}
          alignSelf={"center"}
          opacity={0.5}
        >
          <Text as={"span"} cursor={"pointer"}>
            3 replies
          </Text>{" "}
          {" · "}
          <Text as={"span"} cursor={"pointer"}>
            118 likes
          </Text>
        </Text>
      </Grid>
      <Divider orientation="horizontal" variant={"standard"} />
    </>
  );
};

export default FeedPost;
