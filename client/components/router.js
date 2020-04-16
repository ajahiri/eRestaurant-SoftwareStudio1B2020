import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./header";
import HomePage from "./home/homeBody";
import Booking from "./booking/booking";

// All routes should be defined here

export default function App()  {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <div className="homepage">
                            <Header/>
                            <HomePage/>
                        </div>
                    </Route>
                    <Route exact path="/about">
                        <Header/>
                    </Route>
                    <Route exact path="/booking">
                        <Header/>
                        <Booking/>
                    </Route>
                    <Route exact path="/contact">
                        <Header/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}