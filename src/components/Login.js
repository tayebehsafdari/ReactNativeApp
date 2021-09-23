import React from 'react';
import {
    Container,
    Header,
    Left,
    Right,
    Button,
    Text,
    Content,
    Form,
    Item,
    Input,
    Icon,
    Button
} from 'native-base';
import {form} from "../assets/css";

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
                <Form style={form.styleForm}>
                    <Item rounded style={form.item}>
                        <Input placeholder='ایمیل خود را وارد کنید' style={form.input}/>
                        <Icon active name="md-mail"/>
                    </Item>
                    <Item rounded style={form.item}>
                        <Input placeholder='پسورد خود را وارد کنید' style={form.input}/>
                        <Icon active name="md-key"/>
                    </Item>
                    <Button full style={form.submitButton}>
                        <Text style={form.submitText}>ورود</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default Login;