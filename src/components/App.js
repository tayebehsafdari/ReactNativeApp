import React from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {Router, Scene, Lightbox} from 'react-native-router-flux';
import Application from "./Application";
import Login from "./Login";
import LoginLightbox from "./lightbox/LoginLightbox";

EStyleSheet.build({
    $statusBarColor: '#2c3e50',
    $headerColor: '#34495e',
    $fontFamily: 'IRANSansMobile'
});

/* const LoginLightbox = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>lightbox</Text>
        </View>
    );
}; */

const App: () => Node = () => {
    return (
        <Router>
            <Lightbox>
                <Scene key="root" hideNavBar>
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="home" component={Application} initial/>
                </Scene>
                <Scene key="loginLightbox" component={LoginLightbox}/>
            </Lightbox>
        </Router>
    );
};

const styles = StyleSheet.create({});

export default App;
