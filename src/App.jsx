import "./App.css";
import { useState } from "react";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  console.log("Halloj =)");
  const initialLanguage = localStorage.getItem("isEnglish") === "true";

  const [isEnglish, setIsEnglish] = useState(initialLanguage);

  const toggleLanguage = () => {
    const newLanguage = !isEnglish;
    setIsEnglish(newLanguage);
    localStorage.setItem("isEnglish", newLanguage);
  };

  return (
    <div className="App overflow-hidden  font-montserrat">
      <Header isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <MainPage isEnglish={isEnglish} />
      <Footer />
    </div>
  );
}

export default App;
