import React from "react";

const Images = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-8">
      {data.hits.map((image) => (
        <img key={image.id} src={image.webformatURL} alt={image.tags} />
      ))}
    </div>
  );
};

export default Images;
