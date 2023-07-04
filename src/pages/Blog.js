import React from "react";
import Header from "../components/Header";
import { useState } from "react";

const Blog = () => {
  const [isHome, setHome] = useState(true);
  const contact = true;
  const books = true;
  return (
    <div>
      <Header home={isHome} contact={contact} books={books} />
      <div className="flex bg-red-500 justify-center "></div>
    </div>
  );
};

export default Blog;
