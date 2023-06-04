import React, {useState} from "react";
import Header from "../components/Header";

function Books() {
  const [isHome, setHome] = useState(true);
  const contact = true;
  const books = false;
  return (
    <>
      <Header home={isHome} contact={contact} books={books}/>
    </>
  );
}

export default Books;
