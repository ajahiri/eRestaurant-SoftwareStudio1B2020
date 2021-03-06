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
import StaffDashboard from "../ui/pages/staff_dashboard/staff_dashboard";
import BookingViewContainer from "../ui/pages/bookingView/booking_view";


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
                    <Route exact path="/menu">
                        <Header />
                        <MenuPage />
                        <FooterPage/>
                    </Route>
                    <Route exact path="/booking">
                        <Header /> 
                        <Booking />
                        <FooterPage/>
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
                    <Route exact path="/staff_dashboard">
                        <Header />
                        <StaffDashboard />
                        <FooterPage />
                    </Route>
                    <Route exact path="/bookings/:bookingID" component={BookingViewContainer}>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}