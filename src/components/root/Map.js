import React, {useEffect, useState} from 'react';
import {
    Fab,
    Container,
    Header,
    Right,
    Left,
    Icon,
    Text
} from "native-base";
import {Actions} from "react-native-router-flux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapView, {Marker} from 'react-native-maps';

const Map = (props) => {
    const [region, setRegion] = useState({
        latitude: 35.78586601896061,
        longitude: 51.416099582933306,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    const [markers, setMarkers] = useState([]);

    const makeMarker = ({nativeEvent}) => {
        const pos = nativeEvent.coordinate;
        setMarkers(prevState => {
            return [
                ...prevState,
                {
                    latitude: pos.latitude,
                    longitude: pos.longitude,
                }
            ];
        });
    };
    const renderMarker = (marker, index) => {
        return <Marker
            key={index}
            coordinate={marker}
        />;
    };
    const onRegionChange = (region) => {
        setRegion({region});
    };
    const getCurrentPosition = () => {
        /* navigator.geolocation.getCurrentPosition(position => {
            setRegion({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, error => {
            console.log(error);
        }, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 10
        }); */
        navigator.geolocation.watchPosition(position => {
            setRegion({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, error => {
            console.log(error);
        }, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 10
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
                    }}>نقشه</Text>
                </Right>
            </Header>
            <MapView
                style={{flex: 1}}
                region={region}
                showsTraffic={true}
                onLongPress={makeMarker}
                onRegionChange={onRegionChange}
                showsUserLocation={true}
            >
                {markers.map(renderMarker)}
            </MapView>
            <Fab
                direction={up}
                style={{backgroundColor: '#5067FF'}}
                position={bottomRight}
                onPress={getCurrentPosition}
            >
                <Icon name="md-locate"/>
            </Fab>
        </Container>
    );
}


export default Map;