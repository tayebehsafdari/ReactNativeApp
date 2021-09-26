import React from 'react';

import {Card, CardItem, Left, Right, Thumbnail, Body, Text, Image, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles from "../assets/css";
import {WebView} from 'react-native-webview';

const BuyProduct = () => {

    return (
        <WebView source={{uri: 'https://reactnative.dev/'}}/>
    );
}

export default BuyProduct;