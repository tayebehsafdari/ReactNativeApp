import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    Header,
    Right,
    Left,
    Icon,
    View,
    Text,
    Image
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
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'IRANSansMobile'}}>به صفحه آپلود تصویر خوش آمدید.</Text>
                <Button>
                    <Text style={{fontFamily: 'IRANSansMobile'}}>انتخاب تصویر</Text>
                </Button>
                <Button>
                    <Text style={{fontFamily: 'IRANSansMobile'}}>آپلود تصویر</Text>
                </Button>
                <Image source={{uri: ''}} style={{width: 220, height: 200}}/>
            </View>
        </Container>
    );
}

export default AvatarUpload;