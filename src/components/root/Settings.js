import React from 'react';
import {Button, Container, Content, Header, Right, Left, Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import {form} from "../../assets/css";

const Settings = (props) => {
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
                    }}>تنظیمات</Text>
                </Right>
            </Header>
            <Content>
                <Text>صفحه تنظیمات</Text>
            </Content>
        </Container>
    );
}

export default Settings;