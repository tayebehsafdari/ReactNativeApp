import React, {useState} from 'react';
import {View, Text, Animated, Dimensions} from 'react-native';
// import {Container, Text, Spinner} from 'native-base';
import styles from "../assets/css";

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const BaseLightbox = (props) => {
    const [opacity, setOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 100
        }).start();
    }, [opacity]);

    const _renderLightbox = () => {
        
    }

    return (
        <Animated.View style={{}}>
        </Animated.View>
    );
}

export default BaseLightbox;