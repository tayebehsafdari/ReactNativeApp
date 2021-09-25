import React, {useEffect, useState} from 'react';
import {Button, Container, Content, Header, Right, Left, Icon, View, Text, FlatList} from "native-base";
import {Actions} from "react-native-router-flux";
import {form} from "../../assets/css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Product from "../Product";

const Home = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

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
        AsyncStorage.multiRemove(['user:name', 'user:email']);
        getProductRequest();
    }, []);
    const getProductRequest = () => {
        fetch(`?page=${page}`)
            .then(response => response.json())
            .then(json => setProducts(json.data.data))
            .catch(error => console.log(error));
    };
    const renderItem = ({item}) => {
        return <Product product={item}/>;
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
                    }}>صفحه اصلی</Text>
                </Right>
            </Header>
            {/* <Content>
                <View>
                    <Text>نام کاربری: {user.name}</Text>
                    <Text>ایمیل شما: {user.email}</Text>
                </View>
                <Button full style={[form.submitButton, {marginTop: 20, marginLeft: 10, marginRight: 10}]}>
                    <Text style={form.submitText}>خروج</Text>
                </Button>
            </Content> */}
            <FlatList data={products} renderItem={renderItem} keyExtractor={item => item.id}/>
        </Container>
    );
}

export default Home;