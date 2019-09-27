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
import { Input } from "react-native-elements"
import { MAIN_COLOR } from "../common/Constants"

const { width, height } = Dimensions.get('window')

export default Login = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Fragment>
            <ScrollView>
                <View style={{
                    width: width,
                    height: height,
                    alignItems: 'center',
                }}>
                    <View style={{height: '15%'}} />
                    <Image style={{ width: '80%', height: '25%' }} source={require('./images/coffe.png')} />
                    <View style={{height: '15%'}} />
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'رقم الهاتف'}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput 
                            placeholder={'كلمة السر'}
                            secureTextEntry={true}    
                        />
                    </View>
                    <TouchableOpacity style={{
                        width: '80%',
                        flexDirection: 'row-reverse',
                    }}
                        onPress={() => props.navigation.navigate('ResetPassword')}
                    >
                        <Text style={{
                            color: MAIN_COLOR,
                            fontSize: 15,
                            marginTop: 20,
                        }}>نسيت كلمة السر ؟</Text>
                    </TouchableOpacity>
                    <Button text={'تسجيل الدخول'} onPress={() => props.navigation.navigate('Home')} />
                    <TouchableOpacity 
                        onPress={() => props.navigation.navigate('Regestration')}
                    >
                        <Text style={{
                            color: MAIN_COLOR,
                            fontSize: 15,
                            marginTop: 20,
                        }}>ليس لديك حساب ؟</Text>
                    </TouchableOpacity>
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