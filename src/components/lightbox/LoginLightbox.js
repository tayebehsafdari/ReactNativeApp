import React from 'react';
import {Text} from 'react-native';
import BaseLightbox from "./BaseLightbox";

const LoginLightbox = (props) => {

    return (
        <BaseLightbox verticalPercent={0.7} horizontalPercent={0.5}>
            <Text>Welcome to my website</Text>
            <Text>Learn React Native</Text>
        </BaseLightbox>
    );
}

export default LoginLightbox;