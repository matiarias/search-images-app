import React, { useEffect, useState } from "react";
import Overlay from "../components/overlay video/Overlay";

const Home = () => {
  const [data, setData] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [term, setTerm] = useState("");

  const [loading, setLoading] = useState(true);

  const pixabayApiCall = async (query) => {
    try {
      const resp = await fetch(
        `https://pixabay.com/api/?q=${query}&key=28962423-2061919b5fb3ab8799e9f4b1a`
      );

      const results = await resp.json();
      console.log(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pixabayApiCall(term);
  }, [term]);

  return (
    <div>
      <Overlay
        inputValue={inputValue}
        setInputValue={setInputValue}
        term={term}
        setTerm={setTerm}
      />
    </div>
  );
};

export default Home;
