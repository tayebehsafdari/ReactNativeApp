import React, {useEffect} from 'react';
// import {View, Text, ActivityIndicator} from 'react-native';
import {StatusBar} from 'react-native';
import {Container, Text, Spinner} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles from "../assets/css";
import Home from "./root/Home";
import Login from "./Login";

const Splash = (props) => {
    const style = styles.index;

    useEffect(() => {
        setTimeout(() => {
            if (false) {
                Actions.reset('root');
            } else {
                Actions.reset('auth');
            }
        }, 2000);

    }, []);
    return (
        /* <View style={{flex: 1, backgroundColor: '#34495e', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18, marginBottom: 15}}>Splash Page</Text>
            <ActivityIndicator color="red" size="large"/>
        </View> */
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

export default Splash;