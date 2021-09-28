import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {Router, Scene, Lightbox, Drawer} from 'react-native-router-flux';
// import Application from "./Application";
import Login from "./Login";
import LoginLightbox from "./lightbox/LoginLightbox";
import Home from "./root/Home";
import Splash from "./Splash";
import DrawerLayout from "./DrawerLayout";
import Settings from "./root/Settings";
import BuyProduct from "./BuyProduct";
import UserProduct from "./UserProduct";
import Map from "./root/Map";
import AvatarUpload from "./root/AvatarUpload";
import BackgroundTimer from 'react-native-background-timer';

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
    useEffect(() => {
        const intervalId = BackgroundTimer.setInterval(() => {
            console.log('tic');
        }, 5000);
        return () => {
            BackgroundTimer.clearInterval(intervalId);
        };
    }, []);
    return (
        <Router>
            <Scene hideNavBar>
                <Scene key="root" hideNavBar>
                    <Drawer key="drawer" contentComponent={DrawerLayout} drawerPosition='right'>
                        <Scene hideNavBar>
                            <Scene key="home" component={Home} initial/>
                            <Scene key="settings" component={Settings}/>
                            <Scene key="userProduct" component={UserProduct}/>
                            <Scene key="map" component={Map}/>
                            <Scene key="avatarUpload" component={AvatarUpload}/>
                        </Scene>
                    </Drawer>
                </Scene>
                <Lightbox key="auth">
                    <Scene hideNavBar>
                        {/*<Scene key="login" component={Login} title="Login"/>*/}
                        {/*<Scene key="home" component={Application} initial/>*/}
                        <Scene key="login" component={Login} initial/>
                    </Scene>
                    <Scene key="loginLightbox" component={LoginLightbox}/>
                </Lightbox>
                <Scene key="splash" component={Splash} initial/>
                <Scene key="buyProduct" component={BuyProduct}/>
                <Scene/>
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({});

export default App;
