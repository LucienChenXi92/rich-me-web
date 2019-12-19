import React from "react";
import App from "./App";
import Home from "./view/Home";
import { Router, Route } from "react-router";

export default class RootRouter {
    render() {
        return (<Router>
            <Route path="/" component={App} >
                
            </Route>
        </Router>)
    }
}