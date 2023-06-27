import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Works from "../Works";
const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/works' element={<Works />} />
        </Routes>
    );
};

export default Routing;