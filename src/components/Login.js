import React from 'react';
import {Container, Header, Left, Right, Button, Text, Content, Form, Item, Input, Icon} from 'native-base';

const Login = (props) => {
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
            <Content>
                <Form>
                    <Item rounded>
                        <Input placeholder='ایمیل خود را وارد کنید'/>
                        <Icon active name="md-mail"/>
                    </Item>
                    <Item rounded>
                        <Input placeholder='پسورد خود را وارد کنید'/>
                        <Icon active name="md-key"/>
                    </Item>
                </Form>
            </Content>
        </Container>
    );
}

export default Login;