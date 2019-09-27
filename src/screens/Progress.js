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

export default Progerss = (props) => {
    return (
        <Fragment>
            <Toolbar
                rightElement="menu"
                onRightElementPress={() => props.navigation.toggleDrawer()}
                centerElement={'المستوى'}
            />
            <View style={{
                width: width,
                height: height - 50,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image style={{ width: 90, height: 90 }} source={require('./images/golden.png')} />
                <Text style={{ color: MAIN_COLOR, fontSize: 30 }}>ذهبى</Text>
                <Text style={{ fontSize: 20 }}>إستمتع بخصم 5% على أى طلب</Text>
                <View style={{
                    width: width,
                    alignItems: 'center',
                    marginTop: 30,
                }}>
                    <View style={{
                        width: '90%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }}
                                source={require('./images/golden.png')}
                            />
                            <Text>{`ذهبى`}</Text>
                            <Text>{`100 جنيه`}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }}
                                source={require('./images/platinum.png')}
                            />
                            <Text>{`ماسى`}</Text>
                            <Text>{`150 جنيه`}</Text>
                        </View>
                    </View>
                    <Text>{`125 جنيه/ 150 جنيه`}</Text>
                    <ProgressBarAndroid
                        style={{ width: '80%', color: MAIN_COLOR, marginBottom: 10 }}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.7}
                    />
                    <Text style={{ marginTop: 10, fontSize: 15 }}>انت وفرت <Text style={{ color: MAIN_COLOR, fontSize: 20 }}>25 جنيه</Text> الشهر ده</Text>
                </View>
                <View style={{
                    width: '80%',
                    marginTop: 15,
                }}>
                    <Text style={{ color: MAIN_COLOR, fontSize: 17 }}>ايه هو المستوى ؟</Text>
                    <Text>{`كل ما تطلب اكتر هتاخد نقط\nكل ما النقط تزيد هتوصلك لمستوى اعلى\nكل ما مستواك يزيد هتاخد خصم اكبر من القهوه`}</Text>
                </View>
                <Button text={'إطلب'} onPress={() => props.navigation.navigate('Home')} />
            </View>
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