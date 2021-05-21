// Importing necessary modules
import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './components/mainPage/LandingItems/footer/Footer'

// Making the function to essentially show the navbar and footer on every page
function LayoutRoute3(props) {
    return (
        <div>
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer />
        </div>
    )
}

export default LayoutRoute3;