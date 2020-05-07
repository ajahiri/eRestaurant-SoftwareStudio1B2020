import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "../ui/components/header";
import HomePage from "../ui/pages/home/homeBody";
import FooterPage from "../ui/pages/home/footer_page";
import ContactPage from "../ui/pages/contact/contact_page";
import MenuPage from '../ui/pages/foodmenu/menu_page';
import Booking from "../ui/pages/booking/booking";
import Admin from "../ui/pages/admin/admin";
import ManageAccount from "../ui/pages/manageaccount/manageaccount";
import Cart from '../ui/components/cart';


// All routes should be defined here
export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <div className="homepage">
                            <Header />
                            <HomePage />
                        </div>
                    </Route>
                    <Route exact path="/about">
                        <Header />
                        <MenuPage />
                        <FooterPage/>
                    </Route>
                    <Route exact path="/cart">
                        <Header />
                        <Cart />
                    </Route>
                    <Route exact path="/booking">
                        <Header /> 
                        <Booking />
                    </Route>
                    <Route exact path="/contact">
                        <Header />
                        <ContactPage />
                        <FooterPage />
                    </Route>
                    <Route exact path="/admin">
                        <Header />
                        <Admin />
                    </Route>
                    <Route exact path="/manageaccount">
                        <Header />
                        <ManageAccount />
                        <FooterPage /> 
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}