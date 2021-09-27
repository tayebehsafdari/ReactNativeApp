import React, {useEffect} from 'react';
import {Actions} from 'react-native-router-flux';
import styles from "../assets/css";
import AsyncStorage from "@react-native-async-storage/async-storage";


const PushController = (props) => {
    useEffect(() => {
        checkUserLogin().then(status => {
            if (!status) {
                AsyncStorage.removeItem('apiToken');
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
    return null;
}

export default PushController;