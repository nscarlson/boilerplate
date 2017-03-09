import { createLocation } from 'history';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import Html from 'components/Html';
import routes from 'services/routes';
import { createStore } from 'services/redux/store';

const router = (req, res) => {
    const location = createLocation(req.url);

    match({ location, routes }, (error, redirectLocation, renderProps) => {
        const store = createStore();

        if (redirectLocation) {
            const { pathname, search } = redirectLocation;
            return res.redirect(301, pathname + search);
        }

        const html = renderToStaticMarkup(
            <Html initialState={store.getState()}>
                {
                    renderToString(
                        <Provider store={store}>
                            <RouterContext {...renderProps} />
                        </Provider>
                    )
                }
            </Html>
        );

        res.send(`<!DOCTYPE html>${html}`);
    });
};

export default router;
