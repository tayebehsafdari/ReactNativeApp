import React from 'react';
// import {View, Text, ActivityIndicator} from 'react-native';
import {StatusBar} from 'react-native';
import {Container, Text, Spinner} from 'native-base';
import styles from "../assets/css";

const Splash = (props) => {
    const style = styles.index;
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