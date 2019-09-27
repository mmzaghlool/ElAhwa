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
} from "react-native";
import { Input } from "react-native-elements"
import { MAIN_COLOR } from "../common/Constants"
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import Item from "../components/Item";

const { width, height } = Dimensions.get('window')
const promos = [{name: 'weekend30', from: 'mosaab', expire: '28/9/2019', description: 'make any order with 30% off'},
{name: 'pick50', from: `pick'n go`, expire: '1/10/2019', description: '50% off on any order over 80 L.E.'},
{name: 'free2hwa', from: 'ElAhwa app', expire: '10/10/2019', description: 'drink your coffee for free from you favorite place'}]

export default PromoCodes = (props) => {
    return(
        <Fragment>
            <Toolbar
                rightElement="menu"
                onRightElementPress={() => props.navigation.toggleDrawer()}
                centerElement={'أكواد الخصومات'}
            />
            <ScrollView>
                <View style={{
                    width: width,
                    height: height - 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* Promo input */}
                    <View style={{
                            width: '80%',
                            borderBottomWidth: 1,
                        }}>
                            <TextInput
                                placeholder={'كود الخصم'}
                                autoCapitalize={'none'}
                            />
                    </View>
                    {/* Add button */}
                    <Button text={'إضافة كود'} onPress={() => {}} />
                    {/* Current codes */}
                    <View style={{ width: '80%', marginTop: 20}}>
                        <Text style={{ color: MAIN_COLOR, fontSize: 20 }}>{`الاكواد الحاليه :\n`}</Text>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                            <FlatList
                                style={{ width: '80%' }}
                                data={promos}
                                renderItem={({item}) => (
                                    // <Text style={{ marginLeft: 10 }}>{item}</Text>
                                    <ItemCard text={item.name} from={item.from} expire={item.expire} description={item.description} />
                                )}
                        />
                    </View>
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

const ItemCard = props => {
    return (
        <View
            style={{
                // flexDirection: 'row',
                width: '95%',
                margin: 7,
                padding: 7,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                elevation: 7,
                backgroundColor: COLOR.grey50,
                alignSelf: 'center'
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 17
                }} >
                {`Promo : `}
            </Text>
            <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 15
                }} >
                {props.text}
            </Text>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 17
                }} >
                {`From : `}
            </Text>
            <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 15
                }} >
                {props.from}
            </Text>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 17
                }} >
                {`Expire date : `}
            </Text>
            <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 15
                }} >
                {props.expire}
            </Text>
            </View>

            <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 15,
                    color: MAIN_COLOR
                }} >
                {props.description}
            </Text>
            
        </View>
    );
}