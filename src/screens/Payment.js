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

export default Payment = (props) => {

    const [payMethod, setPayMethod] = useState(true)

    return (
        <Fragment>
            <Toolbar
                rightElement="arrow-forward"
                onRightElementPress={() => props.navigation.pop()}
                centerElement={'الدفع'}
            />
            <Overlay
                isVisible={payMethod}
                onBackdropPress={() => { }}
                overlayStyle={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <Text style={{
                    fontSize: 20,
                    color: MAIN_COLOR,
                    marginBottom: 10,
                }}>إختر وسيلة الدفع</Text>
                <TouchableOpacity style={{
                    width: '80%',
                    height: 60,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                    onPress={() => setPayMethod(false)}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 50, height: 50, marginRight: 5 }} source={require('./images/visa.png')} />
                        <Text>بطاقة إئتمان</Text>
                    </View>
                    <MaterialIcons name={'navigate-next'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '80%',
                    height: 60,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                    onPress={() => setPayMethod(false)}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 50, height: 50, marginRight: 5 }} source={require('./images/aman.png')} />
                        <Text>امان</Text>
                    </View>
                    <MaterialIcons name={'navigate-next'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '80%',
                    height: 60,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                    onPress={() => setPayMethod(false)}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 50, height: 50, marginRight: 5 }} source={require('./images/fawry.png')} />
                        <Text>فورى</Text>
                    </View>
                    <MaterialIcons name={'navigate-next'} size={20} />
                </TouchableOpacity>
            </Overlay>
            <View style={{
                width: width,
                height: height - 75,
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    width: '80%',
                    height: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    marginTop: 10,
                }}
                    onPress={() => setPayMethod(true)}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 50, height: 50, marginRight: 5 }} source={require('./images/visa.png')} />
                        <Text>بطاقة إئتمان</Text>
                    </View>
                    <Text>وسيلة الدفع :</Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}
