import React, { useContext } from "react";
import { TemplateContext } from "../contexts/TemplateContext";
import Template from "./Template";
import { Link } from "react-router-dom";

const FavoriteList = () => {
  const { template, loading } = useContext(TemplateContext);

  console.log(template);
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {template.map((temp, index) => {
            return (
              // console.log("ID", temp.id)
              // console.log("INDEX", index)
              <Link to={`/property/${temp.id}`} key={temp.id}>
                <Template temp={temp} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FavoriteList;
