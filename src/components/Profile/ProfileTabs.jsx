import { Tabs, TabPanels, TabPanel, Tab, TabList } from "@chakra-ui/react";
import UserThreads from "./UserThreads";
import UserReplies from "./UserReplies";

const ProfileTabs = () => {
  const TABS = ["Threads", "Replies", "Reposts"];
  return (
    <Tabs colorScheme="black" display={"block"}>
      {/* tab list */}
      <TabList>
        {TABS.map((tab) => (
          <Tab key={tab} fontSize={"15px"}>
            {tab}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        <TabPanel>
          {/* user threads */}
          <UserThreads />
        </TabPanel>
        <TabPanel>
          {/* user replies */}
          <UserReplies />
        </TabPanel>
        <TabPanel>
          <p>Reposts</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
