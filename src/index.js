import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Tools from "./pages/Tools";

import "./App.css";
import MacroCalculator from "./pages/MacroCalculator";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import Blog from "./pages/Blog";

// import your route components too

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/macrocalculator" element={<MacroCalculator />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/books" element={<Books />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);
