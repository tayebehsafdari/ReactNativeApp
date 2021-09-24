/**
 * @format
 */
import React, {useEffect} from 'react';
import {AppRegistry, View, Image, Animated} from 'react-native';
// import App from './App';
import App from "./src/components/App";
import {name as appName} from './app.json';
// import {Easing} from "react-native-reanimated/src/reanimated2/Easing";
// import {Button} from "native-base";

// const array = [];
/* for (let i = 0; i < 500; i++) {
    array.push(i);
} */
// const App = () => {
// const spinValue = new Animated.Value(0);
// const animatedValue = new Animated.Value(0);
// const springValue = new Animated.Value(.3);
// const animateValue1 = new Animated.Value(0);
// const animateValue2 = new Animated.Value(0);
// const animateValue3 = new Animated.Value(0);
// const animateValue = [];

/* const spin1 = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear()
    }).start(() => spin1());
} */
/* const animate1 = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear()
    }).start(() => animate1());
} */
/* const spin2 = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
}); */
/* const marginLeft = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300]
});
const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0]
});
const movingMargin = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0]
});
const fontSize = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [16, 30, 16]
});
const rotateX = spinValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg']
}); */
/* const spring = () => {
    springValue.setValue(.3);
    Animated.spring(springValue, {
        toValue: 1,
        friction: 7,
        tension: 40
    }).start();
} */
/* const animate = () => {
    animateValue1.setValue(0);
    animateValue2.setValue(0);
    animateValue3.setValue(0);
    const createAnimation = (value, duration, easing, delay = 0) => Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay
    });
    Animated.parallel([
        createAnimation(animateValue1, 2000, Easing.ease()),
        createAnimation(animateValue2, 1000, Easing.ease(), 1000),
        createAnimation(animateValue3, 1000, Easing.ease(), 2000)
    ]).start();
}; */
/* array.forEach(value => {
    animateValue[value] = new Animated.Value(0);
});
useEffect(() => {
    animate();
}, [animateValue]);
const animate = () => {
    const animations = array.map(item => {
        return Animated.timing(animateValue[item], {
            toValue: 1,
            duration: 50
        });
        Animated.sequence(animations).start();
    });

} */
/* const scaleText = animateValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [.5, 2]
});
const spinText = animateValue1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg']
});
const introButton = animateValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 380]
}); */
/* const animations = array.map((a, i) =>
    <Animated.View key={i} style={{
        opacity: animateValue[a],
        height: 20,
        width: 20,
        backgroundColor: 'blue',
        marginLeft: 3,
        marginTop: 3
    }}>
        <Text>Welcome to my site</Text>
    </Animated.View>); */
// return (
/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{marginBottom: 80}} onPress={spring}>spring</Text>
    <Animated.Image
        source={{uri: './src/assets/images/ReactNative.png'}}
        style={{
            height: 200,
            width: 225,
            transform: [
                // {rotate: spin2}
                {scale: springValue}
            ]
        }}/>
</View> */
/* <View style={{flex: 1, justifyContent: 'center'}}>
    <Animated.View style={{marginLeft, height: 50, width: 50, backgroundColor: 'yellow'}}/>
    <Animated.View style={{opacity, marginTop: 15, height: 30, width: 60, backgroundColor: 'black'}}/>
    <Animated.View
        style={{marginLeft: movingMargin, marginTop: 15, height: 50, width: 50, backgroundColor: 'yellow'}}/>
    <Animated.Text style={{marginTop: 15, fontSize, color: 'orange'}}>
        طیبه صفدری دوست
    </Animated.Text>
    <Animated.View style={{
        marginTop: 15, backgroundColor: 'blue', transform: [{rotateX}]
    }}>
        <Text style={{color: 'white'}}>Hello World!</Text>
    </Animated.View>
</View> */
/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Animated.View style={{transform: [{scale: scaleText}]}}>
        <Text>Welcome to my site</Text>
    </Animated.View>
    <Animated.View style={{transform: [{rotate: spinText}], marginTop: 20}}>
        <Text style={{fontSize: 16}}>learn React Native</Text>
    </Animated.View>
    <Animated.View style={{position: 'absolute', top: introButton}}>
        <Button title="Click here to get started" onPress={() => animate()}/>
    </Animated.View>
</View> */
/* <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
    {animations}
</View> */
// );
// };

AppRegistry.registerComponent(appName, () => App);
