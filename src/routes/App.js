import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Register from "../containers/Register";

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Layout />}>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </Router>
);

export default App;
