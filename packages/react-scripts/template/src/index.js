import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import thunkMiddleware from 'redux-thunk';

import siteReducer from './lib/reducers';
import Application from './components/application';

const store = createStore(siteReducer, {
        something : true
    },
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware
        )
    )
);

let persistor = persistStore(store);
render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Application/>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);