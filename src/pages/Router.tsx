import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import About from "./About";

export const Router = () => {
    return (
        <Routes >
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
        </Routes >
    )
};