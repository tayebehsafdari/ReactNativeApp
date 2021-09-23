import React from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Application from "./Application";
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $statusBarColor: '#2c3e50',
    $headerColor: '#34495e'
});

const App: () => Node = () => {

    return (
        <Application/>
    );
};

const styles = StyleSheet.create({});

export default App;
