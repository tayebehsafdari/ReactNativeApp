import React, {useState, useEffect} from 'react';

import {
    Left,
    Right,
    Text,
    Button,
    Header,
    Icon,
    Container,
    View,
    Spinner
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles, {form} from "../assets/css";
import {WebView} from 'react-native-webview';
import AsyncStorage from "@react-native-async-storage/async-storage";

const BuyProduct = ({product}) => {
    const [apiToken, setApiToken] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('apiToken', (error, apiToken) => setApiToken(apiToken));
    }, []);
    const renderLoading = () => {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Spinner color="#2c3e50"/>
        </View>;
    };
    const renderWebView = (productId) => {
        return <WebView
            source={{
                uri: 'https://reactnative.dev/',
                method: 'POST',
                body: `product_id=${productId}&api_token=${apiToken}`
            }}
            startInLoadingState={true}
            renderLoading={renderLoading}
        />;
    };
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
                    <Button transparent onPress={() => Actions.reset('root')}>
                        <Icon name="md-arrow-round-back"/>
                    </Button>
                </Left>
                <Right>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'IRANSansMobile'
                    }}>خرید {product.title}: </Text>
                </Right>
            </Header>
            {apiToken === null ? renderLoading() : renderWebView(product.id)}
        </Container>
    )
        ;
}

export default BuyProduct;