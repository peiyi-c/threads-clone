import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ContentMessage } from "./contexts/contentContext";

function App() {
  return (
    <>
      <ContentMessage>
        <Header />
        <Footer />
      </ContentMessage>
    </>
  );
}

export default App;
