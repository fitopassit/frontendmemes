import React from "react";

//import routes and route
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import MemesCreator from "./pages/MemesCreator";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recovery from "./pages/Recovery";
import Stats from "./pages/Stats";
import Test from "./pages/Test";
import Favorite from "./pages/Favorite";
const App = () => {
  return (
    <div className="max-w-[1080p] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/memescreator/:id" element={<MemesCreator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
