import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import Home from "../screens/Home";
import SideMenu from "../components/SideMenu";
import Menu from '../screens/Menu';

const AppNavigator = createStackNavigator({

    Drawer: {
        screen: createDrawerNavigator({

            Home: {
                screen: Home
            },
        }, {
                contentComponent: ({ navigation }) => <SideMenu navigation={navigation} routes={SideMenu} />,
                headerMode: 'none',
                drawerPosition: 'left',
                overlayColor: 'transparent',
            })
    },
    Menu: {
        screen: Menu
    }
}, {
        headerMode: 'none'
    });

export default createAppContainer(AppNavigator);