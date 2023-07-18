import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

function Contact() {
  const isHome = true;
  const contact = false;
  const books = true;
  const blog = true;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header home={isHome} blog={blog} contact={contact} books={books} />
      <div className="flex justify-center items-center h-screen">
        {loading ? (
          <div className="w-5/6 h-5/6 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center h-full">
              <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                loading...
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-white -mt-12 fade-in">
            <div className="text-3xl font-bold mb-4">
              Just messing with you,
            </div>
            <div className="text-lg font-mono">
              I'm too tired and I'll make a contact page later and improve everything around here, it's fun fun.
            </div>
            <div className="text-lg mt-2 font-mono">
              Anyway, you can find everything on GitHub.
            </div>
            <div className="text-lg mt-2 font-mono">
              Email: misaelucas@gmail.com
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
