import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Activities from "../../components/Activity/Activities";
import useAuthStore from "../../store/authStore";
import useGetProfileById from "../../hooks/useGetProfileById";
const ActivityPage = () => {
  const [select, setSelect] = useState("All");
  const { user } = useAuthStore();
  const { isLoading, userProfile } = useGetProfileById(user?.uid);
  const activities = userProfile?.notifications;

  const BUTTONs = [
    "All",
    "Requests",
    "Replies",
    "Mentions",
    "Quotes",
    "Verified",
  ];

  return (
    <>
      <Flex
        mt={"6px"}
        gap={"4px"}
        flexWrap={{ base: "wrap", sm: "nowrap" }}
        justifyContent={"center"}
      >
        {BUTTONs.map((activity, index) => (
          <Button
            onClick={(e) => setSelect(e.target.title)}
            key={index}
            w={{ base: "45%", sm: "full" }}
            variant={select === activity ? "square" : "squareOutline"}
            title={activity}
            _active={{
              transform: "scale(0.9)",
              transition: "transform 0.11s ease-in-out",
            }}
          >
            {activity}
          </Button>
        ))}
      </Flex>
      {!isLoading && <Activities notifications={activities} select={select} />}
    </>
  );
};

export default ActivityPage;
