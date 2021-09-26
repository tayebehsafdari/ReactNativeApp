import React from 'react';
import {StatusBar} from 'react-native';
import {Card, CardItem, Left, Right, Thumbnail, Body, Text, Image, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles from "../assets/css";
import BuyProduct from "./BuyProduct";


const Product = ({product}) => {

    return (
        <Card style={{flex: 0}}>
            <CardItem>
                <Left>
                    <Body>
                        <Text style={{marginRight: 20, fontFamily: 'IRANSansMobile'}}>{product.title}</Text>
                        <Text style={{textAlign: 'right', fontFamily: 'IRANSansMobile'}} note>1987/05/25</Text>
                    </Body>
                    <Thumbnail source={{uri: product.image}}/>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: product.image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Text style={{fontFamily: 'IRANSansMobile'}} numberOfLines={3}>
                    {product.body}
                </Text>
            </CardItem>
            <CardItem>
                <Left>
                    <Button success onPress={() => Actions.BuyProduct({product})}>
                        <Text style={{fontFamily: 'IRANSansMobile'}}>خرید محصول</Text>
                    </Button>
                </Left>
                <Right>
                    <Text style={{fontSize: 15, fontFamily: 'IRANSansMobile'}}>تومان {product.price}</Text>
                </Right>
            </CardItem>
        </Card>
    );
}

export default Product;