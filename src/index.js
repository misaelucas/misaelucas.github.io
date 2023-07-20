import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

import "./App.css";
import Contact from "./pages/Contact";
import Dion from "./pages/Dion";
import Blog from "./pages/Blog";

// import your route components too

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dion" element={<Dion />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);
