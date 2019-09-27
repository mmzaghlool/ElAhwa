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
import { Input, Overlay } from "react-native-elements"
import { MAIN_COLOR } from "../common/Constants"
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get('window')

export default Profile = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
    })
    return(
        <Fragment>
            <Toolbar
                rightElement="menu"
                onRightElementPress={() => props.navigation.toggleDrawer()}
                centerElement={'الملف الشخصى'}
            />
            <ScrollView>
                <View style={{
                    width: width,
                    height: height - 75,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {/* Image */}
                    <TouchableOpacity onPress={() => {}}>
                        <Image style={{ width: 140, height: 140}} source={require('./images/user.png')} />
                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            borderWidth: 1,
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <MaterialIcons name={'camera-alt'} size={20} />
                        </View>
                    </TouchableOpacity>
                    {/* Name */}
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'الاسم'}
                            autoCapitalize={'words'}
                            value={user.name}
                            onChangeText={(name) => setUser({...user, name})}
                        />
                    </View>
                    {/* Phone number */}
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'رقم الهاتف'}
                            keyboardType={'numeric'}
                            value={user.phone}
                            onChangeText={(phone) => setUser({...user, phone})}
                        />
                    </View>
                    {/* Email */}
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'البريد الاليكترونى'}
                            keyboardType={'email-address'}
                            value={user.email}
                            onChangeText={(email) => setUser({...user, email})}
                        />
                    </View>
                    <Button text={'حفظ التغيرات'} onPress={() => {}} />
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