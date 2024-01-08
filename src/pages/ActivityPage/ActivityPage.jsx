import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const ActivityPage = () => {
  const [select, setSelect] = useState("All");

  const activities = [
    "All",
    "Requests",
    "Relies",
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
        {activities.map((activity, index) => (
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
    </>
  );
};

export default ActivityPage;
