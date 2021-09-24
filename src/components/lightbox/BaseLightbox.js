import React, {useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import {View, Button, Text} from 'native-base';

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
        const {children, verticalPercent = 1, horizontalPercent = 1} = props;
        const width = verticalPercent ? deviceWidth * verticalPercent : deviceWidth;
        const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
        return (
            <View style={{
                width,
                height,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 4
            }}>
                {children}
                <Button>
                </Button>
            </View>
        );
    }

    return (
        <Animated.View style={{opacity}}>
        </Animated.View>
    );
}

export default BaseLightbox;