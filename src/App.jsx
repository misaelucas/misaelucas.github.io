import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  console.log(
    "Hallo =)."
  );
  return (
    <div className="App fade-in overflow-hidden">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
