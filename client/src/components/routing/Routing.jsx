import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import ViewWork from "../ViewWork";
const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/work/view/:id' element={<ViewWork />} />
        </Routes>
    );
};

export default Routing;