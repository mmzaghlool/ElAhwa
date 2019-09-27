import React, { Fragment, useEffect, useState } from 'react';
import { Text, Modal, Dimensions, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Card } from '../components';
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Overlay } from "react-native-elements";
import ChooseSubMenu from './ChooseSubMenu';
import Item from '../components/Item';
import { Button } from '../components/Button';
const { height } = Dimensions.get('window')


export default Menu = props => {
    const selected = props.navigation.state.params.selected

    const [state, setState] = useState({
        subMenu: undefined
    })

    const [cardsData, setCardsData] = useState({
        x2: {
            name: "Pick 'n go",
            image: require('../images/Coffee.png'),
            key: 'x2',
            price: 20,
            description: ` { backgroundColor: 'white', width: 65, height: 65, borderRadius: 38 } { backgroundColor: 'white', width: 65, height: 65, borderRadius: 38 } import { FlatList, TouchableOpacity } from 'react -native -gesture -han dler`
        },
        x221321: {
            name: "Mos3ab",
            image: require('../images/Coffee.png'),
            key: 'x221321',
            price: 30,
            description: `{ backgroundColor: 'white', width: 65, height: 65, borderRadius: 38 } import { FlatList, TouchableOpacity } from 'react -nativ e-gesture-han dler`
        },
    })

    useEffect(() => {

        // setTimeout(() => setState({ ...state, isVisible: false }), 2000)
    })

    const getData = (subMenu) => {
        console.log('state', subMenu);

    }

    const renderView = () => {
        if (state.subMenu) {
            return <View style={{ flex: 1 }} >
                <FlatList
                    data={Object.values(cardsData)}
                    renderItem={({ item }) => <Item item={item}
                        onPress={() => props.navigation.navigate('Details', {item})} />}
                    keyExtractor={(item, index) => `${index}`}
                />
                <View style={{
                    height: 60
                }}>
                    <Button Text="Finish Order" onPress={() => props.navigation.navigate('Cart')} />
                </View>
            </View>
        }
    }

    return (
        <Fragment>
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => props.navigation.pop()}
                centerElement={selected.name}

                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}
            />

            <ChooseSubMenu selected={state.subMenu}
                callback={(subMenu) => {
                    setState({ ...state, subMenu })
                    getData(subMenu)
                }}
            />
            {renderView()}
        </Fragment>
    );
};
