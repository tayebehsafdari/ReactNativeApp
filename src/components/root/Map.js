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
import MapView from 'react-native-maps';

const Map = (props) => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    useEffect(() => {
    }, []);
    const onRegionChange = () => {
        setRegion({region});
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
                    }}>نقشه</Text>
                </Right>
            </Header>
            <MapView region={region} onRegionChange={onRegionChange}/>
        </Container>
    );
}

export default Map;