import React from "react";
import Home from "./view/Home";
import { Router, Route } from "react-router";
import {createBrowserHistory} from "history";

export default class RootRouter extends React.Component {

    render() {
        const history = createBrowserHistory();
        return (<Router history={history} >
                <Route path="/" component={Home} />
        </Router>)
    }
}