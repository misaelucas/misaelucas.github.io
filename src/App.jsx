import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  console.log(
    "Hallo =)."
  );
  return (
    <div className="App overflow-hidden">
      <Header />
      <MainPage />
      <Footer />

    </div>
  );
}

export default App;
