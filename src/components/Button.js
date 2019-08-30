import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text
} from "react-native";
import { MAIN_COLOR } from '../common/Constants';

export const Button = props => {
  return (
    <TouchableOpacity style={{
      backgroundColor: MAIN_COLOR,
      margin: 5,
      padding: 5,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      borderRadius: 50,
    }}
      onPress={props.onPress}
    >
      <Text style={{
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 18
      }} >
        {props.Text}
      </Text>
    </TouchableOpacity>
  );
};

export default class CartButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: this.props.buttonColor,
          height: 45,
          width: "90%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginBottom: 12,
          borderColor: MAIN_COLOR,
          borderWidth: 2
        }}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            textAlign: "center",
            color: this.props.textColor,
            margin: 20
          }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
