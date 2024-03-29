import "./index.css";
import "swiper/css";
import "swiper/css/navigation";

import { ContentMessage } from "./contexts/contentContext";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ThreadPage from "./pages/PostPage/ThreadPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import ReplyPage from "./pages/PostPage/ReplyPage";

function App() {
  return (
    <>
      <ContentMessage>
        <Routes>
          <Route path="/" element={<GeneralLayout />}>
            {/* only for authUser */}
            <Route element={<PrivateRoute />}>
              <Route index element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/activity" element={<ActivityPage />} />
            </Route>
            {/* for authUser and !authUser */}
            <Route path="/:ausername" element={<ProfilePage />} />
            <Route path="/:ausername/post/:postId" element={<ThreadPage />} />
            <Route path="/:ausername/reply/:replyId" element={<ReplyPage />} />
          </Route>
          {/* only for !authUser */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
          </Route>
        </Routes>
      </ContentMessage>
    </>
  );
}

export default App;
