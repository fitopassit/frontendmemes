import React from "react";

//import routes and router
import {Route, Routes} from "react-router-dom";

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
import Favorite from "./pages/Favorite";
import PrivateRoute from "./utils/router/privateRoute";

const App = () => {

    return (
        <div className="max-w-[1080p] mx-auto bg-white">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<Recovery/>}></Route>
                <Route path="/stats" element={<Stats/>}/>
                <Route path="/favorite" element={<Favorite/>}></Route>
                <Route path="/memescreator/:id" element={<MemesCreator/>}/>
                <Route path="/property/:id" element={<PropertyDetails/>}/>

            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
