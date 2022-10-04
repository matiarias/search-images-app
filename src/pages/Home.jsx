import React, { useEffect, useState } from "react";
import Overlay from "../components/overlay video/Overlay";
// import GalleryImages from "../components/gallery/GalleryImages";

const Home = () => {
  const [data, setData] = useState({});

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
      setData(results);
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

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 py-12 px-8 
      bg-gray-200"
      >
        {data.hits
          ? data.hits.map((image) => (
              <div key={image.id} className="h-[400px] w-auto lg:max-w-[500px]">
                <img
                  className="h-full w-full object-cover"
                  src={image.webformatURL}
                  alt={image.tags}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
