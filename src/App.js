import React from 'react';
import {} from 'react-native';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import Routes from './routes';
import store from './store';

export default function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}
