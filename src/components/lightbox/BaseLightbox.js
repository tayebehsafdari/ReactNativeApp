import React, {useState} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {View, Button, Icon} from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const BaseLightbox = (props) => {
    const [opacity, setOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 200
        }).start();
    }, [opacity]);
    const close = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 200
        }).start(Actions.pop);
    };
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
                <Button transparent style={{position: 'absolute', top: 0, left: 0}} onPress={() => close()}>
                    <Icon name="md-close-circle" style={{fontSize: 30, color: '#34495e'}}/>
                </Button>
            </View>
        );
    };

    return (
        <Animated.View style={[styles.container, {opacity}]}>
            {_renderLightbox()}
        </Animated.View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52, 52, 52, .5)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BaseLightbox;