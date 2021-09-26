import React, {useState} from 'react';
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
import {Actions} from 'react-native-router-flux';

const Login = (props) => {
    const [email, setEmail] = useState({
        value: '',
        error: ''
    });
    const [password, setPassword] = useState({
        value: '',
        error: ''
    });
    const login = async () => {
        if (email.value === '') {
            setEmail({
                value: '',
                error: 'فیلد ایمیل نمی تواند خالی بماند.'
            });
            return;
        }
        if (password.value === '') {
            setPassword({
                value: '',
                error: 'فیلد پسورد نمی تواند خالی بماند.'
            });
            return;
        }
        await requestLoginFromApi({
            email: email.value,
            password: password.value
        });
    };
    const changeEmailInput = (text) => {
        setEmail({
            value: text,
            error: ''
        });
    };
    const changePasswordInput = (text) => {
        setPassword({
            value: text,
            error: ''
        });
    };
    const _checkDisplay = (field) => {
        return {display: field === '' ? 'none' : 'flex'};
    };
    const requestLoginFromApi = async (params) => {
        try {
            let {email, password} = params;
            let response = await fetch(``, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json; charset=UTF-8'
                },
            });
            let json = await response.json();
            if (json.code === 200) {
                setDataUser(json.data.api_token);
            }
            if (json.code === 422) {
                console.log('validate');
            }
            if (json.code === 200) {
                console.log('auth');
            }
        } catch (error) {
            console.log(error)
        }
    };
    const setDataUser = (data) => {
    };
    const emailError = email.error;
    const passwordError = password.error;

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
                    <Item rounded style={form.item} error={emailError !== ''}>
                        <Input
                            placeholder='ایمیل خود را وارد کنید'
                            style={form.input}
                            onChangeText={changeEmailInput}
                        />
                        <Icon active name="md-mail"/>
                    </Item>
                    <Text style={[form.error, _checkDisplay(emailError)]}>{emailError}</Text>
                    <Item rounded style={form.item} error={passwordError !== ''}>
                        <Input
                            placeholder='پسورد خود را وارد کنید'
                            style={form.input}
                            onChangeText={changePasswordInput}
                            secureTextEntry
                        />
                        <Icon active name="md-key"/>
                    </Item>
                    <Text style={[form.error, _checkDisplay(passwordError)]}>{passwordError}</Text>
                    {/* <Button full style={form.submitButton} onPress={() => Actions.LoginLightbox()}>
                        <Text style={form.submitText}>ورود</Text>
                    </Button> */}
                    <Button full style={form.submitButton} onPress={login}>
                        <Text style={form.submitText}>ورود</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default Login;