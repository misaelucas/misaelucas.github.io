import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from "./App";
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);