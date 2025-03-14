// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ isEnglish, toggleLanguage }) => {
  return (
    <div className="App overflow-hidden font-montserrat">
      <Header isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
