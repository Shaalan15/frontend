// Importing necessary modules
import React from 'react';
import { Route } from 'react-router-dom';

// Making the function to essentially show the navbar and footer on every page
function LayoutRoute2(props) {
    return (
        <div>
            <Route path={props.path} exact={props.exact} component={props.component} />
        </div>
    )
}

export default LayoutRoute2;