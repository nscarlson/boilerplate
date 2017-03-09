import React, { PropTypes } from 'react';
import { Route } from 'react-router';

const { node } = PropTypes;

const Wrapper = ({ children }) => (
    <div className="wrapper">
        {children}
    </div>
);

Wrapper.displayName = 'Wrapper';

Wrapper.propTypes = {
    children: node
};

const Error = () => (
    <h1>Error</h1>
);

Error.displayName = 'Error';

const routes = (
    <Route component={Wrapper}>
        <Route component={Error} path="*" />
    </Route>
);

export default routes;
