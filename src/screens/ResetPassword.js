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
} from "react-native";
import { Input, ButtonGroup } from "react-native-elements"
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import { MAIN_COLOR } from "../common/Constants"

const { width, height } = Dimensions.get('window')

export default  ResetPassword = (props) => {
    return(
        <Fragment>
            <Toolbar
                rightElement="arrow-forward"
                onRightElementPress={() => props.navigation.pop()}
                centerElement={'إعادة تعيين كلمة السر'}
            />
            <ScrollView>
                <View style={{
                    width: width,
                    height: height - 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{ width: '80%'}}>
                        <Text>{`سوف نرسل لك رابط إعادة تعيين كلمة المرور\nتابع بريدك الاليكترونى و اتبع التعليمات`}</Text>
                    </View><View style={{
                            width: '80%',
                            borderBottomWidth: 1,
                        }}>
                            <TextInput
                                placeholder={'البريد الاليكترونى'}
                                keyboardType={'email-address'}
                            />
                        </View>
                        <Button text={'أرسل'} onPress={() => {}} />
                </View>
            </ScrollView>
        </Fragment>
    );
}

const Button = props => {
    return(
        <TouchableOpacity style={{
            width: '80%',
            height: 40,
            elevation: 5,
            backgroundColor: MAIN_COLOR,
            marginTop: 30,
            alignItems:'center',
            justifyContent: 'center',
            borderRadius: 5,
        }}
            onPress={props.onPress}
        >
            <Text style={{
                color: 'white',
                fontSize: 20,
            }}>{props.text}</Text>
        </TouchableOpacity>
    );
}