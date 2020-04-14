// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// React Components
import App from "./components/router";


Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.render-target'));
});