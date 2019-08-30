import React, { useState } from 'react';
import { Text, Image, View } from "react-native";
import { TouchableOpacity, } from 'react-native-gesture-handler';
import { COLOR } from "react-native-material-ui";

export default Item = props => {
    const [backgroundColorState, setBackgroundColorState] = useState(COLOR.grey50)
    const {item} = props
    return (
        <TouchableOpacity
            onBlur={() => setBackgroundColorState(COLOR.grey200)}
            onPress={props.onPress}
            style={{
                flexDirection: 'row',
                width: '95%',
                margin: 7,
                padding: 7,
                // justifyContent: 'flex-start',
                alignItems: 'center',
                elevation: 7,
                backgroundColor: backgroundColorState,
                alignSelf: 'center'
            }}
        >
            <Image source={item.image} style={{
                height: 65,
                width: 65,
                margin: 5
            }} />
            <View style={{
                margin: 5,
                flex: 1
            }} >
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 20
                }} >
                    {item.name}
                </Text>

                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    color: 'grey'
                }} >
                    {item.discription}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


