import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Regestration from "../screens/Regestration";
import ResetPassword from "../screens/ResetPassword";
import SideMenu from "../components/SideMenu";
import Menu from '../screens/Menu';
import ChooseSubMenu from '../screens/ChooseSubMenu';
import Cart from '../screens/Cart';
import Details from '../screens/Details';

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Regestration: {
        screen: Regestration
    },
    ResetPassword: {
        screen: ResetPassword

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
    },
    ChooseSubMenu: {
        screen: ChooseSubMenu
    },
    Cart: {
        screen: Cart
    },
    Details: {
        screen: Details
    },
}, {
        headerMode: 'none'
    });

export default createAppContainer(AppNavigator);