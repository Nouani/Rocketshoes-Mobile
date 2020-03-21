import React from 'react';
import {} from 'react-native';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import Routes from './routes';
import store from './store';
import NavigationService from './services/navigation';

export default function App() {
    return (
        <Provider store={store}>
            <Routes
                ref={navigationRef =>
                    NavigationService.setNavigator(navigationRef)
                }
            />
        </Provider>
    );
}
