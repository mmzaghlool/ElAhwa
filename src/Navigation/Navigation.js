import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Regestration from "../screens/Regestration";
import ResetPassword from "../screens/ResetPassword";
import SideMenu from "../components/SideMenu";
import Menu from '../screens/Menu';
import PromoCodes from '../screens/PromoCodes';
import Progress from "../screens/Progress";
import Settings from "../screens/Settings";
import Wallet from "../screens/Wallet";
import Payment from "../screens/Payment";

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Regestration: {
        screen: Regestration
    },
    ResetPassword: {
        screen: ResetPassword
    },
    Drawer: {
        screen: createDrawerNavigator({

            Home: {
                screen: Home
            },
            PromoCodes: {
                screen: PromoCodes
            },
            Progress: {
                screen: Progress
            },
            Settings: {
                screen: Settings
            },
            Wallet: {
                screen: Wallet
            },
            Payment: {
                screen: Payment
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
},
    {
        headerMode: 'none'
    });

export default createAppContainer(AppNavigator);