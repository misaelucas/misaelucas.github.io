import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  console.log(
    "Howdy, fellow struggler. If you happen to spot any errors, specially about website responsiveness, you can reach me at misaelucas@gmail.com, i will be happy to know."
  );
  return (
    <div className="App fade-in overflow-hidden">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
