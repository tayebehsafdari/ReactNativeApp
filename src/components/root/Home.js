import React, {useEffect, useState} from 'react';
import {AppState} from 'react-native';
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
import CheckLogin from "../CheckLogin";
import PushController from "../PushController";
import PushNotification from 'react-native-push-notification';
import {connect} from "react-redux";
import {decrementPage, incrementPage, receiveProducts, refreshProducts} from "../../redux/actions";
import NetInfo from "@react-native-community/netinfo";

const Home = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    // const [products, setProducts] = useState([]);
    // const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        /* AsyncStorage.multiGet(['user:name', 'user:email'], (error, result) => {
            setUser({
                name: result[0][1],
                email: result[1][1]
            });
        }); */
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if (state.isConnected) {
                props.refreshProducts();
                getProductRequest();
            } else {
                alert('اتصال اینترنت خود را چک کنید.');
            }
        });

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
        PushNotification.localNotification({
            title: "My Notification Title", // (optional)
            message: "My Notification Message" // (required)
        });
        const _handleAppStateChange = (appState) => {
            if (appState === 'background') {
                PushNotification.localNotificationSchedule({
                    //... You can use all the options from localNotifications
                    message: "My Notification Message", // (required)
                    date: new Date(Date.now() + 5 * 1000) // in 5 secs
                });
            }
        };
        AppState.addEventListener('change', _handleAppStateChange);
        return () => {
            AppState.removeEventListener('change', _handleAppStateChange);
        };
    }, []);
    const getProductRequest = async () => {
        try {
            const response = await fetch(`?page=${props.page}`);
            const json = await response.json();
            let products = json.data.data;
            if (products.length > 0) {
                /* setProducts(prevState => {
                    return page === 1 ? products : [...prevState, products];
                });
                setPage(json.data.current_page); */
                setRefreshing(false);
                props.receiveProducts(products, json.data.current_page);
            } else {
                props.decrementPage();
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
        if (props.products.length >= 6) {
            setLoading(true, () => {
                getProductRequest();
            });
            /* setPage(props.page + 1, () => {
                 getProductRequest();
             }); */
            props.incrementPage();
        }
    };
    const renderFooter = () => {
        if (!loading) return null;
        return <Spinner/>;
    };
    const handleRefresh = async () => {
        setRefreshing(true);
        /* setPage(1, () => {
            getProductRequest();
        }); */
        props.refreshProducts();
    };
    return (
        <Container>
            <CheckLogin/>
            <PushController/>
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
                data={props.products}
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
const mapStateToProps = state => {
    return {
        products: state.products.data,
        page: state.products.page
    };
};
const mapDispatchToProps = dispatch => {
    return {
        receiveProducts: (products, page) => dispatch(receiveProducts(products, page)),
        incrementPage: () => dispatch(incrementPage()),
        decrementPage: () => dispatch(decrementPage()),
        refreshProducts: () => dispatch(refreshProducts())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);