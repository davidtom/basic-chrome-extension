import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import theme from '../../../constants/theme';
import App from './components/app/App';

// create a proxy store which passes actions and state changes between
// UI Components and the background page's wrappedStore through event listeners
const proxyStore = new Store({
    portName: 'myApp'
});

// Wait for proxyStore to connect to the background page, then
// wrap App with the store and render it on the page
proxyStore.ready().then(()=> {
    render(
        <Provider store={proxyStore}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>
        , document.getElementById('app'));
});
