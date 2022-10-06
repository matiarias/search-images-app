import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";

const ImageDetail = () => {
  const [image, setImage] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();

  const imageDetailCall = async (imgId) => {
    try {
      const res = await fetch(
        `https://pixabay.com/api/?key=28962423-2061919b5fb3ab8799e9f4b1a&id=${imgId}`
      );

      const data = await res.json();
      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    imageDetailCall(params.id).then((response) => {
      setImage(response);
      setIsLoading(false);
    });
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-300px flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center px-4 py-0 md:px-12 md:py-12 bg-gradient-to-tr from-gray-500 to-gray-800">
          <div className="h-auto w-full md:h-full md:w-full">
            <img
              className="h-full w-full object-contain"
              src={image.hits[0].largeImageURL}
              alt={image.hits[0].tags}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageDetail;
