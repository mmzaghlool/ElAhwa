import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  CheckBox,
  TouchableOpacity
} from "react-native";
import { MAIN_COLOR } from "../common/Constants";
// import Header from "./common/Header";
// import {MAIN_COLOR} from './common/Constant'

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: false
    };
  }

  render() {
    return (
      <ImageBackground
        // source={require("./images/background.jpeg")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <Header
          title="Chicago Pizza"
          navigation={this.props.navigation}
          backButton
          cartButton
        /> */}
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-start"
          }}
        >
          <Image
            // source={require("./images/photo.jpeg")}
            style={{
              width: "100%",
              height: 150,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40
            }}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10
            }}
          >
            <Text style={{ color: "white", fontSize: 30, marginLeft: 10 }}>
              Chicago Pizza
            </Text>
            <View
              style={{
                justifyContent: "center",
                borderColor: MAIN_COLOR,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 5
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginRight: 10,
                  marginLeft: 10
                }}
              >
                89.00 L.E.
              </Text>
            </View>
          </View>
          <View
            style={{
              borderColor: MAIN_COLOR,
              borderWidth: 1,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              marginTop: 10
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                marginLeft: 10
              }}
            >
              Description
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                marginLeft: 10,
                marginBottom: 10
              }}
            >
              Chicago Pizza is a Textfree gives you a real U.S. phone number so
              you can text anyone with a cellphone.
            </Text>
          </View>
          <View
            style={{
              borderColor: MAIN_COLOR,
              borderWidth: 1,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              marginTop: 10
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                marginLeft: 10
              }}
            >
              Additions
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={this.state.checked1}
                onValueChange={() =>
                  this.setState({ checked1: !this.state.checked1 })
                }
              />
              <Text style={{ color: "white" }}>Extra Cheese</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={this.state.checked2}
                onValueChange={() =>
                  this.setState({ checked2: !this.state.checked2 })
                }
              />
              <Text style={{ color: "white" }}>BBQ Sauce</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: MAIN_COLOR,
              height: 45,
              width: "90%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              marginBottom: 12,
              marginTop: 30
              //   borderColor: "white",
              //   borderWidth: 0.5
            }}
            onPress={() => {}}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                textAlign: "center",
                color: "white",
                margin: 20
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
