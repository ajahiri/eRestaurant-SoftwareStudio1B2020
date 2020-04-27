import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "../ui/components/header";
import HomePage from "../ui/pages/home/homeBody";
import Booking from "../ui/pages/booking/booking";

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