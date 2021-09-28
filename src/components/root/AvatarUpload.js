import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    Header,
    Right,
    Left,
    Icon,
    View,
    Text,
    Image
} from "native-base";

import {Actions} from "react-native-router-flux";
import {picker} from "../ImagePicker";

const AvatarUpload = (props) => {
    const [avatarSource, setAvatarSource] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
    }, []);
    const showImagePicker = () => {
        picker((source, data) => {
            setAvatarSource(source, () => {
                console.log(avatarSource);
            });
            setData(data, () => {
                console.log(data);
            });
        });
    };
    const image = avatarSource === null ? null : <Image source={avatarSource} style={{width: 220, height: 200}}/>;
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
                    }}>آپلود تصویر</Text>
                </Right>
            </Header>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'IRANSansMobile'}}>به صفحه آپلود تصویر خوش آمدید.</Text>
                <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                    <Button style={{marginRight: 10}} onPress={showImagePicker}>
                        <Text style={{
                            fontFamily: 'IRANSansMobile',
                            paddingRight: 10,
                            paddingLeft: 10
                        }}>
                            انتخاب تصویر
                        </Text>
                    </Button>
                    <Button success>
                        <Text style={{
                            fontFamily: 'IRANSansMobile',
                            paddingRight: 10,
                            paddingLeft: 10
                        }}>
                            آپلود تصویر
                        </Text>
                    </Button>
                </View>
                {image}
            </View>
        </Container>
    );
}

export default AvatarUpload;