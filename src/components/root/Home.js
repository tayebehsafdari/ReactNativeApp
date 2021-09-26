import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    Content,
    Header,
    Right,
    Left,
    Icon,
    View,
    Text,
    FlatList,
    Spinner
} from "native-base";
import {Actions} from "react-native-router-flux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Product from "../Product";

const Home = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

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
        AsyncStorage.getItem('apiToken', (error, result) => {
            console.log(result);
        });
    }, []);
    const getProductRequest = async () => {
        try {
            const response = await fetch(`?page=${page}`);
            const json = await response.json();
            let products = json.data.data;
            if (products.length > 0) {
                setProducts(prevState => {
                    return page === 1 ? products : [...prevState, products];
                });
                setPage(json.data.current_page);
                setRefreshing(false);
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    };
    const renderItem = ({item}) => {
        return <Product product={item}/>;
    };
    const handleLoadMore = async () => {
        if (products.length > 0) {
            setLoading(true);
            setPage(page + 1, () => {
                getProductRequest();
            });
        }
    };
    const renderFooter = () => {
        if (!loading) return null;
        return <Spinner/>;
    };
    const handleRefresh = async () => {
        setRefreshing(true);
        setPage(1, () => {
            getProductRequest();
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
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={() => <Spinner/>}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                onRefresh={handleRefresh}
                refreshing={refreshing}
            />
        </Container>
    );
}

export default Home;