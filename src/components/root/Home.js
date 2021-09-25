import React from 'react';
import {Button, Container, Content, Header, Right, Left, Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import {form} from "../../assets/css";

const Home = (props) => {
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
                    }}>صفحه ورود</Text>
                </Right>
            </Header>
            <Content>
                <Button full style={[form.submitButton, {marginTop: 20, marginLeft: 10, marginRight: 10}]}>
                    <Text style={form.submitText}>خروج</Text>
                </Button>
            </Content>
        </Container>
    );
}

export default Home;