import React from 'react';

import {
    Card,
    CardItem,
    Left,
    Right,
    Thumbnail,
    Body,
    Text,
    Image,
    Button,
    Header,
    Content,
    Form,
    Item, Input, Icon, Container
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles, {form} from "../assets/css";
import {WebView} from 'react-native-webview';

const BuyProduct = () => {

    return (
        <Container>
            <Header
                style={{
                    backgroundColor: '$headerColor'
                }}
                androidStatusBarColor='#2c3e50'
                iosBarStyle='light-content'
            >
                <Left>
                    <Button transparent>
                        <Text style={{
                            color: 'white',
                            fontFamily: 'IRANSansMobile'
                        }}>عضویت</Text>
                    </Button>
                </Left>
                <Right>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'IRANSansMobile'
                    }}>صفحه ورود</Text>
                </Right>
            </Header>
            <WebView source={{uri: 'https://reactnative.dev/'}}/>
        </Container>
    );
}

export default BuyProduct;