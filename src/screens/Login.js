import React, { Component, useState, Fragment } from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Image,
} from "react-native";
import { Input } from "react-native-elements"

const { width, height } = Dimensions.get('window')

export default function Login() {
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
                    <Image style={{
                        width: '100%',
                        height: '35%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                        source={require('./images/coffe.png')}
                    >
                        {/* <Text style={{
                            fontSize: 30,
                        }}>Welcome to ElAhwa</Text> */}
                    </Image>
                    <View style={{
                        width: '100%',
                        height: '65%',
                        // justifyContent:'center',
                        alignItems: 'center',
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 40,
                        backgroundColor: '#5E4423',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 35,
                            marginTop: 20,
                        }}>Login</Text>
                        <Input
                            inputStyle={{color:'white'}}
                            keyboardType={'number-pad'}
                            placeholder={'Phone number'}
                            placeholderTextColor={'white'}
                            onChangeText={(value) => setPhoneNumber(value)}
                        />
                        <Input
                            inputStyle={{color:'white'}}
                            placeholder={'Password'}
                            placeholderTextColor={'white'}
                            onChangeText={(value) => setPassword(value)}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={{
                            width: '95%',
                            alignItems: 'flex-end',
                            marginTop: 10,
                        }}
                        onPress={() => this.props.navigation.navigate('ResetPassword')}
                        >
                            <Text style={{ color: 'white', fontSize: 17 }}>Forget password ?!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 40,
                            width: '25%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderRadius: 10,
                            marginVertical: 20,
                        }}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: '95%',
                            alignItems: 'center',
                            marginTop: 10,
                        }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Don't have an account ?!</Text>
                        </TouchableOpacity>
                        <Text style={{color:'white', fontSize:20}}>{`\n\nEl Ahwa`}</Text>
                    </View>
                </View>
            </ScrollView>
        </Fragment>
    );
}