import React from 'react';
import {Image} from 'react-native';

import {View, Text, Item, Icon} from 'native-base';
import {Actions} from "react-native-router-flux";
import {drawer} from "../assets/css";

const DrawerLayout = (props) => {
    return (
        <View style={drawer.container}>
            <Image source={require('./../assets/images/ReactNative.png')} style={drawer.imageHeader}/>
            <View>
                <Item style={drawer.item}>
                    <Text style={drawer.itemTitle}>خانه</Text>
                    <Icon name="md-home" style={drawer.itemIcon}/>
                </Item>
                <Item style={drawer.item}>
                    <Text style={drawer.itemTitle}>تنظیمات</Text>
                    <Icon name="md-settings" style={drawer.itemIcon}/>
                </Item>
            </View>
        </View>
    );
}

export default DrawerLayout;