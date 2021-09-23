import React from 'react';
// import {View, Text, ActivityIndicator} from 'react-native';
import {StatusBar} from 'react-native';
import {Container, Text, Spinner} from 'native-base';

const Splash = (props) => {
    return (
        /* <View style={{flex: 1, backgroundColor: '#34495e', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18, marginBottom: 15}}>Splash Page</Text>
            <ActivityIndicator color="red" size="large"/>
        </View> */
        <Container style={{
            flex: 1,
            backgroundColor: '#34495e',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <StatusBar
                backgroundColor='#2c3e50'
                barStyle='light-content'
            />
            <Text style={{
                color: 'white',
                fontSize: 18,
                marginBottom: 15,
                fontFamily: 'IRANSansMobile'
            }}
            >
                مجله آموزشی طیبه صفدری دوست
            </Text>
            <Spinner/>
        </Container>
    );
}

export default Splash;