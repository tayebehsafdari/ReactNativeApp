import React from 'react';
import {Container, Header, Left, Right, Button, Text} from 'native-base';

const Login = (props) => {
    return (
        <Container>
            <Header
                style={{
                    backgroundColor: '#34495e'
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
        </Container>
    );
}

export default Login;