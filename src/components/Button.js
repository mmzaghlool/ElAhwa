import React, {Fragment} from 'react';
import { Text } from "react-native";
import { Header } from 'react-native-elements';
import { Snackbar, Subheader, Toolbar } from 'react-native-material-ui';

const Home = props => {
  return (
    <Fragment>
        <Toolbar
        leftElement="menu"
        onLeftElementPress={() => props.navigation.toggleDrawer()}
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
        <Snackbar visible={ false} message="hello World" onRequestClose={() => this.setState({ isVisible: false })} />
    </Fragment>
  );
};

export default Home;
