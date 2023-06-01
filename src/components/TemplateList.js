import React, {useContext, useEffect, useState} from "react";

// import context
import { TemplateContext } from "../contexts/TemplateContext";
// import components
import Template from "./Template";
// import link
import { Link } from "react-router-dom";

// import icons

const TemplateList = () => {
  const { template, loading } = useContext(TemplateContext);
  console.log(template);

  // const [templates, setTemplates] = useState('');
  // useEffect(() => {
  //     const allPatterns = postService.getAllPatterns();
  //     console.log("ALL PATTERNS", allPatterns)
  // });




  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {template.map((temp, index) => {
            return (
              <Link to={`/property/${temp.id}`} key={index}>
                <Template temp={temp} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TemplateList;
