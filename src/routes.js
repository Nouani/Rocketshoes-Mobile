import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home,
            Cart,
        },
        {
            defaultNavigationOptions: navigation => ({
                header: () => <Header {...navigation} />,
                cardStyle: {
                    backgroundColor: colors.dark,
                },
            }),
        }
    )
);

export default Routes;
