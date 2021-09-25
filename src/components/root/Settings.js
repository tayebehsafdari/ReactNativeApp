import React, {useState, useEffect} from 'react';
import {Button, Container, Content, Header, Right, Left, Icon, Item, Input, Text, Form} from "native-base";
import {Actions} from "react-native-router-flux";
import {form} from "../../assets/css";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    useEffect(() => {
        AsyncStorage.getItem('user:name', (error, result) => {
            setUser(prevState => {
                return {
                    ...prevState,
                    name: result
                };
            });
        });
        AsyncStorage.getItem('user:email', (error, result) => {
            setUser(prevState => {
                return {
                    ...prevState,
                    email: result
                };
            });
        });
    }, []);
    const changeEmail = (text) => {
        setUser(prevState => {
            return {
                ...prevState,
                email: text
            };
        });
    };
    const changeName = (text) => {
        setUser(prevState => {
            return {
                ...prevState,
                name: text
            };
        });
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
                <Form style={form.styleForm}>
                    <Item rounded style={form.item}>
                        <Input
                            placeholder='نام کاربری'
                            style={form.input}
                            defaultValue={user.name}
                            onChangeText={changeName}
                        />
                        <Icon active name="md-mail"/>
                    </Item>
                    <Item rounded style={form.item}>
                        <Input
                            placeholder='ایمیل شما'
                            style={form.input}
                            defaultValue={user.email}
                            onChangeText={changeEmail}
                        />
                        <Icon active name="md-key"/>
                    </Item>
                    <Button full style={form.submitButton} onPress={() => Actions.LoginLightbox()}>
                        <Text style={form.submitText}>ورود</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default Settings;