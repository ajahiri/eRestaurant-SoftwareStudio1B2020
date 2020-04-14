import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./header";
import HomePage from "./home/homeBody";

// All routes should be defined here

export default function App()  {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <div className="homepage">
                            <Header/>
                            <HomePage />
                        </div>
                    </Route>
                    <Route exact path="/about">
                        <HomePage/>
                    </Route>
                    <Route exact path="/book">
                        <HomePage/>
                    </Route>
                    <Route exact path="/contact">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}