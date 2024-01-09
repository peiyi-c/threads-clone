import {
  VStack,
  Flex,
  Box,
  Text,
  Avatar,
  HStack,
  Heading,
} from "@chakra-ui/react";
const ProfileCard = () => {
  return (
    <VStack p={"16px 12px"} alignItems={"flex-start"}>
      <Flex w={"full"} flexDir={"row"} justifyContent={"space-around"} gap={0}>
        <Box>
          <Heading fontSize={"21px"} lineHeight={"30px"}>
            display name
          </Heading>
          <Text lineHeight={"21px"}>username</Text>
        </Box>
        <Box ml={"auto"}>
          <Avatar size={"lg"} />
        </Box>
      </Flex>
      <Text lineHeight={"21px"}>description</Text>
      <HStack mt={"10px"}>
        <Avatar size={"xs"} />
        <Text as={"span"}>20 followers</Text>
      </HStack>
    </VStack>
  );
};

export default ProfileCard;
