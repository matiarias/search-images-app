import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { IoArrowBackCircleOutline } from "react-icons/io5";

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
        <div className="relative h-screen w-full flex flex-col justify-center items-center gap-4 px-4 py-4 md:px-12 md:py-0 bg-[#dfdad2]">
          <div className="h-auto w-full md:h-[400px] md:w-full">
            <img
              className="h-full w-full object-contain"
              src={image.hits[0].largeImageURL}
              alt={image.hits[0].tags}
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <a href={image.hits[0].pageURL} target="_blank">
              <span className="text-red-900 font-bold text-xl underline underline-offset-4">
                {image.hits[0].user}
              </span>
            </a>

            <h3 className="font-bold text-gray-700 text-xl">
              Vistas:{" "}
              <span className="text-blue-900 font-bold text-xl">
                {image.hits[0].views}
              </span>
            </h3>

            <h3 className="font-bold text-gray-700 text-xl">
              Descargas:{" "}
              <span className="text-blue-900 font-bold text-xl">
                {image.hits[0].downloads}
              </span>
            </h3>

            <a href={image.hits[0].largeImageURL} download target="_blank">
              <button className="px-16 py-4 md:py-2 rounded-3xl bg-gradient-to-r from-green-900 via-green-700 to-lime-800 text-white font-medium border-2 border-gray-800 mt-2">
                Descargar
              </button>
            </a>
          </div>

          <Link
            to="/"
            className="absolute top-2 left-2 md:top-4 md:left-4 px-8 py-2 rounded-xl bg-gradient-to-r from-blue-900/80 to-indigo-900"
          >
            <IoArrowBackCircleOutline size={30} className="text-white" />
          </Link>
        </div>
      )}
    </>
  );
};

export default ImageDetail;
