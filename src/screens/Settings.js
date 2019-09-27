import React, { Component, useState, Fragment } from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    FlatList,
    ProgressBarAndroid,
} from "react-native";
import { Input } from "react-native-elements"
import { MAIN_COLOR } from "../common/Constants"
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';

const { width, height } = Dimensions.get('window')

export default Setting = (props) => {
    return(
        <Fragment>
            <Toolbar
                rightElement="menu"
                onRightElementPress={() => props.navigation.toggleDrawer()}
                centerElement={'الإعدادات'}
            />
        </Fragment>
    );
}