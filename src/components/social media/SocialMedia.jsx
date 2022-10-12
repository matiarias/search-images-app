import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="absolute bottom-0 left-0 w-12 md:w-10 h-40 bg-gray-200 bg-opacity-40 rounded-r-lg flex flex-col justify-center items-center gap-4">
      <a href="https://github.com/matiarias" target="_blank">
        <FaGithub className="text-3xl text-gray-900 hover:text-green-800" />
      </a>
      <a href="https://www.linkedin.com/in/matiasarias27" target="_blank">
        <FaLinkedinIn className="text-3xl text-gray-900 hover:text-yellow-500" />
      </a>
      <a href="https://www.instagram.com/_matiarias/?hl=es" target="_blank">
        <FaInstagram className="text-3xl text-gray-900 hover:text-blue-800" />
      </a>
    </div>
  );
};

export default SocialMedia;
