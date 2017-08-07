/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {MoneyFormatText} from "./MoneyFormatText";

export default class MoneyFormatTextExample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MoneyFormatText bigTextFontSize={20} smallTextFontSize={10} text="￥10000000" textColor="red"/>
                <MoneyFormatText bigTextFontSize={20} smallTextFontSize={15} text="￥10000000" textColor="red"/>
                <MoneyFormatText bigTextFontSize={20} smallTextFontSize={20} text="￥10000000" textColor="red"/>
                <MoneyFormatText bigTextFontSize={20} smallTextFontSize={10} text="-10000000" textColor="red"
                                 hasRMB={false}/>
                <MoneyFormatText bigTextFontSize={20} smallTextFontSize={15} text="10000000" textColor="red" RMB="$"/>
                <MoneyFormatText bigTextFontSize={20} smallTextFontSize={15} text="$10000000" textColor="red" RMB="￥"/>
                <MoneyFormatText bigTextFontSize={20} smallTextFontSize={20} text="￥10000000" textColor="red" hasRMB={false}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MoneyFormatTextExample', () => MoneyFormatTextExample);
