import React, {useEffect} from 'react';
// import {View, Text, ActivityIndicator} from 'react-native';
import {StatusBar} from 'react-native';
import {Container, Text, Spinner} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles from "../assets/css";

const Product = (props) => {

    return (
        <Container style={style.splashContainer}>
            <StatusBar
                backgroundColor='$statusBarColor'
                barStyle='light-content'
            />
            <Text style={style.splashText}>مجله آموزشی طیبه صفدری دوست</Text>
            <Spinner/>
        </Container>
    );
}

export default Product;