import React from "react";
import videoBg from "../../assets/ocean-bg.mp4";

const Overlay = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        className="h-full w-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 h-full w-full px-8 flex flex-col justify-center items-center gap-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">
          Increíbles Imágenes Gratis Para Descargar
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg">
          Nuestro banco de imágenes tiene más de 1 millón de imágenes y videos
          compartidos por nuestra talentosa comunidad.
        </p>
      </div>
    </div>
  );
};

export default Overlay;
