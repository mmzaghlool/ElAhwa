import React, { Fragment, useEffect, useState } from 'react';
import { Text, View, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Card } from '../components';
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Overlay } from "react-native-elements";
const { height } = Dimensions.get('window')

export default Menu = props => {
    const item = props.navigation.state.params.item
    const [state, setState] = useState({
        isVisible: true,
        selectedIndex: 0,
        subMenu: undefined
    })

    const [cardsData, setCardsData] = useState({
        x2: {
            name: "Pick 'n go",
            image: require('../images/Coffee.png'),
            key: 'x2'
        },
        x221321: {
            name: "Mos3ab",
            image: require('../images/Coffee.png'),
            key: 'x221321'
        },
    })

    updateIndex = (selectedIndex) => setState({ ...state, selectedIndex })

    const subMenus = ["Mos3ab", "Mos3ab", "Mos3ab", "Mos3ab", "Mos3ab", "Mos3ab"]

    useEffect(() => {
        // setTimeout(() => setState({ ...state, isVisible: false }), 2000)
    })

    const renderSubMenuItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            console.log(item);

            setState({ ...state, subMenu: item })
        }} >
            <Text style={{
                fontSize: 20,
                padding: 12,
                fontFamily: 'Roboto'
            }} >{item}</Text>
        </TouchableOpacity>
    )

    return (
        <Fragment>
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => props.navigation.pop()}
                centerElement={item.name}
            />

            {/* <View style={{
                position: 'absolute',
                width: '95%',
                margin: 7,
                padding: 7,
                elevation: 5,
                backgroundColor: COLOR.grey100,
                alignSelf: 'center',
                borderRadius: 15,
                top: 70,
                zIndex: 5
            }}>
                {/* <TouchableOpacity style={{
                    flexDirection: 'row',
                    width: '100%',
                    padding: 7,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    // borderRadius: 15
                }}
                    onPress={() => setState({ ...state, subMenu: undefined })}
                >
                    <Text style={{
                        fontFamily: 'roboto',
                        fontSize: 20
                    }} >
                        Our sub menus
                </Text>
                    <MaterialIcons name="arrow-drop-down" size={30} />
                </TouchableOpacity> 
                {state.subMenu === undefined && (
                    <View style={{ height: height * 0.5 }}>
                        <FlatList
                            data={subMenus}
                            keyExtractor={(item, index) => `${index}`}
                            renderItem={renderSubMenuItem}
                        />
                    </View>
                )}

            </View> */}


            <Overlay
                isVisible={state.subMenu === undefined}
                windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                overlayBackgroundColor="white"
                width="50%"
                height="50%"
                animated
                animationType='fade'
                onDismiss={() => { console.log("onDismiss"); setState({ ...state, subMenu: undefined }) }}
                onRequestClose={() => {
                    console.log("onRequestClose");
                    setState({ ...state, subMenu: undefined })
                }}

            >
                <FlatList
                    data={subMenus}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={renderSubMenuItem}
                />
            </Overlay>





            <FlatList
                data={Object.values(cardsData)}
                renderItem={({ item }) => <Card text={item.name} image={item.image}
                    onPress={() => props.navigation.navigate('SubMenu', { key: item.key })} />}
                keyExtractor={(item, index) => `${index}`}
            />

            <Snackbar visible={state.isVisible} message="hello World" onRequestClose={() => setState({ ...state, isVisible: false })} />
        </Fragment>
    );
};