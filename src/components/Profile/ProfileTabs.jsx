import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import useGetUserThreads from "../../hooks/useGetUserThreads";
import FeedPosts from "../FeedPosts/FeedPosts";

const ProfileTabs = () => {
  const TABS = ["Threads", "Replies", "Reposts"];
  const { isLoading, threads } = useGetUserThreads();

  return (
    <Tabs colorScheme="black">
      <TabList>
        {TABS.map((tab, index) => (
          <Tab key={index} fontSize={"15px"}>
            {tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>{!isLoading && <FeedPosts threads={threads} />}</TabPanel>
        <TabPanel>
          <p>Replies</p>
        </TabPanel>
        <TabPanel>
          <p>Reposts</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
