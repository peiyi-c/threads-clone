import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import FeedPost from "../FeedPosts/FeedPost";

const ProfileTabs = ({ user }) => {
  const tabs = ["Threads", "Replies", "Reposts"];
  return (
    <Tabs colorScheme="black">
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index} fontSize={"15px"}>
            {tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <FeedPost />
          <FeedPost />
        </TabPanel>
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
