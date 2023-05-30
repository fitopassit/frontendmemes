import React, {useEffect, useState} from "react";
import Search from "../components/Search";
import TemplateList from "../components/TemplateList";
import postService from "../services/post.service";

const Home = () => {

  return (
    <div>
      <Search />
      <TemplateList />
    </div>
  );
};

export default Home;
