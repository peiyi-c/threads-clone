import {
  VStack,
  Flex,
  Box,
  Text,
  HStack,
  Heading,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

const ProfileCardSkeleton = () => {
  return (
    <>
      <VStack p={"16px 12px"} alignItems={"flex-start"}>
        <Flex
          w={"full"}
          flexDir={"row"}
          justifyContent={"space-around"}
          gap={0}
        >
          <Box>
            <Skeleton>
              <Heading height={"21px"} w={"full"}>
                display name
              </Heading>
            </Skeleton>
            <Skeleton mt={2}>
              <Text>username</Text>
            </Skeleton>
          </Box>
          <Box ml={"auto"}>
            <SkeletonCircle size={"64px"} />
          </Box>
        </Flex>
        <Skeleton>
          <Text lineHeight={"21px"} w={"full"}>
            biography description in text and biography description link
          </Text>
        </Skeleton>
        <HStack mt={"10px"}>
          <SkeletonCircle size="10" />
          <Skeleton>
            <Text as={"span"}>followers count</Text>
          </Skeleton>
        </HStack>
      </VStack>
    </>
  );
};

export default ProfileCardSkeleton;
