import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';

import App from './components/app/App';

// create anchor div to append App to
const anchor = document.createElement('div');
anchor.id = 'appNameContainer';

// insert anchor as first child on page
document.body.insertBefore(anchor, document.body.childNodes[0]);

// Create a shadow DOM root as a child of anchor
const root = anchor.createShadowRoot();

// create a proxy store which passes actions and state changes between
// UI Components and the background page's wrappedStore through event listeners
const proxyStore = new Store({
    portName: 'myApp'
});

// Wait for proxyStore to connect to the background page, then wrap
// App with the store and render it on the page within the Shadow DOM
proxyStore.ready().then(() => {
    render(<Provider store={proxyStore}>
        <App />
    </Provider>
        ,root);
});