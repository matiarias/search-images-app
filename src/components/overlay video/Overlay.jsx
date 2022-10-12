import React from "react";
import videoBg from "../../assets/ocean-bg.mp4";
import { FaSearch } from "react-icons/fa";
import { buttons } from "../../helpers/buttonsTags";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialMedia from "../social media/SocialMedia";

const Overlay = ({ inputValue, setInputValue, term, setTerm }) => {
  const handleChange = ({ target }) => {
    setInputValue(target.value);
    // console.log(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setTerm(inputValue.trim());
      // console.log(term);
      setInputValue("");
    } else {
      // console.log("ingresa algo");
      toast.warn(" Por favor ingresa algo de tu interes", {
        theme: "light",
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <video
        className="h-full w-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-0 left-0 h-full w-full bg-gray-900/40"></div>
      <div className="absolute top-0 left-0 h-full w-full px-8 flex flex-col justify-center items-center gap-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          Increíbles Imágenes Gratis Para Descargar
        </h1>
        <h2 className="text-white font-medium text-sm sm:text-base md:text-lg text-center">
          Nuestro banco de imágenes tiene más de 1 millón de imágenes
          compartidas por nuestra talentosa comunidad.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[600px] md:w-[700px] p-4 flex justify-between items-center bg-gray-300 rounded-3xl shadow-md shadow-gray-700 mt-4"
        >
          <input
            className="w-full bg-transparent focus:outline-none placeholder:text-gray-700"
            type="text"
            placeholder="Buscar imagenes"
            autoFocus
            name={term}
            value={inputValue}
            onChange={handleChange}
          />

          <button className="px-4 py-1" type="submit">
            <FaSearch
              size={20}
              className="text-blue-800 hover:text-green-700 animate-pulse"
            />
          </button>
        </form>

        <div className="mt-2 flex justify-center items-center gap-2 flex-wrap">
          {buttons.map((btn) => (
            <button
              onClick={() => setTerm(btn.title)}
              key={btn.id}
              className="text-white font-base text-sm hover:underline-offset-2 hover:underline"
            >
              {btn.title}
            </button>
          ))}
        </div>
        <ToastContainer />
      </div>
      <SocialMedia />
    </div>
  );
};

export default Overlay;
