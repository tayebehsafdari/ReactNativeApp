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
        /* AsyncStorage.multiGet(['user:name', 'user:email'], (error, result) => {
            setUser({
                name: result[0][1],
                email: result[1][1]
            });
        }); */
        AsyncStorage.getItem('user', (error, result) => {
            // console.log(result);
            let user = JSON.parse(result);
            setUser({
                name: user.name,
                email: user.email
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
    const changeSettings = () => {
        // AsyncStorage.setItem('user:name', user.name);
        // AsyncStorage.setItem('user:email', user.email);
        AsyncStorage.setItem('user', JSON.stringify(user));
        Actions.replace('root');
    }
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
                    {/*Actions.LoginLightbox()*/}
                    <Button full style={form.submitButton} onPress={changeSettings}>
                        <Text style={form.submitText}>ثبت تغییرات</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default Settings;