import React, {useContext, useEffect} from "react";

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
import {Context} from "./index";
import Privateroute from "./router/Privateroute";
import Adminroute from "./router/Adminroute";


const App = () => {
    const {store} = useContext(Context);
    useEffect( () => {
        if(localStorage.getItem('token')){
            store.checkAuth();
        }
    }, [])
        // спросить если статс засунуть в приваты, то будет хуйня
    return (

            <div className="max-w-[1080p] mx-auto bg-white">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="*" element={<Recovery/>}></Route>
                    <Route element={<Privateroute/>}>
                        <Route path="/property/:id" element={<PropertyDetails/>}/>
                        <Route path="/favorite" element={<Favorite/>}/>
                        <Route path="/memescreator/:id" element={<MemesCreator/>}/>
                        <Route element={<Adminroute/>}>
                            <Route path="/stats" element={<Stats/>}/>
                        </Route>
                    </Route>

                </Routes>
                <Footer/>
            </div>

    );
};

export default App;
