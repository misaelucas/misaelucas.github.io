import "./App.css";
import { useState } from "react"; //
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  console.log("Halloj =).");

  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="App overflow-hidden">
      <Header isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <MainPage isEnglish={isEnglish} />
      <Footer />
    </div>
  );
}

export default App;
