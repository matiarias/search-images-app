import React, { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import Overlay from "../components/overlay video/Overlay";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTopButton from "../components/scroll to top button/ScrollToTopButton";

const Home = () => {
  const [data, setData] = useState({});

  const [inputValue, setInputValue] = useState("");

  const [term, setTerm] = useState("");

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] = useState(true);

  const perPage = 20;

  // ---------------------------------- fetch data function ----------------------------------------

  const pixabayApiCall = async (query, perPageNum) => {
    try {
      const resp = await fetch(
        `https://pixabay.com/api/?q=${query}&key=28962423-2061919b5fb3ab8799e9f4b1a&page=${1}&per_page=${perPageNum}`
      );

      const results = await resp.json();
      console.log(results.hits);
      setData(results.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pixabayApiCall(term, perPage);
  }, [term, perPage]);

  // -------------------------- fetch data infinite scroll ------------------------------------

  const fetchData = async () => {
    if (data.length > 200) {
      setHasMore(false);
    } else {
      try {
        const resp = await fetch(
          `https://pixabay.com/api/?q=${term}&key=28962423-2061919b5fb3ab8799e9f4b1a&page=${
            page + 1
          }&per_page=${perPage}`
        );
        const results = await resp.json();
        setData((oldPage) => [...oldPage, ...results.hits]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.log("error al cargar la data del infinite scroll", error);
      }
    }
  };

  // -----------------------------------------------------------------------------------------

  return (
    <div>
      <Overlay
        inputValue={inputValue}
        setInputValue={setInputValue}
        term={term}
        setTerm={setTerm}
      />

      {loading ? (
        <div className="w-full h-[250px] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <InfiniteScroll
          className="columns-1 sm:columns-2 md:columns-3 space-y-4 gap-x-4 py-12 px-8
          bg-gray-200"
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<Loading />}
        >
          {data
            ? data.map((image) => (
                <Link
                  key={image.id}
                  className="block"
                  to={`/image/${image.id}`}
                >
                  <div className="relative h-auto w-full xl:max-w-[500px] border-2 border-gray-400">
                    <div className="absolute top-0 left-0 h-full w-full hover:bg-gray-700/20"></div>
                    <img
                      className="h-full w-full object-cover"
                      src={image.webformatURL}
                      alt={image.tags}
                    />
                  </div>
                </Link>
              ))
            : null}
          <ScrollToTopButton />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Home;
