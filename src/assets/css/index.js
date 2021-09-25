// import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const index = EStyleSheet.create({
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

export const form = EStyleSheet.create({
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
    },
    error: {
        fontSize: 12,
        fontFamily: '$fontFamily',
        color: '#ed2f2f',
        marginBottom: 10
    }
});

export const drawer = EStyleSheet.create({
    container: {
        flex: 1
    },
    imageHeader: {
        height: 180,
        width: '100%'
    },
    item: {
        justifyContent: 'flex-end',
        padding: 10
    },
    itemTitle: {
        fontFamily: '$fontFamily'
    },
    itemIcon: {
        marginLeft: 10
    },
});

export default styles = {
    index
};