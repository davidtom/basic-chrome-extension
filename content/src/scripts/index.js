import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';

import App from './components/app/App';

// create anchor div to append App to
const anchor = document.createElement('div');
anchor.id = 'content-anchor';

// insert anchor as first child on page
document.body.insertBefore(anchor, document.body.childNodes[0]);

// create a proxy store which passes actions and state changes between
// UI Components and the background page's wrappedStore through event listeners
const proxyStore = new Store({
    portName: 'myApp'
});

// Wrap App with the store and render it on the page
render( <Provider store={proxyStore}>
            <App />
        </Provider>
        , document.getElementById('content-anchor'));