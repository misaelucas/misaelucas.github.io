// src/main.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import Literature from "./pages/Literature";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import "./App.css";
import "./index.css";

function Root() {
  const initialLanguage = localStorage.getItem("isEnglish") === "true";
  const [isEnglish, setIsEnglish] = useState(initialLanguage);

  const toggleLanguage = () => {
    const newLanguage = !isEnglish;
    setIsEnglish(newLanguage);
    localStorage.setItem("isEnglish", newLanguage);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
          }
        >
          <Route path="/" element={<MainPage isEnglish={isEnglish} />} />
          <Route path="/contact" element={<Contact isEnglish={isEnglish} />} />
          <Route
            path="/literature"
            element={<Literature isEnglish={isEnglish} />}
          />
          <Route path="/blog" element={<Blog isEnglish={isEnglish} />} />
          <Route path="/resume" element={<Resume isEnglish={isEnglish} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
