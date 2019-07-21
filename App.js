import React, { Component } from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {TopNavigation, Button, ApplicationProvider, BottomNavigation, BottomNavigationTab} from "react-native-ui-kitten";
import { mapping, light as lightTheme } from '@eva-design/eva';


export default class App extends Component<{}> {
  render() {
    return (
        <ApplicationProvider mapping={mapping}
                             theme={lightTheme}>
            <TopNavigation title='Our App' style={styles.header}>

            </TopNavigation>
            <View style={styles.container}>
                <Button>
                    <Text>Perra</Text>
                </Button>
            </View>
            <View style={styles.container}>

            </View>
        </ApplicationProvider>

    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header : {
        marginTop: 25
    }
});
