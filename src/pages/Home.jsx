import React, { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import Overlay from "../components/overlay video/Overlay";

const Home = () => {
  const [data, setData] = useState({});

  const [inputValue, setInputValue] = useState("");

  const [term, setTerm] = useState("");

  const [loading, setLoading] = useState(true);

  const pixabayApiCall = async (query) => {
    try {
      const resp = await fetch(
        `https://pixabay.com/api/?q=${query}&key=28962423-2061919b5fb3ab8799e9f4b1a&page=1&per_page=20`
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
      {/* <Overlay
        inputValue={inputValue}
        setInputValue={setInputValue}
        term={term}
        setTerm={setTerm}
      /> */}

      {loading ? (
        <div className="w-full text-center mt-12">
          <Loading />
        </div>
      ) : (
        <div
          className="columns-1 sm:columns-2 md:columns-3 space-y-4 gap-6 md:gap-4 py-12 px-8 
      bg-gray-200"
        >
          {data.hits
            ? data.hits.map((image) => (
                <div
                  key={image.id}
                  className="relative h-auto w-full lg:max-w-[500px]"
                >
                  <div className="absolute top-0 left-0 h-full w-full hover:bg-gray-700/20"></div>
                  <img
                    className="h-full w-full object-cover"
                    src={image.webformatURL}
                    alt={image.tags}
                  />
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
