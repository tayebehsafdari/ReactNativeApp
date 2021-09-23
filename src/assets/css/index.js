import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const index = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: '#34495e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashText: {
        color: 'white',
        fontSize: 18,
        fontFamily: '$fontFamily'
    }
});

export const form = StyleSheet.create({
    styleForm: {
        padding: 20
    },
    item: {
        borderRadius: 5,
        marginBottom: 10,
        paddingRight: 10,
        paddingLeft: 10
    },
    input: {
        fontFamily: '$fontFamily',
        fontSize: 14
    },
    submitButton: {
        borderRadius: 5,
        backgroundColor: '$statusBarColor'
    },
    submitText: {
        fontSize: 16,
        fontFamily: '$fontFamily'
    }
});

export default styles = {
    index
};