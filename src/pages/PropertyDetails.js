import React, { useState } from "react";
import { TemplateData } from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const PropertyDetails = () => {
  const { id } = useParams();
  const [isFavorite, setFavorite] = useState(false);

  const template = TemplateData.find((template) => {
    return template.id === parseInt(id, 10);
  });
  const handleChangeFavorite = () => {
    setFavorite((isFavorite) => !isFavorite);
  };

  return (
    <section className="container mx-auto min-h-[800px] mb-14">
      <div>
        <div className="flex flex-col lg:flex-col lg: items-center lg: justify-between">
          <h1 className="text-2xl">
            <span>{template.name}</span>
            <button onClick={handleChangeFavorite}>
              {isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
            </button>
          </h1>

          <img src={template.img} alt="" />
          <h2 className="text-lg mb-4 font-semibold">
            {template.hashtag.map((item, index) => (index ? ", " : "") + item)}
          </h2>
          <div className="text-center">
            <Link to={`/memescreator/${template.id}`}>Создать мем</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
