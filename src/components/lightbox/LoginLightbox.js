import React, {useState} from 'react';
import {View, Text, Animated} from 'react-native';
// import {Container, Text, Spinner} from 'native-base';
import styles from "../assets/css";

const LoginLightbox = (props) => {
    const [opacity, setOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 100
        }).start();
    }, [opacity]);

    return (
        <Animated.View style={{}}>
        </Animated.View>
    );
}

export default LoginLightbox;