import React, { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const handleClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    backToTop && (
      <button
        onClick={handleClickToTop}
        className="fixed bottom-4 right-2 md:right-4 p-6 md:p-4 rounded-full bg-indigo-900/80"
      >
        <BsArrowUpCircle size={30} className="text-white" />
      </button>
    )
  );
};

export default ScrollToTopButton;
