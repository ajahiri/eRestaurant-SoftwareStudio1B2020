// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//Import Collections and their Methods
import {Branches} from "../imports/collections/Branches";

// React Components
import App from "./routing/router";


Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.render-target'));
});