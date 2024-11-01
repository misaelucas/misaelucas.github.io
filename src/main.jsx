import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./App.css";
import "./index.css";
import Contact from "./pages/Contact";
import Literature from "./pages/Literature";
import Blog from "./pages/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/literature" element={<Literature />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>,
);
