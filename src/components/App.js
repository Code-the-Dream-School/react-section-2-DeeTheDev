import React from "react";
import "../App.css";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";

function App() {
    <BrowserRouter>
        <div className="container">
            <Route path="/" component={About} />
        </div>
    </BrowserRouter>;
}

export default App;
