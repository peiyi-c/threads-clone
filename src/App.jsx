import "./index.css";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { ContentMessage } from "./contexts/contentContext";

function App() {
  return (
    <>
      <ContentMessage>
        <Header />
        <Main />
        <Footer />
      </ContentMessage>
    </>
  );
}

export default App;
