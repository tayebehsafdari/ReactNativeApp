import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    Header,
    Right,
    Left,
    Icon,
    View,
    Text
} from "native-base";
import {Actions} from "react-native-router-flux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AvatarUpload = (props) => {
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
    }, []);

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
                    <Icon
                        name="md-menu"
                        onPress={() => Actions.drawerOpen()}
                        style={{color: 'white', fontWeight: 500}}
                    />
                </Left>
                <Right>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'IRANSansMobile'
                    }}>آپلود تصویر</Text>
                </Right>
            </Header>
            <View></View>
        </Container>
    );
}

export default AvatarUpload;