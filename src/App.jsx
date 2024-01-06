import "./index.css";
import "swiper/css";
import "swiper/css/navigation";

import { ContentMessage } from "./contexts/contentContext";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <ContentMessage>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            {/*  only for authUser */}
            <Route index element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/activity" element={<ActivityPage />} />
            {/* only for non-authUser */}
            {/* <Route path="/login" element={<LoginPage />} />  */}

            {/* authUser || non-authUser */}
            <Route path="/:username" element={<ProfilePage />} />
          </Route>
        </Routes>
      </ContentMessage>
    </>
  );
}

export default App;
