import React, {useEffect} from 'react';
// import {View, Text, ActivityIndicator} from 'react-native';
import {StatusBar} from 'react-native';
import {Container, Text, Spinner} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles from "../assets/css";
import Home from "./root/Home";
import Login from "./Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import stat from "native-base/src/theme/components/stat";

const Splash = (props) => {
    const style = styles.index;

    useEffect(() => {
        /* setTimeout(() => {
            if (false) {
                Actions.reset('root');
            } else {
                Actions.reset('auth');
            }
        }, 2000); */
        AsyncStorage.removeItem('apiToken');
        checkUserLogin().then(status => {
            if (status) {
                Actions.reset('root');
            } else {
                Actions.reset('auth');
            }
        });
    }, []);
    const checkUserLogin = async () => {
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
            return apiToken === null
                ? false
                : await checkUserLoginFromApi(apiToken);
        } catch (error) {
            console.log(error);
        }
    };
    const checkUserLoginFromApi = async (apiToken) => {
        try {
            let response = await fetch(`?api_token=${apiToken}`);
            return response.status === 200;
        } catch (error) {
            console.log(error);
        }
    };
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